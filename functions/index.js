const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

exports.holidays = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        var holidays = [
            {
                day: 1,
                month: 1,
                year: 2018,
                name: "New Year's Day",
                country: 'us',
                date: new Date(1, 1, 2018)
            }, {
                day: 15,
                year: 2018,
                month: 1,
                name: 'Martin Luther King, Jr Birthday',
                country: 'us',
                date: new Date(1, 1, 2018)
            },
            {
                day: 2,
                month: 19,
                year: 2018,
                name: "President's day",
                country: 'us',
                date: new Date(1, 1, 2018)
            }, {
                day: 28,
                month: 5,
                year: 2018,
                name: "Memorial day",
                country: 'us',
                date: new Date(1, 1, 2018)
            }, {
                day: 4,
                month: 7,
                year: 2018,
                name: 'Independence day',
                country: 'us',
                date: new Date(1, 1, 2018)
            }, {
                day: 3,
                month: 9,
                year: 2018,
                name: 'Labor day',
                country: 'us',
                date: new Date(1, 1, 2018)
            },
            {
                day: 12,
                month: 11,
                year: 2018,
                name: "Veteran's day",
                country: 'us',
                date: new Date(1, 1, 2018)
            }, {
                day: 22,
                month: 11,
                year: 2018,
                name: 'Thanksgiving day',
                country: 'us',
                date: new Date(1, 1, 2018)
            }, {
                day: 23,
                month: 11,
                year: 2018,
                name: 'Day Following Thanksgiving Day',
                country: 'us',
                date: new Date(1, 1, 2018)
            }, {
                day: 24,
                month: 12,
                year: 2018,
                name: 'Christmas Day',
                country: 'us',
                date: new Date(1, 1, 2018)
            },
            {
                day: 1,
                month: 1,
                year: 2018,
                name: "New Year's Day",
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 12,
                month: 2,
                year: 2018,
                name: "Carnival",
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 13,
                month: 2,
                year: 2018,
                name: "Carnival",
                country: 'arg',
                date: new Date(1, 1, 2018)
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
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 30,
                month: 3,
                year: 2018,
                name: "Good friday",
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 2,
                month: 4,
                year: 2018,
                name: "Day of the Veterans",
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 30,
                month: 4,
                year: 2018,
                name: "Bridge Public Holiday",
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 1,
                month: 5,
                year: 2018,
                name: "Labor Day / May Day",
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 25,
                month: 5,
                year: 2018,
                name: "National Day/May 1810 Revolution",
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 20,
                month: 6,
                year: 2018,
                name: "Flag Day",
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 9,
                month: 7,
                year: 2018,
                name: "Independence Day",
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 20,
                month: 8,
                year: 2018,
                name: "San Martín Day",
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 15,
                month: 10,
                year: 2018,
                name: "Day of respect for cultural diversity",
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 19,
                month: 11,
                year: 2018,
                name: "National Sovereignty Day",
                country: 'arg',
                date: new Date(1, 1, 2018)
            },
            {
                day: 24,
                month: 12,
                year: 2018,
                name: "Bridge Public Holiday",
                country: 'arg',
                date: new Date(2018, 12, 24)
            },
            {
                day: 25,
                month: 12,
                year: 2018,
                name: "Christmas Day",
                country: 'arg',
                date: new Date(2018, 12, 25)
            },
            {
                day: 31,
                month: 12,
                year: 2018,
                name: "New Year's Eve",
                country: 'arg',
                date: new Date(2018, 12, 31)
            }

        ]
        response.send(holidays);
    })

});

exports.devs = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        var devs = [
            { name: 'Satie Nijjar', days: '', country: 'us' },
            { name: 'David Kelly', days: '', country: 'us' },
            { name: 'Sai Karthika Talla', days: '', country: 'us' },
            { name: 'Steven Nickerson', days: '', country: 'us' },
            { name: 'Salim Chemes', days: '', country: 'arg' },
            { name: 'Iván Falletti', days: '', country: 'arg' },
            { name: 'Gisela Vivas', days: '', country: 'arg' },
            { name: 'Renzo Guastavino', days: '', country: 'arg' }
        ]
        response.send(devs);
    })
});

exports.teamData = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        var teamData = [{ avg: 20 }];
        response.send(teamData);
    })
});