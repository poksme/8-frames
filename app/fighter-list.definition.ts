interface FighterList {
    feed: {
        entry: {
            id: {
                $t: string // split '/' and select last for id
                // then "https://spreadsheets.google.com/feeds/list/[document ID]/[sheet ID]/public/basic?alt=json"
            },
            title: {
                $t: string
            }
        }[]
    }
}

export = FighterList;