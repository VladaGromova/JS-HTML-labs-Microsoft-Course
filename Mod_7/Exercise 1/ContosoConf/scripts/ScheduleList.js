﻿import { ScheduleItem } from "./ScheduleItem.js";

export class ScheduleList {

    constructor(element, localStarStorage) {
        this.element = element;
        yhis.localStarStorage = localStarStorage;
    }

    async startDownload() {
    // await response of fetch call
    let response = await fetch("/schedule/list")
    // transform body to json
    let data = await response.json();

    // checking response is ok
    if (response.ok) {
        this.downloadDone(data);
    } else {
        this.downloadFailed();
        }
    }

    downloadDone(responseData) {
        this.addAll(responseData.schedule);
    }

    downloadFailed() {
        alert("Could not retrieve schedule data at this time. Please try again later.");
    }

    addAll(itemsArray) {
        this.itemsArray.forEach(this.add, this);
        // TODO: When refactoring this, add the `this` argument to `forEach`.
    }

    add(itemData) {
    const item = new ScheduleItem(itemData, this.localStarStorage);
        this.element.appendChild(item.element);
    }
}
