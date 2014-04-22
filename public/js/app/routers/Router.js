// Router.js

define(["jquery", "backbone", "models/IndexModel", "views/IndexView", "views/CurrWxView", "collections/IndexCollection"],

    function($, Backbone, Model, View, CurrWxView, Collection) {

        var Router = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index",
                "test":"test",
                "currwx":"currwx"

            },

            index: function() {

                // Instantiates a new view which will render the header text to the page
                new View();

            },

            currwx: function() {
                new CurrWxView();
            },

            test: function(){
                alert('test!');
            }

        });

        // Returns the DesktopRouter class
        return Router;

    }

);