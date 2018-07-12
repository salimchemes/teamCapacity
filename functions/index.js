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
        },
        {
            day: 12,
            month: 2,
            year: 2018,
            name: "Carnival",
            country: 'arg'
        },
        {
            day: 13,
            month: 2,
            year: 2018,
            name: "Carnival",
            country: 'arg'
        },
        {
            day: 24,
            month: 3,
            year: 2018,
            name: "Memorial day",
            country: 'arg'
        },
        {
            day: 29,
            month: 3,
            year: 2018,
            name: "Maundy Thursday",
            country: 'arg'
        },
        {
            day: 30,
            month: 3,
            year: 2018,
            name: "Good friday",
            country: 'arg'
        },
        {
            day: 2,
            month: 4,
            year: 2018,
            name: "Day of the Veterans",
            country: 'arg'
        },
        {
            day: 30,
            month: 4,
            year: 2018,
            name: "Bridge Public Holiday",
            country: 'arg'
        },
        {
            day: 1,
            month: 5,
            year: 2018,
            name: "Labor Day / May Day",
            country: 'arg'
        },
        {
            day: 25,
            month: 5,
            year: 2018,
            name: "National Day/May 1810 Revolution",
            country: 'arg'
        },
        {
            day: 20,
            month: 6,
            year: 2018,
            name: "Flag Day",
            country: 'arg'
        },
        {
            day: 9,
            month: 7,
            year: 2018,
            name: "Independence Day",
            country: 'arg'
        },
        {
            day: 20,
            month: 8,
            year: 2018,
            name: "San Martín Day",
            country: 'arg'
        },
        {
            day: 15,
            month: 10,
            year: 2018,
            name: "Day of respect for cultural diversity",
            country: 'arg'
        },
        {
            day: 19,
            month: 11,
            year: 2018,
            name: "National Sovereignty Day",
            country: 'arg'
        },
        {
            day: 24,
            month: 12,
            year: 2018,
            name: "Bridge Public Holiday",
            country: 'arg'
        },
        {
            day: 25,
            month: 12,
            year: 2018,
            name: "Christmas Day",
            country: 'arg'
        },
        {
            day: 31,
            month: 12,
            year: 2018,
            name: "New Year's Eve",
            country: 'arg'
        }

    ]
    response.send(holidays);

});
