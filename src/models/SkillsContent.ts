interface SkillsContent {
    skillsHeading: string;
    skillsText: {
        _key: string;
        _type: string;
        children: [object];
        markDefs: [any];
    }[]
}

export default SkillsContent;