import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";


describe("NumberOfEvents component", () => {
    let NumberOfEventsWrapper;
  
    beforeAll(() => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => undefined} />);
    });

    test("render text input", () => {
        expect(NumberOfEventsWrapper.find(".NumberOfEvents")).toHaveLength(1);
      });

      test('changes the state of numberOfEvents correctly', () =>{
        const newValue = { target: { value: 16 }};
        NumberOfEventsWrapper.find('.NumberOfEventsValue').simulate('change', newValue);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(16);
    });

});