import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;
        given('user has not picked an event', () => {
            AppWrapper = mount(<App />);
        });

        when('the user opens the app', () => {
            expect(AppWrapper.find('.event')).toBeDefined();
        });

        then('the user should see a list of upcoming events', async () => {
            const eventDetails = await AppWrapper.find('.event .more-event-info');
            expect(eventDetails.find('.hide')).toBeDefined();
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;
        given('user has seen the list of events', () => {
            AppWrapper = mount(<App />);
        });


        when('a user clicks on an event', () => {
            AppWrapper.update();
            let Event = AppWrapper.find('.event');
            Event.find('.show-details').at(0).simulate('click');
        });

        then('the user should see details of the event', () => {
            const EventDetails = AppWrapper.find('.event .more-event-info');
            expect(EventDetails.find('.show')).toBeDefined();
        });
    });


    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let AppWrapper;
        AppWrapper = mount(<App />);
        given('a user has clicked on an event and is viewing its details', async () => {
            const EventDetails =  AppWrapper.find('.event .more-event-info');
            expect(EventDetails.find('.show')).toBeDefined();
        });


        when('user clicks on button to close the event', () => {
            AppWrapper.update();
            let Event = AppWrapper.find('.event');
            Event.find('.show-details').at(0).simulate('click');
        });

        then('the events details will hide', () => {
            const EventDetails =  AppWrapper.find('.event .more-event-info');
            expect(EventDetails.find('.hidden')).toBeDefined();
        });


    });
});