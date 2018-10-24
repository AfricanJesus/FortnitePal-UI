declare module ChallengeSetModule {

  export interface Challenge {
    objective: string;
    reward: string;
    rewardImage: string;
  }

  export interface Self {
    href: string;
  }

  export interface ChallengeSet {
    href: string;
  }

  export interface Links {
    self: Self;
    challengeSet: ChallengeSet;
  }

  export interface ChallengeSetObject {
    challengeSetName: string;
    challenges: Challenge[];
    challengeSetObjective: string;
    challengeSetReward: string;
    challengeSetRewardImage: string;
    _links: Links;
  }

}

