import { TrainingEvent } from './../models/training-event';

const DATA_DESCRIPTION_PLACEHOLDER_TEXT = 'Lorem ipsum dolor sit amet, \
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
    ullamco laboris nisi ut aliquip ex ea commodo consequat.\
';

/**
* Generate ISO 8601 seed date time for future events from current datetime.
* -- TODO Mock provider/service.
* @returns {string}
*/
function generateFutureDate(): string {
    const currentDateTimeEpoch: number = Date.now();
    console.log('​currentDateTimeEpoch', currentDateTimeEpoch);

    return 'hi';
}

// Seed data
export const DATA_SEED_TRAINING_EVENTS: TrainingEvent[] = [
{
    id                 : 1,
    title              : 'Event Title A',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4697707, 153.025123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 2,
    title              : 'Event Title B',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4797707, 153.025123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 3,
    title              : 'Event Title C',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4897707, 153.025123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 4,
    title              : 'Event Title D',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4697707, 153.025123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 5,
    title              : 'Event Title E',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4597707, 153.025123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 6,
    title              : 'Event Title F',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4497707, 153.025123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 7,
    title              : 'Event Title G',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4697707, 153.015123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 8,
    title              : 'Event Title H',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4697707, 153.035123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 9,
    title              : 'Event Title I',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4797707, 153.035123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 10,
    title              : 'Event Title J',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4497707, 153.045123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 11,
    title              : 'Event Title Sydney',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Sydney',
    locationCoordinates: [-33.8688, 151.2093],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 12,
    title              : 'Event Title Sydney 2',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Sydney',
    locationCoordinates: [-33.8688, 151.2043],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 13,
    title              : 'Event Title Melbourne',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Sydney',
    locationCoordinates: [-33.8688, 151.2043],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 14,
    title              : 'Event Title Melbourne 2',
    dateTime           : generateFutureDate(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Sydney',
    locationCoordinates: [-33.8688, 151.2043],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
}
];
