import {Resizeable} from "./Resizeable";

export abstract class Shape implements Resizeable
{
    abstract resize(percent): number;
}