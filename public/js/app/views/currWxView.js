// currWxView.js

define(["jquery", "backbone", "text!templates/wx.html", "text!templates/currWx.html", "models/currWxModel"],

    function ($, Backbone, template, currWxTemplate, CurrWxModel) {

        var currWxView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".magic",

            // View constructor
            initialize: function () {

                _.bindAll(this, 'currCity');
                // Calls the view's render method
                this.render();
                this.model = new CurrWxModel();

            },

            // View Event Handlers
            events: {
                'change #currCity': 'currCity',
                'click #btnGetWx': 'getCurrWx'
            },

            // Renders the view's template to the UI
            render: function () {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                this.$currCity = this.$el.find('#currCity');

                // Maintains chainability
                return this;

            },

            currCity: function () {
                var city = this.$currCity.val();
            },

            getCurrWx: function () {
                var self = this;
                this.model.fetch({
                    success: function (model, response) {
                        console.log(response);
                        self.$el.find('#currWx').html( 'wind: ' + response.wind.speed );
                    },
                    error: function (model, response) {
                        console.log('error getting weather')
                    }

                });
            }

        });

// Returns the View class
        return currWxView;

    });
