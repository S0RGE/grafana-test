// https://drawsql.app/teams/sbersp/diagrams/deviation

const COMMAND_CLUSTER = {
  cluster_1: {
    name: "cluster-1",
    id: "cluster-1",
    commands: {
      command_1: {
        id: "command_1",
        name: "command-1",
      },
      command_2: {
        id: "command_2",
        name: "command-2",
      },
    },
  },
  cluster_2: {
    name: "cluster-2",
    id: "cluster-2",
    commands: {
      command_3: {
        id: "command_3",
        name: "command-3",
      },
      command_4: {
        id: "command_4",
        name: "command-4",
      },
    },
  },
};

const firstTable = [
  {
    command_1: {
      name: "command_1",
      deviationsCount: 60,
      deviations: [
        {
          id: "deviation_1",
          name: "deviation-1",
          count: 10,
        },
        {
          id: "deviation_2",
          name: "deviation-2",
          count: 20,
        },
        {
          id: "deviation_3",
          name: "deviation-3",
          count: 30,
        },
      ],
    },
    command_2: {
      name: "command_2",
      deviationsCount: 150,
      deviations: [
        {
          id: "deviation_4",
          name: "deviation-4",
          count: 40,
        },
        {
          id: "deviation_5",
          name: "deviation-5",
          count: 50,
        },
        {
          id: "deviation_6",
          name: "deviation-6",
          count: 60,
        },
      ],
    },
  },
];
