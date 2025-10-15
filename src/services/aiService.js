export const generateResponse = (task) => {
  const fakeResponses = {
    "analyze leads": "Analyzed 25 leads — 12 qualified, 3 follow-ups required.",
    "summarize calls": "3 calls summarized, 2 follow-ups pending.",
    "update client report": "Client report updated with latest data and feedback.",
  };

  return fakeResponses[task.toLowerCase()] || `Processed task: ${task}`;
};
