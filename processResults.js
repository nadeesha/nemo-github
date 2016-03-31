const scores = {
  IssuesEvent: () => 1,
  IssueCommentEvent: () => 1,
  PublicEvent: () => 3,
  PullRequestEvent: event => {
    const action = {
      closed: 3,
      opened: 5,
    };

    return action[event.payload.action || 0];
  },
  PullRequestReviewCommentEvent: () => 1,
  PushEvent: event => 3,
}

export default function (results) {
  return results.filter(event => {
    return scores[event.type];
  }).map(event => ({
      event_id: event.id,
      timestamp: new Date(event.created_at).getTime(),
      score: scores[event.type].call(null, event),
  }));
}