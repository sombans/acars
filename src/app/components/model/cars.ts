export class Cars {
    id:string;
    mark:string;
    model: string;
    year:string;
    maxSpeed:string;
    isAutomatic:string;
    engine: string;
    numberOfDoors:string;
    constructor(id, mark, model, year, maxSpeed, isAutomatic, engine, numberOfDoors) {

        this.id = id;
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.isAutomatic = isAutomatic;
        this.engine = engine;
        this.numberOfDoors = numberOfDoors;
        return this;

    }

}

