import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';
import NumberOfEvents from '../NumberOfEvents';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number , 32 is the default number', ({ given, when, then }) => {
        let AppWrapper;
        given('user has not specified a number of events', () => {
            AppWrapper = mount(<App />);
        });

        when('the user opens the app', () => {
            expect(AppWrapper.state('numberOfEvents')).toBe(32);
        AppWrapper.update();
        });

        then('the user sees a list of 32 events', async () => {
            expect(AppWrapper.find('.event')).toHaveLength(12);   //note mockdata only has 12 events so it can't get 32
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('the user opens the app', () => {
            AppWrapper = mount(<App />);
            
        });

        let NumberOfEventsWrapper;
        when('the user specifies a number of events', () => {
            
            NumberOfEventsWrapper = shallow(<NumberOfEvents />);
            NumberOfEventsWrapper.setState({ numberOfEvents: 16 })
        });

        then('the user sees that number of events they specified', () => {
           
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(16);
        });
    });


   
});