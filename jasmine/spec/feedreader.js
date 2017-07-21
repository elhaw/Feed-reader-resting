/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('names are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);

            });
                    
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('url are defined',function(){
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);

            });

         });

    });


    /* TODO: Write a new test suite named "The menu" */
     describe('The menu',function() {

         /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */         
         it('element are hidden',function(){
            verifyHidden =  function () {
                    var menuWidth = $('.slide-menu').outerWidth();
                    hiddenMenu = document.querySelector('.slide-menu'),
                    style = getComputedStyle(hiddenMenu, null).transform,
                    getArgumentValues= style.slice(6),
                    array = getArgumentValues.split(','),
                    number =   Number(array[4]) * -1;
               
                    if ((number >= menuWidth))
                    {
                        return true;
                    }  
                    
                return false;
            };
              expect(verifyHidden()).toBe(true);

         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
       

        it('Menu changing on click',function(){
                
                var className = document.body.className ;
                var menuIcon = document.querySelector(".menu-icon-link");
                expect(className).toBe("menu-hidden");

                menuIcon.click();
                expect(className).not.toBe("");

                 menuIcon.click();
                expect(className).toBe("menu-hidden");
                           
             });   
  });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
 
      

         describe('Initial Entries', function() {

         	beforeEach(function(done){
         		loadFeed(0, function(){

         			done();
         		});

         	});

         	it('at least one entry is loaded',function() {
         		var entryNumbers =document.getElementsByClassName("entry").length;
         		expect(entryNumbers).toBeGreaterThan(0);

           	});



         });


    /* TODO: Write a new test suite named "New Feed Selection" */

    	describe('New Feed Selection',function(){

  		var firstFeed, thirdFeed ;
  		beforeEach(function(done){
         		loadFeed(0, function(){

         		firstFeed = $(".feed").html();
         		loadFeed(2, function(done){

         	    thirdFeed = $(".feed").html();
         	    });
         		done();

         	 });

         });
            	
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         it('feed is changing after loading feeds',function() {
         	expect(firstFeed).not.toEqual(thirdFeed);
         	 
        });
    
    });
});