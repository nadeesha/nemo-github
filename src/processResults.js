const identity = param => param;

export default function (results) {
  return results.map(event => ({
      identifier: event.id,
      timestamp: new Date(event.created_at).getTime(),
      type: `${event.type}.${event.payload && event.payload.action || 'default'}`,
  }));
}