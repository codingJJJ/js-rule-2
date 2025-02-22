import Rule from "./Rule";

export interface ActionConstructor {
    new(rule: Rule): Action;
}

export default class Action { }