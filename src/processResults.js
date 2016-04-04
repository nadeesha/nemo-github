const identity = param => param;

export default function (results) {
  return results.map(event => ({
      event_id: event.id,
      timestamp: new Date(event.created_at).getTime(),
      event_type: `${event.type}.${event.payload && event.payload.action || 'default'}`,
  }));
}