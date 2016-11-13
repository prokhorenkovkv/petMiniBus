package com.minibus.entities;

import com.minibus.entities.enums.WeekDay;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "subRoutes")
public class SubRoute {
    @Id
    private String id;
    @DBRef
    private User userId;
    @DBRef
    private List<Route> routes;
    @DBRef
    private Stop startStopId;
    @DBRef
    private Stop endStopId;
    private List<WeekDay> weekDays;
    private String startTime;
    @DBRef
    private List<User> subscribers;
    private String isAvailable;

    @PersistenceConstructor
    public SubRoute(String id, User userId, List<Route> routes,
                    Stop startStopId, Stop endStopId, List<WeekDay> weekDays,
                    String startTime, List<User> subscribers, String isAvailable) {
        this.id = id;
        this.userId = userId;
        this.routes = routes;
        this.startStopId = startStopId;
        this.endStopId = endStopId;
        this.weekDays = weekDays;
        this.startTime = startTime;
        this.subscribers = subscribers;
        this.isAvailable = isAvailable;
    }

    public String getId() {
        return id;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public List<Route> getRoutes() {
        return routes;
    }

    public void setRoutes(List<Route> routes) {
        this.routes = routes;
    }

    public Stop getStartStopId() {
        return startStopId;
    }

    public void setStartStopId(Stop startStopId) {
        this.startStopId = startStopId;
    }

    public Stop getEndStop() {
        return endStopId;
    }

    public void setEndStop(Stop endStopId) {
        this.endStopId = endStopId;
    }

    public List<WeekDay> getWeekDays() {
        return weekDays;
    }

    public void setWeekDays(List<WeekDay> weekDays) {
        this.weekDays = weekDays;
    }

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

    public String getIsAvailable() {
        return isAvailable;
    }

    public void setIsAvailable(String isAvailable) {
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
                .append("userId", userId)
                .append("startStop", endStopId)
                .append("endStop", endStopId)
                .append("startTime", startTime)
                .toString();
    }
}