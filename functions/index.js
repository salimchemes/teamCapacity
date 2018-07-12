const functions = require('firebase-functions');

exports.holidays = functions.https.onRequest((request, response) => {
    var holidays = [
        {
            day: 1,
            month: 1,
            year: 2018,
            name: "New Year's Day",
            country: 'us'
        }, {
            day: 15,
            year: 2018,
            month: 1,
            name: 'Martin Luther King, Jr Birthday',
            country: 'us'
        },
        {
            day: 2,
            month: 19,
            year: 2018,
            name: "President's day",
            country: 'us'
        }, {
            day: 28,
            month: 5,
            year: 2018,
            name: "Memorial day",
            country: 'us'
        }, {
            day: 4,
            month: 7,
            year: 2018,
            name: 'Independence day',
            country: 'us'
        }, {
            day: 3,
            month: 9,
            name: 'Labor day',
            country: 'us'
        },
        {
            day: 12,
            month: 11,
            year: 2018,
            name: "Veteran's day",
            country: 'us'
        }, {
            day: 22,
            month: 11,
            year: 2018,
            name: 'Thanksgiving day',
            country: 'us'
        }, {
            day: 23,
            month: 11,
            year: 2018,
            name: 'Day Following Thanksgiving Day',
            country: 'us'
        }, {
            day: 24,
            month: 12,
            year: 2018,
            name: 'Christmas Day',
            country: 'us'
        },
        {
            day: 1,
            month: 1,
            year: 2018,
            name: "New Year's Day",
            country: 'arg'
        }
    ]
    response.send(holidays);

});
