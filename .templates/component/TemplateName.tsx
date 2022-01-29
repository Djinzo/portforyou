import React from "react";
import TemplateNameStyle from "./TemplateName.style";

interface TemplateNameProps {}

const TemplateName: React.FC<TemplateNameProps> = ({}): JSX.Element => (
  <TemplateNameStyle.Container>
    <h1>TemplateName Component</h1>
  </TemplateNameStyle.Container>
);

export default TemplateName;
