export type HistoryEvent = {
    year: string;
    text: string;
    html: string;
    links: {
        title: string;
        link: string;
    }[]
}

export type HistoryResponse = {
    date: string;
    url: string;
    data: {
        Events: HistoryEvent[];
        Births: HistoryEvent[];
        Death: HistoryEvent[];

    }
}

export const historyUrl = "https://history.muffinlabs.com"