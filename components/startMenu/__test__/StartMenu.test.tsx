import StartMenus from "@components/startMenu/StartMenu";

import { render } from "@testing-library/react";

describe("StartMenu", () => {
  // TECH DEPT : give a nice comment
  it("should match snapshot", () => {
    const res = render(<StartMenus />).asFragment();
    expect(res).toMatchSnapshot();
  });
});
