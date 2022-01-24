import MissionGridView from "../MissionGridView";
import {missionDataFixture} from "../../app/missionData";
import {render, screen} from "@testing-library/react";

describe('MissionGridView tests', () => {
  it('Renders correctly', () => {
    render(<MissionGridView missionData={missionDataFixture}/>)
    const missionGridView = screen.getByTestId('missionsGrid');
    expect(missionGridView).toBeTruthy();
  })
})
