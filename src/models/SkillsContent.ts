interface SkillsContent {
    skillsHeading: string;
    skillsText: {
        _key: string;
        _type: string;
        children: [object];
        markDefs: [any];
    }[];
    skillsToolsHeading: string;
    skillsTools: {
        _key: string;
        _type: string;
        children: [object];
        markDefs: [any];
    }[];
}

export default SkillsContent;