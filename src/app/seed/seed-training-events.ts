import { TrainingEvent } from './../models/training-event';

const DATA_DESCRIPTION_PLACEHOLDER_TEXT = 'Lorem ipsum dolor sit amet, \
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
    ullamco laboris nisi ut aliquip ex ea commodo consequat.\
';


// lol. Magic numbers. -- TODO: Encapsulate logic. YAGNI.
const millisecondsPerSecond = 1000;
const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerYear = 365;

/**
 * Get random integer from a given max range.
 * 0..max
 * @param {*} maxEpochSeconds Max top range.
 * @returns {number}
 */
function getRandomInt(maxEpochSeconds): number {
    const pseudorandomFraction = Math.random() * maxEpochSeconds;

    // Rounds to int. floor/ceil.
    const pseudorandomInt = Math.floor(pseudorandomFraction);

    return pseudorandomInt;
}

function getRandomFutureEpoch(givenCurrentDateTimeEpoch: number) {

}

/**
 * Generate ISO 8601 seed date time for future events from current datetime.
 * -- Can decompose some parts. Epoch separate from ISOString test.
 * -- TODO: move to random generation to Mock provider/service. Static utility?
 * @returns {string} Future DateTime in ISO 8601 format.
 */
function generateFutureDateIso8601(): string {

    // Get current DateTime. Date uses epoch in milliseconds.
    const currentDateTimeEpoch: number = Date.now();
    // Set range for randomiser ( testing a range of days within a year. )
    const millisecondsPerYear = millisecondsPerSecond *
        secondsPerMinute *
        minutesPerHour *
        hoursPerDay *
        daysPerYear
    ;
    const maxSecondsLimitRange = millisecondsPerYear;

    // Get randomised epoch ms to add to current DateTime to get future DateTime
    const randomFutureEpochAdd: number = getRandomInt(maxSecondsLimitRange);
    const futureEpoch: number = currentDateTimeEpoch + randomFutureEpochAdd;
    const futureDate: Date = new Date(futureEpoch);

    const futureDateIso8601: string = futureDate.toISOString();

    return futureDateIso8601;
}

// Seed data
export const DATA_SEED_TRAINING_EVENTS: TrainingEvent[] = [
{
    id                 : 1,
    title              : 'Event Title A',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4697707, 153.025123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 2,
    title              : 'Event Title B',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.597707, 154.025123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 3,
    title              : 'Event Title C',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4897707, 153.025123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 4,
    title              : 'Event Title D',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4697707, 153.025123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 5,
    title              : 'Event Title E',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4597707, 153.025123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 6,
    title              : 'Event Title F',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4497707, 153.025123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 7,
    title              : 'Event Title G',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4697707, 153.015123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 8,
    title              : 'Event Title H',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4697707, 153.035123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 9,
    title              : 'Event Title I',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4797707, 153.035123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 10,
    title              : 'Event Title J',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Brisbane',
    locationCoordinates: [-27.4497707, 153.045123],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 11,
    title              : 'Event Title Sydney',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Sydney',
    locationCoordinates: [-33.8688, 151.2093],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 12,
    title              : 'Event Title Sydney 2',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Sydney',
    locationCoordinates: [-33.8688, 151.2043],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 13,
    title              : 'Event Title Melbourne',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Sydney',
    locationCoordinates: [-33.8688, 151.2043],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
},
{
    id                 : 14,
    title              : 'Event Title Melbourne 2',
    dateTime           : generateFutureDateIso8601(),
    imageUrl           : 'http://via.placeholder.com/100x100',
    availableSeats     : 128,
    locationCityName   : 'Sydney',
    locationCoordinates: [-33.8688, 151.2043],
    description        : DATA_DESCRIPTION_PLACEHOLDER_TEXT
}
];
