import {Schema , model, Types} from "mongoose"
export class IGeoPoint {
    _id?:Types.ObjectId;
    latitude_deg?: number ;
    longitute_deg?: number;
    altitude_deg?: number;
}

const GeoPointSchema: Schema =new Schema({
    latitude_deg: {
        type: Number
    },
    longitute_deg: {
        type: Number
    },
    altitude_deg: {
        type: Number
    },
}, {timestamps: true});

export const GeoPointModel = model<IGeoPoint>('geopoint',GeoPointSchema)
