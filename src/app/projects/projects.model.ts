export class Project {
  name?: string;
  color?: string;
  code?: string;
  status?: string;
  type?: string;
  startDate?: string;
  endDate?: string;
  totalWorkload?: number;
  team?: Team;
  company?: string;
}

export class TeamMember {
  name: string;
  role: string;
  workload: number;
  constructor(name: string, role: string, workload: number) {
    this.name = name;
    this.role = role;
    this.workload = workload;
  }
}

export type Team = Array<TeamMember>;
