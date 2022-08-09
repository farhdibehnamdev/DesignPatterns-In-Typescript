type Listener = (value: string) => void;

type Unsubscribe = { unsubscribe: () => void };

class EventService {
  private listeners: Listener[] = [];

  protected static instance: EventService;

  private constructor() {}

  public static getInstance() {
    if (!EventService.instance) EventService.instance = new EventService();
    return EventService.instance;
  }

  public emit(value: string) {
    this.notifyListeners(value);
  }

  public subscribe(listener: Listener): Unsubscribe {
    this.listeners.push(listener);
    return {
      unsubscribe: () => {
        this.listeners = this.listeners.filter((other) => other !== listener);
      },
    };
  }

  private notifyListeners(value: string) {
    throw new Error("Method not implemented.");
  }
}
