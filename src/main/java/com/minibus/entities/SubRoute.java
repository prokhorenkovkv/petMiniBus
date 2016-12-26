package com.minibus.entities;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Document(collection = "subRoutes")
public class SubRoute {
    @Id
    private String id;
    @DBRef
    private List<Route> routes;
    @DBRef
    private Map<String, Stop> startEnd;
    /*private List<WeekDay> weekDays;*/
    private String startTime;
    @DBRef
    private List<User> subscribers;
    private Boolean isAvailable;

    public SubRoute() {

    }

    @PersistenceConstructor
    public SubRoute(String id, List<Route> routes, Map<String, Stop> startEnd, /*List<WeekDay> weekDays,*/
                    String startTime,  List<User> subscribers, Boolean isAvailable) {
        this.id = id;
        this.routes = routes;
        this.startEnd = startEnd;
        /*this.weekDays = weekDays;*/
        this.startTime = startTime;
        this.subscribers = subscribers;
        this.isAvailable = isAvailable;
    }

    public String getId() {
        return id;
    }

    public List<Route> getRoutes() {
        return routes;
    }

    public void setRoutes(List<Route> routes) {
        this.routes = routes;
    }

    public Map<String, Stop> getStartEnd() {
        return startEnd;
    }

    public void setStartEnd(Map<String, Stop> startEnd) {
        this.startEnd = startEnd;
    }

    /*public List<WeekDay> getWeekDays() {
        return weekDays;
    }

    public void setWeekDays(List<WeekDay> weekDays) {
        this.weekDays = weekDays;
    }*/

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public List<User> getSubscribers() {
        return subscribers;
    }

    public void setSubscribers(List<User> subscribers) {
        this.subscribers = subscribers;
    }

    public Boolean getIsAvailable() {
        return isAvailable;
    }

    public void setIsAvailable(Boolean isAvailable) {
        this.isAvailable = isAvailable;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SubRoute subRoute = (SubRoute) o;
        return new EqualsBuilder()
                .append(id, subRoute.id)
                .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
                .append(id)
                .toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("id", id)
                .append("startStop", startEnd.get("startStop"))
                .append("endStop", startEnd.get("endStop"))
                .append("startTime", startTime)
                .toString();
    }
}