

// latitude, longitude coordinates. Make sure GeoJSON correct when Google vs GIS
export type LocationCoordinates = [number, number];

export interface TrainingEvent {
    readonly id: number;

    readonly title: string;

    /**
     * DateTime in _*ISO 8601*_ format
     * e.g. Date toISOString  /// locale
     * @type {Date}
     * @memberof TrainingEvent
     */
    readonly dateTime: string;

    /**
     * Url to an image representing the training event.
     *
     * @example "via.placeholder.com/100x100"
     * @type {string}
     * @memberof TrainingEvent
     */
    readonly imageUrl: string;

    /**
     * Places available for the training event
     * ?? Disambiguation the available seats remaining vs capacity
     * @type {number}
     * @memberof TrainingEvent
     */
    readonly availableSeats: number;

    /**
     * The city where the training event is being held.
     *
     * @example 'Brisbane'
     * @type {string}
     * @memberof TrainingEvent
     */
    readonly locationCityName: string;

    /**
     * Latitude, Longitude coordinates.
     *
     * @example [-27.1, 153.3]
     * @type {LocationCoordinates}
     * @memberof TrainingEvent
     */
    readonly locationCoordinates: LocationCoordinates;

    /**
     * Description of the training event
     *
     * @type {string}
     * @memberof TrainingEvent
     */
    readonly description: string;
}
