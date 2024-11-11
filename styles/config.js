/* ------------------------------------------------------------------- */
/* Sheet ID
/* Your sheet ID
/* ------------------------------------------------------------------- */
let sheetID = "1OGcJ11D3bPlMAgOLi7MEq5FAajI5WGKgRqcG8TkAlEA";


/* ------------------------------------------------------------------- */
/* All sheet pages
/* ------------------------------------------------------------------- */
let sheetPages = {

    masterlist: "masterlist",
    masterlistLog: "masterlist log",

}


/* ------------------------------------------------------------------- */
/* All Site Options
/* ------------------------------------------------------------------- */
let options = {


    /* Index
    /* --------------------------------------------------------------- */
    index: {

       

        staffSheetPage: sheetPages.staff,
        numOfStaff: 8,

        masterlistSheetPage: sheetPages.masterlist,
        numOfDesigns: 4,
    
    },


    /* Masterlist
    /* --------------------------------------------------------------- */
    masterlist: {

        sheetPage: sheetPages.masterlist,
        logSheetPage: sheetPages.masterlistLog,

        itemAmount: 12,
        itemOrder: "asc",

        filterColumn: 'Design Type',
        searchFilterParams: ['ID', 'Owner', 'Designer', 'Artist'],
        fauxFolderColumn: 'Species',

    },


}
