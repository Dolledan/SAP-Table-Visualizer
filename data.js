const DATA = {
    "BUT000": {
        "f": [
            "CLIENT",
            "PARTNER",
            "TYPE",
            "BPKIND",
            "BU_GROUP",
            "BPEXT",
            "BU_SORT1",
            "BU_SORT2",
            "SOURCE",
            "TITLE",
            "XDELE",
            "XBLCK",
            "AUGRP",
            "TITLE_LET",
            "BU_LOGSYS",
            "CONTACT",
            "NOT_RELEASED",
            "NOT_LG_COMPETENT",
            "PRINT_MODE",
            "BP_EEW_DUMMY",
            "NAPR",
            "BBP_IPISP",
            "RATE",
            "NAME_ORG1",
            "NAME_ORG2",
            "NAME_ORG3",
            "NAME_ORG4",
            "LEGAL_ENTY",
            "IND_SECTOR",
            "LEGAL_ORG",
            "FOUND_DAT",
            "LIQUID_DAT",
            "LOCATION_1",
            "LOCATION_2",
            "LOCATION_3",
            "NAME_LAST",
            "NAME_FIRST",
            "NAME_LST2",
            "NAME_LAST2",
            "NAMEMIDDLE",
            "TITLE_ACA1",
            "TITLE_ACA2",
            "TITLE_ROYL",
            "PREFIX1",
            "PREFIX2",
            "NAME1_TEXT",
            "NICKNAME",
            "INITIALS",
            "NAMEFORMAT",
            "NAMCOUNTRY",
            "LANGU_CORR",
            "XSEXM",
            "XSEXF",
            "BIRTHPL",
            "MARST",
            "EMPLO",
            "JOBGR",
            "NATIO",
            "CNTAX",
            "CNDSC",
            "PERSNUMBER",
            "XSEXU",
            "XUBNAME",
            "BU_LANGU",
            "BIRTHDT",
            "DEATHDT",
            "PERNO",
            "CHILDREN",
            "MEM_HOUSE",
            "PARTGRPTYP",
            "NAME_GRP1",
            "NAME_GRP2",
            "MC_NAME1",
            "MC_NAME2",
            "CRUSR",
            "CRDAT",
            "CRTIM",
            "CHUSR",
            "CHDAT",
            "CHTIM",
            "PARTNER_GUID",
            "ADDRCOMM",
            "TD_SWITCH",
            "IS_ORG_CENTRE",
            "DB_KEY",
            "VALID_FROM",
            "VALID_TO",
            "XPCPT",
            "NATPERS",
            "PAR_REL",
            "BP_SORT",
            "KBANKS",
            "KBANKL"
        ],
        "fk": [
            "TB032",
            "TSAD5",
            "TSAD3",
            "TB028",
            "TB027",
            "T000",
            "TSAD4",
            "TSAD2",
            "T005",
            "T005N",
            "TB001",
            "T002",
            "TB025",
            "TB004",
            "TBDLS",
            "TB023",
            "USR02",
            "ZTB001",
            "DPR_RATES",
            "TB005",
            "TB019",
            "TB037"
        ]
    },
    "TB025": {
        "f": [
            "CLIENT",
            "PARTGRPTYP"
        ],
        "fk": [
            "T000"
        ]
    },
    "T000": {
        "f": [
            "MANDT",
            "MTEXT",
            "ORT01",
            "MWAER",
            "ADRNR",
            "CCCATEGORY",
            "CCCORACTIV",
            "CCNOCLIIND",
            "CCCOPYLOCK",
            "CCNOCASCAD",
            "CCSOFTLOCK",
            "CCORIGCONT",
            "CCIMAILDIS",
            "CCTEMPLOCK",
            "CHANGEUSER",
            "CHANGEDATE",
            "LOGSYS"
        ],
        "fk": [
            "TCURC",
            "TBDLS"
        ]
    },
    "TCURC": {
        "f": [
            "MANDT",
            "WAERS",
            "ISOCD",
            "ALTWR",
            "GDATU",
            "XPRIMARY"
        ],
        "fk": []
    },
    "TBDLS": {
        "f": [
            "LOGSYS",
            "ISPRFCDES",
            "ISPRFCTYPE",
            "ISPREL",
            "ISPRFCDESF"
        ],
        "fk": [
            "RFCDES",
            "TJJC1"
        ]
    },
    "TJJC1": {
        "f": [
            "ISPRFCTYPE",
            "ISPREL"
        ],
        "fk": []
    },
    "TSAD5": {
        "f": [
            "CLIENT",
            "TITLE_KEY",
            "TITLE_TEXT"
        ],
        "fk": [
            "T000"
        ]
    },
    "TB005": {
        "f": [
            "CLIENT",
            "SOURCE"
        ],
        "fk": [
            "T000"
        ]
    },
    "TB027": {
        "f": [
            "CLIENT",
            "MARST"
        ],
        "fk": [
            "T000"
        ]
    },
    "TB032": {
        "f": [
            "CLIENT",
            "LEGAL_ORG",
            "ORG_PRIV",
            "CONSOLIDTN"
        ],
        "fk": [
            "T000"
        ]
    },
    "TB001": {
        "f": [
            "MANDT",
            "BU_GROUP",
            "NRRNG",
            "XINST",
            "XEXST",
            "XSUPPRESS",
            "KTOKD"
        ],
        "fk": [
            "NRIV",
            "T000",
            "T077D"
        ]
    },
    "NRIV": {
        "f": [
            "CLIENT",
            "OBJECT",
            "SUBOBJECT",
            "NRRANGENR",
            "TOYEAR",
            "FROMNUMBER",
            "TONUMBER",
            "NRLEVEL",
            "EXTERNIND"
        ],
        "fk": [
            "TNRO",
            "T000"
        ]
    },
    "TNRO": {
        "f": [
            "OBJECT",
            "DTELSOBJ",
            "NRTAB",
            "NRINTFLD",
            "NREXTFLD",
            "NRFLD",
            "NRSOBJFLD",
            "NRELEFLD",
            "YEARIND",
            "DOMLEN",
            "PERCENTAGE",
            "CODE",
            "TEXTIND",
            "NRELTXTTAB",
            "NRELTXTSOB",
            "NRELTXTELE",
            "NRELTXTTXT",
            "NRELTXTLNG",
            "BUFFER",
            "NOIVBUFFER",
            "NONRSWAP",
            "RFCDEST",
            "NRCHECKASCII"
        ],
        "fk": []
    },
    "T077D": {
        "f": [
            "MANDT",
            "KTOKD",
            "FAUSA",
            "FAUSF",
            "FAUSV",
            "NUMKR",
            "XCPDS",
            "KALSM",
            "DEAR1",
            "DEAR2",
            "DEAR3",
            "DEAR4",
            "DEAR5",
            "FAUS1",
            "FAUSW",
            "FAUSG",
            "DEAR6",
            "FAUS2",
            "FAUSU"
        ],
        "fk": [
            "T683",
            "T000"
        ]
    },
    "T683": {
        "f": [
            "MANDT",
            "KVEWE",
            "KAPPL",
            "KALSM",
            "AUSVF",
            "BONSM",
            "KNPRS_V",
            "PRODUCTIVE"
        ],
        "fk": [
            "T681V",
            "T681A",
            "T000"
        ]
    },
    "T681A": {
        "f": [
            "KAPPL"
        ],
        "fk": []
    },
    "T681V": {
        "f": [
            "KVEWE",
            "DIKOM",
            "MUSTR",
            "MUPRG",
            "KMPOL",
            "DNPVN",
            "DNPBS",
            "ZUPRG",
            "ZUKON"
        ],
        "fk": []
    },
    "T005N": {
        "f": [
            "MANDT",
            "LAND1",
            "NAMEFORMAT"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "T005": {
        "f": [
            "MANDT",
            "LAND1",
            "LANDK",
            "LNPLZ",
            "PRPLZ",
            "ADDRS",
            "XPLZS",
            "XPLPF",
            "SPRAS",
            "XLAND",
            "XADDR",
            "NMFMT",
            "XREGS",
            "XPLST",
            "INTCA",
            "INTCA3",
            "INTCN3",
            "XEGLD",
            "XSKFN",
            "XMWSN",
            "LNBKN",
            "PRBKN",
            "LNBLZ",
            "PRBLZ",
            "LNPSK",
            "PRPSK",
            "XPRBK",
            "BNKEY",
            "LNBKS",
            "PRBKS",
            "XPRSO",
            "PRUIN",
            "UINLN",
            "LNST1",
            "PRST1",
            "LNST2",
            "PRST2",
            "LNST3",
            "PRST3",
            "LNST4",
            "PRST4",
            "LNST5",
            "PRST5",
            "LANDD",
            "KALSM",
            "LANDA",
            "WECHF",
            "LKVRZ",
            "INTCN",
            "XDEZP",
            "DATFM",
            "CURIN",
            "CURHA",
            "WAERS",
            "KURST",
            "AFAPL",
            "GWGWRT",
            "UMRWRT",
            "KZRBWB",
            "XANZUM",
            "CTNCONCEPT",
            "KZSRV",
            "XXINVE",
            "SUREG",
            "LANDGRP_VP"
        ],
        "fk": [
            "TCURC",
            "T005A",
            "TJG94",
            "T005N",
            "T683",
            "TCURV",
            "TBKS",
            "T002",
            "WITH_CTNCOKEY",
            "T5D4E",
            "T000",
            "T096"
        ]
    },
    "T005A": {
        "f": [
            "MANDT",
            "ADDRS"
        ],
        "fk": [
            "T000"
        ]
    },
    "TJG94": {
        "f": [
            "MANDT",
            "LANDGRP_VP"
        ],
        "fk": [
            "T000"
        ]
    },
    "WITH_CTNCOKEY": {
        "f": [
            "CTNCONCEPT"
        ],
        "fk": []
    },
    "T096": {
        "f": [
            "MANDT",
            "AFAPL",
            "BPLAKT",
            "AFAPLO"
        ],
        "fk": [
            "T096",
            "T000"
        ]
    },
    "TCURV": {
        "f": [
            "MANDT",
            "KURST",
            "XINVR",
            "BWAER",
            "XBWRL",
            "GKUZU",
            "BKUZU",
            "XFIXD",
            "XEURO"
        ],
        "fk": [
            "TCURV",
            "TCURC",
            "T000"
        ]
    },
    "T002": {
        "f": [
            "SPRAS",
            "LASPEZ",
            "LAHQ",
            "LAISO"
        ],
        "fk": []
    },
    "T5D4E": {
        "f": [
            "DUNAT",
            "ENDDA",
            "BEGDA",
            "DUTXT"
        ],
        "fk": []
    },
    "TBKS": {
        "f": [
            "MANDT",
            "SUREG"
        ],
        "fk": [
            "T000"
        ]
    },
    "TB028": {
        "f": [
            "CLIENT",
            "JOBGR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TB004": {
        "f": [
            "CLIENT",
            "BPKIND",
            "FELDSTLST1",
            "FELDSTLST2",
            "FELDSTLST3",
            "FELDSTLST4",
            "FELDSTLST5",
            "FELDSTLST6",
            "FELDSTLST7"
        ],
        "fk": [
            "T000"
        ]
    },
    "TB037": {
        "f": [
            "CLIENT",
            "AUOBJ",
            "AUGRP"
        ],
        "fk": [
            "TB036",
            "T000"
        ]
    },
    "TB036": {
        "f": [
            "CLIENT",
            "AUOBJ"
        ],
        "fk": [
            "T000"
        ]
    },
    "TB023": {
        "f": [
            "CLIENT",
            "IND_SECTOR"
        ],
        "fk": [
            "T000"
        ]
    },
    "DPR_RATES": {
        "f": [
            "CLIENT",
            "RATE"
        ],
        "fk": [
            "T000"
        ]
    },
    "TSAD2": {
        "f": [
            "CLIENT",
            "TITLE_KEY",
            "TITLE_TEXT"
        ],
        "fk": [
            "T000"
        ]
    },
    "TSAD3": {
        "f": [
            "CLIENT",
            "TITLE",
            "GENERATE",
            "PERSON",
            "ORGANIZATN",
            "XGROUP",
            "SEX"
        ],
        "fk": [
            "T000"
        ]
    },
    "TB019": {
        "f": [
            "CLIENT",
            "LEGAL_ENTY",
            "DESCRIPTION"
        ],
        "fk": [
            "T000"
        ]
    },
    "USR02": {
        "f": [
            "MANDT",
            "BNAME",
            "BCODE",
            "GLTGV",
            "GLTGB",
            "USTYP",
            "CLASS",
            "LOCNT",
            "UFLAG",
            "ACCNT",
            "ANAME",
            "ERDAT",
            "TRDAT",
            "LTIME",
            "OCOD1",
            "BCDA1",
            "CODV1",
            "OCOD2",
            "BCDA2",
            "CODV2",
            "OCOD3",
            "BCDA3",
            "CODV3",
            "OCOD4",
            "BCDA4",
            "CODV4",
            "OCOD5",
            "BCDA5",
            "CODV5",
            "VERSN",
            "CODVN",
            "TZONE",
            "ZBVMASTER",
            "PASSCODE",
            "PWDCHGDATE",
            "PWDSTATE",
            "RESERVED",
            "PWDHISTORY",
            "PWDLGNDATE",
            "PWDSETDATE",
            "PWDINITIAL",
            "PWDLOCKDATE",
            "PWDSALTEDHASH",
            "SECURITY_POLICY"
        ],
        "fk": [
            "USGRP",
            "SEC_POLICY_CUST",
            "TTZZ"
        ]
    },
    "USGRP": {
        "f": [
            "MANDT",
            "USERGROUP"
        ],
        "fk": []
    },
    "SEC_POLICY_CUST": {
        "f": [
            "CLIENT",
            "NAME",
            "CREATED_BY",
            "CREATED_ON",
            "CHANGED_BY",
            "CHANGED_ON"
        ],
        "fk": []
    },
    "TTZZ": {
        "f": [
            "CLIENT",
            "TZONE",
            "ZONERULE",
            "DSTRULE",
            "FLAGACTIVE"
        ],
        "fk": [
            "TTZD",
            "TTZR",
            "T000"
        ]
    },
    "TTZD": {
        "f": [
            "CLIENT",
            "DSTRULE",
            "DSTDIFF",
            "FLAGACTIVE"
        ],
        "fk": [
            "T000"
        ]
    },
    "TTZR": {
        "f": [
            "CLIENT",
            "ZONERULE",
            "UTCDIFF",
            "UTCSIGN",
            "FLAGACTIVE"
        ],
        "fk": [
            "T000"
        ]
    },
    "TSAD4": {
        "f": [
            "CLIENT",
            "PREFIX_KEY",
            "PREFIX_TXT"
        ],
        "fk": [
            "T000"
        ]
    },
    "ZTB001": {
        "f": [],
        "fk": []
    },
    "FKKVKP": {
        "f": [
            "MANDT",
            "VKONT",
            "GPART",
            "VKBEZ",
            "ERDAT",
            "ERNAM",
            "AEDATP",
            "AENAMP",
            "FDZTG",
            "STOPD",
            "QSZDT",
            "GUID",
            "DDLAM",
            "DDLCU",
            "DDLNM",
            "INV_CYCLE_START",
            "INV_CHGDISC_X",
            "BPL_XPOCL",
            "BPL_FDATE",
            "BPL_TDATE",
            "EXVKO",
            "OPBUK",
            "STDBK",
            "ABWRE",
            "ABWRA",
            "ABWMA",
            "EBVTY",
            "ABVTY",
            "EZAWE",
            "EZASP",
            "AZAWE",
            "AZASP",
            "EIGBV",
            "VWNZA",
            "LOEVM",
            "ABWVK",
            "IKEY",
            "MAHNV",
            "MANSP",
            "MGRUP",
            "FDGRP",
            "VKPBZ",
            "ADRNB",
            "VKONV",
            "GPARV",
            "ADRRE",
            "ADRRA",
            "ADRMA",
            "ABWRH",
            "ADRRH",
            "ADRJDC",
            "BEGRU",
            "TOGRU",
            "STOPG",
            "TXJCD",
            "COPRC",
            "VBUND",
            "CCARD_ID",
            "CCARD_OUT",
            "UEBTR",
            "DEF_REC",
            "DEF_REC_IND",
            "QSSKZ_A",
            "QSSKZ_E",
            "QSZNR",
            "CORR_MAHNV",
            "FITYP",
            "PROVINCE",
            "COUNTY",
            "VERTYP",
            "AUGRS_DEF",
            "LANDL",
            "BUPLA",
            "BPTAXTYPE1",
            "BPTAXTYPE2",
            "PERSR",
            "INV_CATEGORY",
            "DDLXG",
            "CMGRP",
            "STRAT",
            "CPERS",
            "BPCL_SUCC",
            "INV_SCHEDULE",
            "INV_CYCLE",
            "INV_CYCLE_RULE",
            "INV_CYCLE_DAY",
            "INV_CYCLE_MONTH",
            "MNDID"
        ],
        "fk": [
            "J_1BBRANCH",
            "TFK2607",
            "TFK001S",
            "TFK2604",
            "T035",
            "TFK2606",
            "T000",
            "BUT000",
            "FKKVK",
            "T005",
            "TFK002F",
            "TFK070L",
            "J_1AFITPV",
            "TFK047F",
            "TFK043",
            "T005E",
            "TFK070B",
            "TCURC",
            "TFK001G",
            "TFK111",
            "TFK056A",
            "TFK008",
            "T005S",
            "TFK047A",
            "TFK047S"
        ]
    },
    "FKKVK": {
        "f": [
            "MANDT",
            "VKONT",
            "ERDAT",
            "ERNAM",
            "LOEVM",
            "AEDAT",
            "AENAM",
            "APPLK",
            "VKTYP",
            "VKONA",
            "VKBEZ"
        ],
        "fk": [
            "T000",
            "TFK002A"
        ]
    },
    "TFK002A": {
        "f": [
            "MANDT",
            "APPLK",
            "VKTYP",
            "XGEIN",
            "SAMRG",
            "CPD",
            "NRINT",
            "NREXT",
            "NOONL",
            "XVEIN",
            "XKART",
            "VKTAU",
            "FELDSTLST1",
            "FELDSTLST2",
            "FELDSTLST3",
            "FELDSTLST4",
            "FELDSTLST5",
            "FELDSTLST6",
            "FELDSTLST7",
            "XDEPOT",
            "XDEPOTIOB",
            "CRTVAR",
            "KKSALD"
        ],
        "fk": [
            "FKK_NRIV_EXT",
            "FKK_NRIV_INT",
            "TIMA_CRT_ACC"
        ]
    },
    "FKK_NRIV_EXT": {
        "f": [
            "CLIENT",
            "NRRANGENR"
        ],
        "fk": [
            "T000"
        ]
    },
    "FKK_NRIV_INT": {
        "f": [
            "CLIENT",
            "NRRANGENR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TIMA_CRT_ACC": {
        "f": [
            "CLIENT",
            "CRTVAR",
            "VKTYP",
            "RULENR",
            "XPAR_IO_ACT"
        ],
        "fk": [
            "TIMA_CRT_RULE",
            "TFK002A"
        ]
    },
    "TIMA_CRT_RULE": {
        "f": [
            "CLIENT",
            "RULENR"
        ],
        "fk": []
    },
    "TFK111": {
        "f": [
            "MANDT",
            "VERTYP"
        ],
        "fk": []
    },
    "T035": {
        "f": [
            "MANDT",
            "GRUPP",
            "DATYP",
            "EBENE",
            "BILD1"
        ],
        "fk": [
            "T000",
            "T036"
        ]
    },
    "T036": {
        "f": [
            "MANDT",
            "EBENE",
            "SEGMT",
            "VWLKZ",
            "VRZKZ",
            "ARCHK",
            "ORIGN"
        ],
        "fk": [
            "T039",
            "T000"
        ]
    },
    "T005E": {
        "f": [
            "MANDT",
            "LAND1",
            "REGIO",
            "COUNC"
        ],
        "fk": [
            "T005S",
            "T005",
            "T000"
        ]
    },
    "T005S": {
        "f": [
            "MANDT",
            "LAND1",
            "BLAND",
            "FPRCD",
            "HERBL"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "TFK2604": {
        "f": [
            "MANDT",
            "INV_CATEGORY"
        ],
        "fk": []
    },
    "TFK070L": {
        "f": [
            "MANDT",
            "CORR_ACKEY",
            "CORR_ACTFB"
        ],
        "fk": [
            "TFDIR"
        ]
    },
    "TFDIR": {
        "f": [
            "FUNCNAME",
            "PNAME",
            "INCLUDE",
            "FREEDATE",
            "APPL",
            "MAND",
            "FMODE",
            "HOST",
            "UTASK",
            "PNAME_MAIN"
        ],
        "fk": []
    },
    "TFK047S": {
        "f": [
            "MANDT",
            "MANSP",
            "XMAHN",
            "BEGRU",
            "TDATE_PERIOD",
            "TDATE_VALUE"
        ],
        "fk": [
            "T000"
        ]
    },
    "TFK002F": {
        "f": [
            "MANDT",
            "VKPBZ",
            "XKTIN"
        ],
        "fk": []
    },
    "TFK008": {
        "f": [
            "MANDT",
            "ZAHLS",
            "XCLAR",
            "BEGRU",
            "TDATE_PERIOD",
            "TDATE_VALUE",
            "PPVAL"
        ],
        "fk": [
            "T000"
        ]
    },
    "TFK001G": {
        "f": [
            "MANDT",
            "OPBUK",
            "PYBUK"
        ],
        "fk": [
            "T001"
        ]
    },
    "T001": {
        "f": [
            "MANDT",
            "BUKRS",
            "BUTXT",
            "ORT01",
            "LAND1",
            "WAERS",
            "SPRAS",
            "KTOPL",
            "WAABW",
            "PERIV",
            "KOKFI",
            "RCOMP",
            "ADRNR",
            "STCEG",
            "FIKRS",
            "XFMCO",
            "XFMCB",
            "XFMCA",
            "TXJCD",
            "FMHRDATE",
            "BUVAR",
            "FDBUK",
            "XFDIS",
            "XVALV",
            "XSKFN",
            "KKBER",
            "XMWSN",
            "MREGL",
            "XGSBE",
            "XGJRV",
            "XKDFT",
            "XPROD",
            "XEINK",
            "XJVAA",
            "XVVWA",
            "XSLTA",
            "XFDMM",
            "XFDSD",
            "XEXTB",
            "EBUKR",
            "KTOP2",
            "UMKRS",
            "BUKRS_GLOB",
            "FSTVA",
            "OPVAR",
            "XCOVR",
            "TXKRS",
            "WFVAR",
            "XBBBF",
            "XBBBE",
            "XBBBA",
            "XBBKO",
            "XSTDT",
            "MWSKV",
            "MWSKA",
            "IMPDA",
            "XNEGP",
            "XKKBI",
            "WT_NEWWT",
            "PP_PDATE",
            "INFMT",
            "FSTVARE",
            "KOPIM",
            "DKWEG",
            "OFFSACCT",
            "BAPOVAR",
            "XCOS",
            "XCESSION",
            "XSPLT",
            "SURCCM",
            "DTPROV",
            "DTAMTC",
            "DTTAXC",
            "DTTDSP",
            "DTAXR",
            "XVATDATE",
            "PST_PER_VAR",
            "XBBSC",
            "FM_DERIVE_ACC"
        ],
        "fk": [
            "T001O",
            "T000",
            "T010O",
            "T880",
            "T009",
            "T005",
            "T003",
            "TGSB_CUS",
            "T002",
            "FM01",
            "T007F",
            "T004",
            "T007DT",
            "VBWF01",
            "T004V",
            "TREV",
            "TCURC",
            "T004R",
            "T001",
            "T014",
            "J_1AINFMET"
        ]
    },
    "T007F": {
        "f": [
            "MANDT",
            "UMKRS",
            "ADRNR",
            "FORMU",
            "SEITN",
            "UMSNR",
            "FAADR",
            "TEXT1",
            "TEXT2",
            "TEXT3",
            "TXTID",
            "TBUKRS"
        ],
        "fk": [
            "TTXID",
            "T000",
            "T001"
        ]
    },
    "TTXID": {
        "f": [
            "TDOBJECT",
            "TDID",
            "TDINCLID",
            "TDINCLRES",
            "TDOBLIGAT",
            "TDDELPROT",
            "TDSHOWNAME",
            "TDTEXTTYPE",
            "TDKEYSTRUC"
        ],
        "fk": [
            "TTXOB"
        ]
    },
    "TTXOB": {
        "f": [
            "TDOBJECT",
            "TDSAVEMODE",
            "TDAPPL",
            "TDLINESIZE",
            "TDSTYLE",
            "TDFORM",
            "TDTEXTTYPE",
            "TDINCLOBJ"
        ],
        "fk": []
    },
    "T004": {
        "f": [
            "MANDT",
            "KTOPL",
            "SAKLN",
            "DSPRA",
            "ASPRA",
            "KKTPL",
            "XSPER",
            "NO_VBUND",
            "INTEG_CO",
            "LAYOUT_0",
            "LAYOUT_P",
            "LAYOUT_S"
        ],
        "fk": [
            "T004",
            "T002",
            "TAMLAY0",
            "T000"
        ]
    },
    "TAMLAY0": {
        "f": [
            "MANDT",
            "APPL",
            "LAYOUT"
        ],
        "fk": [
            "TAMLAYA"
        ]
    },
    "TAMLAYA": {
        "f": [
            "APPL",
            "NTABS",
            "NSUBS",
            "TRANS",
            "FUNCG",
            "FUNCNAME"
        ],
        "fk": [
            "TFDIR"
        ]
    },
    "TREV": {
        "f": [
            "MANDT",
            "FSTVARE"
        ],
        "fk": [
            "T000"
        ]
    },
    "T003": {
        "f": [
            "MANDT",
            "BLART",
            "NUMKR",
            "KOARS",
            "STBLA",
            "XNETB",
            "XRVUP",
            "XSYBL",
            "XVORK",
            "XKKPR",
            "XGSUB",
            "XMGES",
            "BRGRU",
            "RECID",
            "RECIC",
            "XMTXT",
            "XMREF",
            "XNGBK",
            "KURST",
            "XNEGP",
            "XKOAA",
            "XKOAD",
            "XKOAK",
            "XKOAM",
            "XKOAS",
            "XNMRL",
            "XAUSG",
            "XDTCH",
            "BLKLS",
            "XROLLUP",
            "XPLAN",
            "XALLOCACT",
            "XALLOCPLAN",
            "X_PP_PROCESS",
            "XKURSX",
            "XPOSACC",
            "XUACPA",
            "XMREF2"
        ],
        "fk": [
            "J_1ADOCCLS",
            "T003",
            "T8JW",
            "TCURV",
            "T000"
        ]
    },
    "T8JW": {
        "f": [
            "MANDT",
            "RECID",
            "XRECR",
            "XINTN",
            "SUPBILLDTL",
            "MAPRECID"
        ],
        "fk": [
            "T8JW",
            "T000"
        ]
    },
    "J_1ADOCCLS": {
        "f": [
            "MANDT",
            "J_1ACOCCLS"
        ],
        "fk": [
            "T000"
        ]
    },
    "T004V": {
        "f": [
            "MANDT",
            "FSTVA"
        ],
        "fk": [
            "T000"
        ]
    },
    "T001O": {
        "f": [
            "MANDT",
            "BUKRS_GLOB",
            "KTOPL_NACH"
        ],
        "fk": []
    },
    "T004R": {
        "f": [
            "MANDT",
            "MREGL"
        ],
        "fk": [
            "T000"
        ]
    },
    "TGSB_CUS": {
        "f": [
            "BAPOVAR",
            "BAPOCOPY",
            "BAPOCOPYICOMP",
            "BAPOCOPYNDISC",
            "BAPOBSREADJ"
        ],
        "fk": []
    },
    "T009": {
        "f": [
            "MANDT",
            "PERIV",
            "XKALE",
            "XJABH",
            "ANZBP",
            "ANZSP"
        ],
        "fk": [
            "T000"
        ]
    },
    "FM01": {
        "f": [
            "MANDT",
            "FIKRS",
            "OBJNR",
            "FIPOE",
            "FIPOA",
            "NZSTL",
            "FCODE_PERIV_ACTV",
            "FUND_BLANK",
            "FUND_BLANK_TO",
            "FUNCTION_BLANK",
            "FUNCT_BLANK_TO",
            "MEASURE_BLANK",
            "MEASURE_BLANK_TO",
            "GRANT_BLANK",
            "GRANT_BLANK_TO",
            "WAERS",
            "SPRAS",
            "PERIV",
            "FMAKT",
            "DATBIS",
            "CB_PROFIL",
            "CA_PROFIL",
            "CA_PERIV",
            "CA_NUMKR",
            "CA_AKTIV",
            "CO_PERIV",
            "SP_PROFIL",
            "CA_STSMA",
            "FMCARR",
            "XFMCS",
            "SEQUENCE",
            "CO_TIMEDEP",
            "YEARPOS",
            "YEARCTR",
            "FS_PROFIL",
            "FS_PROFIL_AL",
            "CO_INTEGRATION",
            "CO_INT_START_HR",
            "HRBA_PRECOM",
            "HRBA_COMMIT",
            "HRBA_BLOCK",
            "VERSACT",
            "AUGRP",
            "ACTMODE",
            "FSTVARE",
            "DR_NUMKR",
            "FIPOE24",
            "FIPOA24",
            "FAREA_ACTIVE",
            "NO_HIERARCHY",
            "BUDGETTYPE_RIB",
            "BUDGETTYPE_COVER",
            "BUDGETTYPE_FYC",
            "BUDGETTYPE_HR",
            "CREATE_VAD",
            "HRBA_PRECOM_NEG",
            "HRBA_COMMIT_NEG",
            "BUD_PER_BLANK",
            "BUD_PER_BLANK_TO",
            "REV_CI_POST_OBJ",
            "CO_PLAN_NO_CHECK",
            "KENNZIFFER",
            "XBGACTIVE"
        ],
        "fk": [
            "TJ20",
            "TBP1C",
            "TKBBA",
            "TCURC",
            "FMUP00",
            "T002",
            "T000",
            "T009"
        ]
    },
    "FMUP00": {
        "f": [
            "PROFIL",
            "ACTIVE",
            "BUDUECYEAR",
            "BUDUEFYEAR",
            "PAY_GNJHR",
            "COM_GNJHR",
            "WFAPPROVED",
            "VASFUND",
            "VCOFUND",
            "STATLDG",
            "CVASFUND",
            "CVCOFUND"
        ],
        "fk": []
    },
    "TJ20": {
        "f": [
            "MANDT",
            "STSMA",
            "PFLSP",
            "HSTNR"
        ],
        "fk": [
            "T002",
            "T000"
        ]
    },
    "TKBBA": {
        "f": [
            "MANDT",
            "BLTYP",
            "BLART",
            "NUMKR",
            "FSTAGRE",
            "VORLAGEART",
            "REFERART",
            "WORKFLWART",
            "WF_START",
            "NEGVAL",
            "RESZ",
            "FORM_NAME",
            "GLACCDRV",
            "ADDITIV_CONS_LOG",
            "TOLSL",
            "FORMTYPE",
            "FMRO_TEMPLATE"
        ],
        "fk": [
            "TVA02",
            "FMR_TOLS",
            "TVA01",
            "TREWF",
            "T000",
            "NRIV",
            "TREG"
        ]
    },
    "TVA02": {
        "f": [
            "MANDT",
            "REFERART"
        ],
        "fk": []
    },
    "TREWF": {
        "f": [
            "MANDT",
            "WORKFLWART"
        ],
        "fk": [
            "T000"
        ]
    },
    "FMR_TOLS": {
        "f": [
            "MANDT",
            "TOLSL"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVA01": {
        "f": [
            "MANDT",
            "VORLAGEART"
        ],
        "fk": []
    },
    "TREG": {
        "f": [
            "MANDT",
            "FSTAGRE"
        ],
        "fk": [
            "T000"
        ]
    },
    "TBP1C": {
        "f": [
            "MANDT",
            "PROFIL",
            "APPLIK",
            "WRTTP",
            "BPGE",
            "BPJA",
            "BPPE",
            "AVA_ALL",
            "Y_FUTURE",
            "Y_PAST",
            "Y_START",
            "SIGHT",
            "SCALE",
            "DECIM",
            "KURST",
            "PLDAT",
            "PLSAV",
            "KLVAR",
            "PLELE",
            "SPRED",
            "KAGRU_PRK",
            "KAGRU_LST",
            "KAGRU_SKZ",
            "KAGRU_ERL",
            "RPLAN_KST",
            "RPLAN_ERL",
            "SKGRU",
            "RELE",
            "PRARTBU",
            "BOTTOMUP",
            "AKT_ART",
            "PROZBAT",
            "ERLART",
            "FPART",
            "CUROBJ",
            "CURTRA",
            "CURKOKR",
            "SDPLAN",
            "QUPLAN",
            "AUTORELEASE",
            "GBGRU",
            "SGBGRU",
            "FKGRU",
            "SFKGRU",
            "FM_GRANT_GROUP",
            "FM_SGRANT_GROUP",
            "AVA",
            "OBJ",
            "CONV",
            "BUDGET_PD_GROUP",
            "SBUDGET_PD_GROUP"
        ],
        "fk": [
            "TCURV",
            "TAI05",
            "TFPLA",
            "T000",
            "TCK03",
            "T820",
            "T821S"
        ]
    },
    "TFPLA": {
        "f": [
            "MANDT",
            "FPART",
            "FPTYP",
            "BEDAR",
            "ENDAR",
            "HORIZ",
            "AUTTD",
            "AUTTE",
            "PERIO",
            "FPLAE",
            "FAREG",
            "UEVOR",
            "RFPLN",
            "FAKCA",
            "VFPTT",
            "LODAR",
            "PERAF",
            "TBDAR",
            "ANZTM",
            "ANZTJ",
            "AUTKOR"
        ],
        "fk": [
            "TFPLT",
            "TFACD",
            "TVRG"
        ]
    },
    "TVRG": {
        "f": [
            "MANDT",
            "REGEL",
            "BASDAT",
            "ZEITR",
            "ZEITE",
            "MTEND",
            "PERCA",
            "VKOPO"
        ],
        "fk": [
            "TFACD"
        ]
    },
    "TFACD": {
        "f": [
            "IDENT",
            "VJAHR",
            "BJAHR",
            "MOTAG",
            "DITAG",
            "MIWCH",
            "DOTAG",
            "FRTAG",
            "SATAG",
            "SOTAG",
            "FETAG",
            "HOCID",
            "BASIS",
            "ABBR",
            "CRUSR",
            "CRDAT",
            "CRTIME",
            "INTERV",
            "AKTVJAHR",
            "AKTBJAHR"
        ],
        "fk": [
            "THOCI"
        ]
    },
    "THOCI": {
        "f": [
            "IDENT",
            "VJAHR",
            "BJAHR",
            "ABBR",
            "CRUSR",
            "CRDAT",
            "CRTIME",
            "AKTVJAHR",
            "AKTBJAHR"
        ],
        "fk": []
    },
    "TFPLT": {
        "f": [
            "MANDT",
            "FPART",
            "FPTTP",
            "TETXT",
            "FPFIX",
            "FAREG",
            "FAKSP",
            "FKARV",
            "AUTTD",
            "AUTTE",
            "PERIO",
            "FPLAE",
            "KSTEU",
            "TYPZM",
            "FAKSK",
            "FKARK"
        ],
        "fk": [
            "TVFK",
            "TVFS",
            "TVTB",
            "TFPLA",
            "T000",
            "TVRG"
        ]
    },
    "TVFS": {
        "f": [
            "MANDT",
            "FAKSP"
        ],
        "fk": []
    },
    "TVTB": {
        "f": [
            "MANDT",
            "TETBE"
        ],
        "fk": []
    },
    "TVFK": {
        "f": [
            "MANDT",
            "FKART",
            "KOPGR",
            "NUMKI",
            "NUMKE",
            "INCPO",
            "KUNN0",
            "UEVOR",
            "UMFNG",
            "RFBFK",
            "TRVOG",
            "TXN08",
            "VBTYP",
            "ERNAM",
            "PARGK",
            "PARGP",
            "KALSMC",
            "FKARTS",
            "TXTGR",
            "KAPPL",
            "KALSM",
            "KSCHL",
            "STAFO",
            "KVSLV",
            "KALVG",
            "TXTGR_P",
            "STATI",
            "KALSMBP",
            "BORVF",
            "FKART_RL",
            "RELEP",
            "TXTLF",
            "HITYP_PR",
            "FKART_AB",
            "GRBED_S",
            "ORDNR_FI_S",
            "XBLNR_FI_S",
            "J_1BNFREL",
            "J_1BMAINPA",
            "J_1BTDIDH",
            "J_1BTDCOH",
            "J_1BTDIDL",
            "J_1BTDCOL",
            "FKTYP",
            "XNEGP",
            "BLART",
            "XFILKD",
            "XVALGS",
            "KALSMCA",
            "KALSMCB",
            "KALSMCC",
            "KALSMCD",
            "XKOIV",
            "J_1AINVREF",
            "J_1ACPDEL",
            "UVEIB",
            "FKART_MEV_RESET",
            "VBTYP_EXT",
            "ISM_XKRVO",
            "OICINPD",
            "OIFEEPD",
            "OIINVCYC1",
            "OIINVCYC2",
            "OIINVCYC3",
            "OIINVCYC4",
            "OIINVCYC5",
            "OIINVCYC6",
            "OIINVCYC7",
            "OIINVCYC8",
            "OIINVCYC9",
            "OINETEXIT",
            "OIPTRMEX",
            "OIC_DIFFIN",
            "OIC_DICNTR",
            "OIC_ACCVAL",
            "OIC_ERRHA",
            "OIC_FKART",
            "OISELEXIT",
            "OIFINEXIT",
            "OINETRPT",
            "OIBTCEXIT",
            "OIAMWOFI",
            "OIABALAN",
            "OIINVAPP",
            "OIINDCM"
        ],
        "fk": [
            "TRDIR",
            "THIT",
            "TVFK",
            "T003",
            "T683",
            "TVKV",
            "T609B",
            "T687",
            "TTXID",
            "T681A",
            "T000",
            "TTXG",
            "J_1BAD"
        ]
    },
    "J_1BAD": {
        "f": [
            "MANDT",
            "PARVW",
            "PARTYP"
        ],
        "fk": [
            "T000"
        ]
    },
    "THIT": {
        "f": [
            "MANDT",
            "HITYP",
            "PARVW"
        ],
        "fk": [
            "TPAR",
            "T000"
        ]
    },
    "TPAR": {
        "f": [
            "MANDT",
            "PARVW",
            "STEIN",
            "UPARV",
            "FEHGR",
            "ERNAM",
            "NRART",
            "HITYP"
        ],
        "fk": [
            "TPAR",
            "THIT",
            "TVPA",
            "TVUV"
        ]
    },
    "TVUV": {
        "f": [
            "MANDT",
            "FEHGR",
            "FEHOB"
        ],
        "fk": [
            "TVUVG",
            "T000"
        ]
    },
    "TVUVG": {
        "f": [
            "MANDT",
            "FEHOB"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVPA": {
        "f": [
            "MANDT",
            "NRART",
            "ENTAB",
            "PAOBJ"
        ],
        "fk": []
    },
    "T687": {
        "f": [
            "MANDT",
            "KAPPL",
            "KVSL1"
        ],
        "fk": [
            "T000",
            "T681A"
        ]
    },
    "TRDIR": {
        "f": [
            "NAME",
            "SQLX",
            "EDTX",
            "VARCL",
            "DBAPL",
            "DBNA",
            "CLAS",
            "TYPE",
            "OCCURS",
            "SUBC",
            "APPL",
            "SECU",
            "CNAM",
            "CDAT",
            "UNAM",
            "UDAT",
            "VERN",
            "LEVL",
            "RSTAT",
            "RMAND",
            "RLOAD",
            "FIXPT",
            "SSET",
            "SDATE",
            "STIME",
            "IDATE",
            "ITIME",
            "LDBNAME",
            "UCCHECK"
        ],
        "fk": []
    },
    "TVKV": {
        "f": [
            "MANDT",
            "KALVG"
        ],
        "fk": []
    },
    "T609B": {
        "f": [
            "MANDT",
            "KPEXI",
            "UVEIB"
        ],
        "fk": [
            "T000"
        ]
    },
    "TTXG": {
        "f": [
            "MANDT",
            "TDOBJECT",
            "TXTGR",
            "TXTOB",
            "VKORG_SPRA",
            "SPRAS",
            "PARVW_SPRA"
        ],
        "fk": [
            "T000",
            "TTXOB"
        ]
    },
    "T821S": {
        "f": [
            "MANDT",
            "SPRED",
            "REFSP",
            "CRNAM",
            "CRDAT",
            "UPNAM",
            "UPDAT",
            "BRGRU",
            "PERFLAG",
            "PERIV",
            "APERIO",
            "ZYKEL"
        ],
        "fk": [
            "T821S",
            "TBRG",
            "T000",
            "T009"
        ]
    },
    "TBRG": {
        "f": [
            "MANDT",
            "BROBJ",
            "BRGRU"
        ],
        "fk": []
    },
    "TCK03": {
        "f": [
            "MANDT",
            "KLVAR",
            "KALKA",
            "BWVAR",
            "STGER",
            "STGEI",
            "ELEHK",
            "ELEVV",
            "ELEPK",
            "ELEAB",
            "ELESK",
            "ELESM",
            "NUMKR",
            "ORGEB",
            "ONLUP",
            "MANER",
            "KPROF",
            "KOAKNZ",
            "WAEKNZ",
            "SCHKZ",
            "AUFKZ",
            "FEHLST",
            "PARTNER",
            "EINZELS",
            "ZUSDS",
            "UEBID",
            "VORAEND",
            "LOSDR",
            "SPEISCH",
            "SPEIKOA",
            "SPEIEIN",
            "SPEIFEP",
            "SPEIVAE",
            "BZOBJ",
            "UMMANKO",
            "TERID",
            "KALVAR",
            "KALVAR_KMAT",
            "REFID",
            "UERBERNAHME_ERR",
            "UEBERNAHME_ASL",
            "PRFCTR_CALC",
            "KLVAR_NETZPKOSVO",
            "KLVAR_NETZPKOMP",
            "CON_FIN_PL"
        ],
        "fk": [
            "TCK22",
            "TCK05",
            "TCK19A",
            "TCK16",
            "T000",
            "TCK03",
            "TCK01",
            "TCK24",
            "TCK31",
            "TCKH4"
        ]
    },
    "TCKH4": {
        "f": [
            "MANDT",
            "ELEHK",
            "LOSUA",
            "AUSCH",
            "GUTSF",
            "AKTIV",
            "SORTE",
            "ESART",
            "PRIKOSTSCH"
        ],
        "fk": []
    },
    "TCK16": {
        "f": [
            "MANDT",
            "TERID",
            "EINVO",
            "VORVO",
            "EINVE",
            "VORVE",
            "EINBR",
            "VORBR",
            "EINBE",
            "VORBE",
            "STABE",
            "EINBW",
            "VORBW",
            "STABW",
            "VETBW"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCK24": {
        "f": [
            "MANDT",
            "UEBID",
            "UEBPER1",
            "UEBPER2",
            "UEBPER3",
            "PERALT",
            "PERALT2",
            "PERALT3",
            "UEBKLVAR1",
            "UEBKLVAR2",
            "UEBKLVAR3",
            "UEBKLVARW1",
            "UEBKLVARW2",
            "UEBKLVARW3",
            "INGJ",
            "INGJ2",
            "INGJ3",
            "VERSION1",
            "VERSION2",
            "VERSION3",
            "VERSIONW1",
            "VERSIONW2",
            "VERSIONW3",
            "UEPEWK1",
            "UEPEWK2",
            "UEPEWK3",
            "PERALTW",
            "PERALTW2",
            "PERALTW3",
            "INGJWK",
            "INGJWK2",
            "INGJWK3",
            "SAMBEDW",
            "SAMBEDB"
        ],
        "fk": [
            "TCK03",
            "T000"
        ]
    },
    "TCK19A": {
        "f": [
            "MANDT",
            "AUFKZ",
            "CAPID",
            "CPSLID",
            "RNDKZ",
            "ALTSEQ",
            "SEQ_CHANGE"
        ],
        "fk": [
            "TCA43",
            "TC04"
        ]
    },
    "TCA43": {
        "f": [
            "MANDT",
            "SEL_ID",
            "SEL_PR",
            "PLNTY",
            "VERWE",
            "STATU"
        ],
        "fk": [
            "T411",
            "TCA01",
            "T000",
            "T412"
        ]
    },
    "T411": {
        "f": [
            "MANDT",
            "VERWE",
            "DYNKRIT"
        ],
        "fk": [
            "TQ39",
            "T000"
        ]
    },
    "TQ39": {
        "f": [
            "DYNKRIT",
            "MATKZ",
            "LIEFKZ",
            "HERSTKZ",
            "KUNDKZ",
            "MASCHKZ",
            "PROKZ"
        ],
        "fk": []
    },
    "T412": {
        "f": [
            "MANDT",
            "PLNST",
            "FREIF",
            "PKLP",
            "FLG_CHK"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCA01": {
        "f": [
            "MANDT",
            "PLNTY",
            "PLNAW",
            "MATKZ",
            "BLDTY",
            "OBJECT",
            "NKNRI",
            "NKNRE",
            "FLG_OPRSOP",
            "FLG_SEQ",
            "FLG_QSS",
            "FLG_AOB",
            "FLG_UOBJ",
            "FLG_EQUI",
            "FLG_IFL",
            "FLG_INST",
            "SCREENTY",
            "FLG_REF",
            "FLG_PHAS",
            "FLG_FEAT",
            "FLG_DOC",
            "FLG_PHYS",
            "FLG_MST",
            "FLG_CHK",
            "PID_MAT",
            "PID_PLN",
            "FLG_STUELI",
            "PID_AUN",
            "FLG_GPOS",
            "FLG_MKAL",
            "FLG_ERF_OP",
            "OPR_BLDGR",
            "OPR_PANEL",
            "FLG_CHK_RE",
            "FLG_ARBEI",
            "FLG_KALC",
            "FLG_CHRULE",
            "FLG_LK_CHK",
            "FLG_MATCOM"
        ],
        "fk": [
            "TNRO",
            "T000",
            "TCA09"
        ]
    },
    "TCA09": {
        "f": [
            "MANDT",
            "PLNAW",
            "OBJSUB",
            "IDSUB",
            "OBJALT",
            "IDALT",
            "OBJSEQ",
            "IDSEQ",
            "OBJOPR",
            "IDOPR",
            "OBJFHM",
            "IDFHM",
            "CLASS",
            "LINESIZE",
            "OBJPHAS",
            "IDPHAS",
            "OBJFEAT",
            "IDFEAT",
            "OBJMST",
            "IDMST",
            "OBJFEAV",
            "IDFEAV"
        ],
        "fk": [
            "TTXID",
            "T000",
            "TTXOB"
        ]
    },
    "TC04": {
        "f": [
            "MANDT",
            "CAPID",
            "CSLID",
            "X415A",
            "XZBDP",
            "XZPAF",
            "XZKLF",
            "XZAPF",
            "XZAUF",
            "XZSME",
            "XZRVA",
            "XFVRS",
            "XVWPR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCK22": {
        "f": [
            "BZOBJ",
            "OBJECT",
            "NKRSSW",
            "VRGER",
            "VRGEI",
            "APPL"
        ],
        "fk": []
    },
    "TCK05": {
        "f": [
            "MANDT",
            "BWVAR",
            "BWSM1",
            "BWSM2",
            "BWSM3",
            "BWSM4",
            "BWSM5",
            "BWSE1",
            "BWSE2",
            "BWSE3",
            "MATSUBSTRAT1",
            "MATSUBSTRAT2",
            "MATSUBSTRAT3",
            "BWMA1",
            "BWMA2",
            "BWMA3",
            "BWMA4",
            "BWMA5",
            "BWSF1",
            "BWSF2",
            "BWSF3",
            "BWSV1",
            "BWSV2",
            "BWSV3",
            "BWSFH",
            "KALSM",
            "KALSM_RAW",
            "ZUART",
            "PLISQUT",
            "LOBEZUS",
            "PERTARIF",
            "VERSN",
            "CON_FIN_MPL1",
            "CON_FIN_MPL2",
            "CON_FIN_MPL3",
            "CON_FIN_MPL4",
            "CON_FIN_MPL5"
        ],
        "fk": [
            "T683",
            "TKA09"
        ]
    },
    "TKA09": {
        "f": [
            "MANDT",
            "KOKRS",
            "VERSN",
            "ACTUAL",
            "PLANNING",
            "BRGRU",
            "REFVS",
            "EXUVS",
            "VALUTYP",
            "WIPDF",
            "ABWDF"
        ],
        "fk": [
            "TKA01",
            "TBRG",
            "T000",
            "TKVS",
            "TKA09"
        ]
    },
    "TKVS": {
        "f": [
            "MANDT",
            "VERSI",
            "EXUVS",
            "PLNDF",
            "ISTDF",
            "WIPDF",
            "ABWDF"
        ],
        "fk": [
            "T000"
        ]
    },
    "TKA01": {
        "f": [
            "MANDT",
            "KOKRS",
            "BEZEI",
            "WAERS",
            "KTOPL",
            "LMONA",
            "KOKFI",
            "LOGSYSTEM",
            "ALEMT",
            "MD_LOGSYSTEM",
            "KHINR",
            "KOMP1",
            "KOMP0",
            "KOMP2",
            "ERKRS",
            "DPRCT",
            "PHINR",
            "PCLDG",
            "PCBEL",
            "XWBUK",
            "BPHINR",
            "XBPALE",
            "KSTAR_FIN",
            "KSTAR_FID",
            "PCACUR",
            "PCACURTP",
            "PCATRCUR",
            "CTYP",
            "RCLAC",
            "BLART",
            "FIKRS",
            "RCL_PRIMAC",
            "PCA_ALEMT",
            "PCA_VALU",
            "CVPROF",
            "CVACT",
            "VNAME",
            "PCA_ACC_DIFF",
            "TP_VALOHB",
            "DEFPRCTR",
            "AUTH_USE_NO_STD",
            "AUTH_USE_ADD1",
            "AUTH_USE_ADD2",
            "AUTH_KE_NO_STD",
            "AUTH_KE_USE_ADD1",
            "AUTH_KE_USE_ADD2"
        ],
        "fk": [
            "T004",
            "CEPC",
            "TCURC",
            "TBDLS",
            "T003",
            "USR02",
            "TKEB",
            "T000",
            "FM01",
            "T881",
            "CSKA",
            "TCVPROF",
            "T009"
        ]
    },
    "TKEB": {
        "f": [
            "MANDT",
            "ERKRS",
            "SAPRL",
            "PVERS",
            "HITYP",
            "WAERS",
            "PERIV",
            "PERFLAG",
            "PERIV2",
            "PERFLAG2",
            "USEPER2I",
            "USEPER2P",
            "TIMESTMP",
            "ALEACT",
            "CHAR_CHECK",
            "CRERL",
            "CREDA"
        ],
        "fk": [
            "THIT",
            "TCURC",
            "T000",
            "T009"
        ]
    },
    "TCVPROF": {
        "f": [
            "MANDT",
            "CVPROF"
        ],
        "fk": [
            "T000"
        ]
    },
    "T881": {
        "f": [
            "MANDT",
            "RLDNR",
            "GCURR",
            "CLASS",
            "TYP",
            "TRCUR",
            "LCCUR",
            "RCCUR",
            "OCCUR",
            "QUANT",
            "ATQNT",
            "TAB",
            "RCOPY",
            "SHKZ",
            "GLSIP",
            "VORTRAG",
            "DLDNR",
            "XDLDNR",
            "CURT1",
            "CURT2",
            "CURT3",
            "V2POST",
            "LCTYP",
            "FIX",
            "POST",
            "ROLLUP",
            "DEPLD",
            "APPL",
            "SUBAPPL",
            "KOMP",
            "GZLEDGER",
            "EXIT",
            "KLDNR",
            "LOGSYS",
            "VALUTYP",
            "GCOMPRESS",
            "SPLITMETHD",
            "DATE_DET_POPER",
            "GLFLEX",
            "XLEADING",
            "ORIENT_LEDGER",
            "AVG_ROLLUP",
            "XCASH_LEDGER"
        ],
        "fk": [
            "TCURC",
            "TBDLS",
            "V_FAGL_T881_DB",
            "T8G01",
            "T000",
            "T881"
        ]
    },
    "T8G01": {
        "f": [
            "MANDT",
            "SPLITMETHD"
        ],
        "fk": [
            "T000"
        ]
    },
    "V_FAGL_T881_DB": {
        "f": [
            "MANDT",
            "RLDNR"
        ],
        "fk": [
            "T000"
        ]
    },
    "CSKA": {
        "f": [
            "MANDT",
            "KTOPL",
            "KSTAR",
            "ERSDA",
            "USNAM",
            "STEKZ",
            "ZAHKZ",
            "KSTSN",
            "FUNC_AREA"
        ],
        "fk": [
            "T004",
            "TFKB"
        ]
    },
    "TFKB": {
        "f": [
            "MANDT",
            "FKBER",
            "AUTHGRP",
            "STR_ID",
            "FNSUB1",
            "FNSUB2",
            "FNSUB3",
            "CREATED_BY",
            "CREATED_ON",
            "CREATED_AT",
            "MODIFIED_BY",
            "MODIFIED_ON",
            "MODIFIED_AT",
            "DATAB",
            "DATBIS",
            "DATE_EXP"
        ],
        "fk": [
            "FMMDFNSUB1",
            "T000",
            "FMMDFNSUB2",
            "FMMDFNSUB3",
            "FMMDSTRID"
        ]
    },
    "FMMDFNSUB3": {
        "f": [
            "MANDT",
            "STR_ID",
            "FNSUB3"
        ],
        "fk": [
            "FMMDSTRID"
        ]
    },
    "FMMDSTRID": {
        "f": [
            "MANDT",
            "MASDAT_ID",
            "STR_ID"
        ],
        "fk": []
    },
    "FMMDFNSUB1": {
        "f": [
            "MANDT",
            "STR_ID",
            "FNSUB1"
        ],
        "fk": [
            "FMMDSTRID"
        ]
    },
    "FMMDFNSUB2": {
        "f": [
            "MANDT",
            "STR_ID",
            "FNSUB2"
        ],
        "fk": [
            "FMMDSTRID"
        ]
    },
    "CEPC": {
        "f": [
            "MANDT",
            "PRCTR",
            "DATBI",
            "KOKRS",
            "DATAB",
            "ERSDA",
            "USNAM",
            "MERKMAL",
            "ABTEI",
            "VERAK",
            "VERAK_USER",
            "WAERS",
            "NPRCTR",
            "LAND1",
            "ANRED",
            "NAME1",
            "NAME2",
            "NAME3",
            "NAME4",
            "ORT01",
            "ORT02",
            "STRAS",
            "PFACH",
            "PSTLZ",
            "PSTL2",
            "SPRAS",
            "TELBX",
            "TELF1",
            "TELF2",
            "TELFX",
            "TELTX",
            "TELX1",
            "DATLT",
            "DRNAM",
            "KHINR",
            "BUKRS",
            "VNAME",
            "RECID",
            "ETYPE",
            "TXJCD",
            "REGIO",
            "KVEWE",
            "KAPPL",
            "KALSM",
            "LOGSYSTEM",
            "LOCK_IND",
            "PCA_TEMPLATE",
            "SEGMENT"
        ],
        "fk": [
            "T005",
            "TTXJ",
            "TBDLS",
            "TKA01",
            "T8JJ",
            "TCURC",
            "T683",
            "FAGL_SEGM",
            "T8JV",
            "COTPL",
            "USR02",
            "T002",
            "T001",
            "T681A",
            "T681V",
            "T000",
            "T005S",
            "T8JE"
        ]
    },
    "T8JE": {
        "f": [
            "MANDT",
            "BUKRS",
            "ETYPE"
        ],
        "fk": [
            "T001",
            "T000"
        ]
    },
    "COTPL": {
        "f": [
            "MANDT",
            "KOKRS",
            "CLASS",
            "TEMPLATE",
            "RELEASE"
        ],
        "fk": [
            "COTPLCLASS"
        ]
    },
    "COTPLCLASS": {
        "f": [
            "CLASS",
            "MAIN_CLASS",
            "APPLICATION",
            "DEFAULT_LINE"
        ],
        "fk": [
            "COTPLLINETYPE",
            "COTPLAPPL"
        ]
    },
    "COTPLLINETYPE": {
        "f": [
            "LINETYPE",
            "OBJ_DATATYPE",
            "OBJ_CONV",
            "OBJ_F4HELP",
            "OBJ_SELECT",
            "OBJ_GET_DETAIL",
            "OBJ_SEL_STRUC",
            "OBJ_SUBENV",
            "OBJ_FORMULA",
            "TEMP_USE",
            "FUNC_USE",
            "F4_ONLY",
            "USE_SUB_ENV",
            "USE_ORG_OBJ"
        ],
        "fk": [
            "COTPLLINETYPE"
        ]
    },
    "COTPLAPPL": {
        "f": [
            "APPLICATION",
            "SOURCE_REP",
            "COLDEF_REP",
            "POSCALL_REP",
            "CONST_REP"
        ],
        "fk": []
    },
    "T8JV": {
        "f": [
            "MANDT",
            "BUKRS",
            "VNAME",
            "PAYTERMS",
            "BMETHOD",
            "VTYPE",
            "OPERATOR",
            "TAXCODE",
            "VCLASS",
            "ITD",
            "CRUSER",
            "CRTIME",
            "CRDATE",
            "CHUSER",
            "CHTIME",
            "CHDATE",
            "BFORMAT",
            "JOA",
            "VACTIVE",
            "TXJCD",
            "OUTPAYTERM",
            "OUTTAXCODE",
            "TXJCD2",
            "NBFORMAT",
            "BFREQ",
            "OVRDF",
            "OVRND",
            "PCOCOSTC",
            "PCOPROJK",
            "PCOORDNR",
            "KOSTL",
            "FUNDGROUP",
            "CHECKFC",
            "PROPERTY",
            "BILLTHRES",
            "BILLTHRESC",
            "BILLTHRESA",
            "PSCHEM"
        ],
        "fk": [
            "T007A",
            "TTXJ",
            "T8JU",
            "T8J0R",
            "CSKS",
            "AUFK",
            "T8JPTS",
            "T8J3A",
            "T8JM",
            "T8J0C",
            "T001",
            "T000",
            "KNA1",
            "T8JT",
            "PRPS"
        ]
    },
    "T8JM": {
        "f": [
            "MANDT",
            "BUKRS",
            "FUNDGROUP",
            "TDFORM",
            "BRFORM",
            "OUTPUT_TYPE"
        ],
        "fk": [
            "T001",
            "T000"
        ]
    },
    "T8JU": {
        "f": [
            "MANDT",
            "BUKRS",
            "JOA",
            "CONTRACT",
            "PAYSET",
            "DFPAY",
            "NDPAY",
            "XSETCON",
            "XSETCAT",
            "CONRULE",
            "CATRULE",
            "PER1",
            "XPER1",
            "PER2",
            "XPER2",
            "EXPRULE",
            "DRLRULE",
            "XSETCAP",
            "OFFCC",
            "JOAPRTH",
            "RECDOC",
            "FLATRATE",
            "ESCAL",
            "ACLASS",
            "CRUSER",
            "CRTIME",
            "CRDATE",
            "CHUSER",
            "CHTIME",
            "CHDATE",
            "NONCOMP",
            "DRILLP",
            "ALLWBS"
        ],
        "fk": [
            "T8J9F",
            "CSKS",
            "T8J8B",
            "T000",
            "T001"
        ]
    },
    "T8J8B": {
        "f": [
            "MANDT",
            "BUKRS",
            "STEPRULE",
            "TFRAME"
        ],
        "fk": [
            "T001",
            "T000"
        ]
    },
    "CSKS": {
        "f": [
            "MANDT",
            "KOKRS",
            "KOSTL",
            "DATBI",
            "DATAB",
            "BKZKP",
            "PKZKP",
            "BUKRS",
            "GSBER",
            "KOSAR",
            "VERAK",
            "VERAK_USER",
            "WAERS",
            "KALSM",
            "TXJCD",
            "PRCTR",
            "WERKS",
            "LOGSYSTEM",
            "ERSDA",
            "USNAM",
            "BKZKS",
            "BKZER",
            "BKZOB",
            "PKZKS",
            "PKZER",
            "VMETH",
            "MGEFL",
            "ABTEI",
            "NKOST",
            "KVEWE",
            "KAPPL",
            "KOSZSCHL",
            "LAND1",
            "ANRED",
            "NAME1",
            "NAME2",
            "NAME3",
            "NAME4",
            "ORT01",
            "ORT02",
            "STRAS",
            "PFACH",
            "PSTLZ",
            "PSTL2",
            "REGIO",
            "SPRAS",
            "TELBX",
            "TELF1",
            "TELF2",
            "TELFX",
            "TELTX",
            "TELX1",
            "DATLT",
            "DRNAM",
            "KHINR",
            "CCKEY",
            "KOMPL",
            "STAKZ",
            "OBJNR",
            "FUNKT",
            "AFUNK",
            "CPI_TEMPL",
            "CPD_TEMPL",
            "FUNC_AREA",
            "SCI_TEMPL",
            "SCD_TEMPL",
            "VNAME",
            "RECID",
            "ETYPE",
            "JV_OTYPE",
            "JV_JIBCL",
            "JV_JIBSA",
            "FERC_IND"
        ],
        "fk": [
            "TTXJ",
            "TGSB",
            "FERC_C7",
            "T8J6C",
            "T001W",
            "T8JG",
            "T8J6A",
            "T005",
            "T683",
            "T8JV",
            "T002",
            "T681V",
            "T681A",
            "COTPL",
            "TFKB",
            "TBDLS",
            "TKA01",
            "USR02",
            "TKA05",
            "TCURC",
            "T8JJ",
            "ONR00",
            "T001",
            "T005S"
        ]
    },
    "T8JJ": {
        "f": [
            "MANDT",
            "BUKRS",
            "RECID",
            "XRECR",
            "XINTN",
            "MAPRECID",
            "XCPAY",
            "BILLB"
        ],
        "fk": [
            "T8JJ",
            "T001",
            "T000"
        ]
    },
    "TTXJ": {
        "f": [
            "MANDT",
            "KALSM",
            "TXJCD",
            "XSKFN",
            "XMWSN"
        ],
        "fk": [
            "TTXD",
            "T000"
        ]
    },
    "TTXD": {
        "f": [
            "MANDT",
            "KALSM",
            "LENG1",
            "LENG2",
            "LENG3",
            "LENG4",
            "XEXTN",
            "XTXIT",
            "INTVERSION",
            "RFCDEST",
            "XCORRECT",
            "RFCDEST_UD"
        ],
        "fk": [
            "T000"
        ]
    },
    "T8JG": {
        "f": [
            "MANDT",
            "BUKRS",
            "VNAME",
            "ETYPE",
            "FDATE",
            "EGRUP",
            "EGROUPACT",
            "BCURR"
        ],
        "fk": [
            "T8JV",
            "T001",
            "T000",
            "T8JF",
            "T8JE"
        ]
    },
    "T8JF": {
        "f": [
            "MANDT",
            "BUKRS",
            "VNAME",
            "EGRUP",
            "OPSHARE",
            "NOPSHARE",
            "EGROUPACT",
            "EGROUPSUS",
            "GRPSUSPER",
            "GRPSUSYEAR",
            "EGROUPUSUS",
            "GRPUSUSPER",
            "GRPUSUSYER",
            "NPIGROUP"
        ],
        "fk": [
            "T8JV",
            "T001",
            "T000",
            "T8J2A"
        ]
    },
    "T8J2A": {
        "f": [
            "MANDT",
            "BUKRS",
            "NPIGROUP",
            "NPIPAYPER"
        ],
        "fk": [
            "T001",
            "T000"
        ]
    },
    "TGSB": {
        "f": [
            "MANDT",
            "GSBER",
            "GSBER_KONS",
            "GSBER_GLOB"
        ],
        "fk": [
            "TGSBG",
            "TGSBK"
        ]
    },
    "TGSBG": {
        "f": [
            "MANDT",
            "GSBER_GLOB"
        ],
        "fk": [
            "T000"
        ]
    },
    "TGSBK": {
        "f": [
            "MANDT",
            "GSBER_KONS"
        ],
        "fk": [
            "T000"
        ]
    },
    "FERC_C7": {
        "f": [
            "MANDT",
            "IND"
        ],
        "fk": [
            "T000"
        ]
    },
    "TKA05": {
        "f": [
            "MANDT",
            "KOSAR",
            "BKZKP",
            "BKZKS",
            "BKZER",
            "BKZOB",
            "PKZKP",
            "PKZKS",
            "PKZER",
            "VMETH",
            "MGEFL",
            "FUNC_AREA"
        ],
        "fk": [
            "TFKB"
        ]
    },
    "T8J6C": {
        "f": [
            "MANDT",
            "BUKRS",
            "CLASS",
            "SUBCLASS"
        ],
        "fk": [
            "T8J6A",
            "T001",
            "T000"
        ]
    },
    "T8J6A": {
        "f": [
            "MANDT",
            "BUKRS",
            "CLASS",
            "BILLCODE",
            "CAPITAL"
        ],
        "fk": [
            "T001",
            "T000"
        ]
    },
    "ONR00": {
        "f": [
            "MANDT",
            "OBJNR"
        ],
        "fk": [
            "T000"
        ]
    },
    "T001W": {
        "f": [
            "MANDT",
            "WERKS",
            "NAME1",
            "BWKEY",
            "KUNNR",
            "LIFNR",
            "FABKL",
            "NAME2",
            "STRAS",
            "PFACH",
            "PSTLZ",
            "ORT01",
            "EKORG",
            "VKORG",
            "CHAZV",
            "KKOWK",
            "KORDB",
            "BEDPL",
            "LAND1",
            "REGIO",
            "COUNC",
            "CITYC",
            "ADRNR",
            "IWERK",
            "TXJCD",
            "VTWEG",
            "SPART",
            "SPRAS",
            "WKSOP",
            "AWSLS",
            "CHAZV_OLD",
            "VLFKZ",
            "BZIRK",
            "ZONE1",
            "TAXIW",
            "BZQHL",
            "LET01",
            "LET02",
            "LET03",
            "TXNAM_MA1",
            "TXNAM_MA2",
            "TXNAM_MA3",
            "BETOL",
            "J_1BBRANCH",
            "VTBFI",
            "FPRFW",
            "ACHVM",
            "DVSART",
            "NODETYPE",
            "NSCHEMA",
            "PKOSA",
            "MISCH",
            "MGVUPD",
            "VSTEL",
            "MGVLAUPD",
            "MGVLAREVAL",
            "SOURCING",
            "OILIVAL",
            "OIHVTYPE",
            "OIHCREDIPI",
            "STORETYPE",
            "DEP_STORE"
        ],
        "fk": [
            "J_1BBRANCH",
            "TTXJ",
            "TMKW1",
            "T001W",
            "T005G",
            "CKMLMV007",
            "T000",
            "KNA1",
            "TKV01",
            "TFACD",
            "T005",
            "T002",
            "T171",
            "LFA1",
            "TZONE",
            "T001K",
            "T005E",
            "TSPA",
            "MDRP_NODT",
            "T024E",
            "TVKO",
            "T005S",
            "TWFPF",
            "TVTW",
            "TVST"
        ]
    },
    "TMKW1": {
        "f": [
            "MANDT",
            "LAND1",
            "TAXIW"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "T001K": {
        "f": [
            "MANDT",
            "BWKEY",
            "BUKRS",
            "BWMOD",
            "XBKNG",
            "MLBWA",
            "MLBWV",
            "XVKBW",
            "ERKLAERKOM",
            "UPROF",
            "WBPRO",
            "MLAST",
            "MLASV",
            "BDIFP",
            "XLBPD",
            "XEWRX",
            "X2FDO",
            "PRSFR",
            "MLCCS",
            "XEFRE",
            "EFREJ",
            "/FMP/PRSFR",
            "/FMP/PRFRGR"
        ],
        "fk": [
            "TWPR",
            "/FMP/C_MP_PRGRP",
            "T001",
            "T000",
            "TWUP"
        ]
    },
    "TWPR": {
        "f": [
            "MANDT",
            "WBPRO",
            "RT23W",
            "RT23X",
            "KEWAR",
            "WGHST",
            "FWERT"
        ],
        "fk": [
            "T000"
        ]
    },
    "TWUP": {
        "f": [
            "MANDT",
            "UPROF",
            "STOCKC",
            "AKTBW",
            "LOKAB",
            "SPANN"
        ],
        "fk": [
            "T000"
        ]
    },
    "/FMP/C_MP_PRGRP": {
        "f": [],
        "fk": []
    },
    "MDRP_NODT": {
        "f": [
            "NODETYPE",
            "ICONBIG",
            "ICONMIDDLE",
            "ICONSMALL",
            "PLANTFLG",
            "SUPPFLG",
            "CUSTFLG",
            "STOCKFLG"
        ],
        "fk": []
    },
    "TKV01": {
        "f": [
            "MANDT",
            "AWOBA",
            "AWSLS",
            "AWKUM",
            "AWDEG",
            "AWEPS",
            "AWESO",
            "AWESP",
            "AWEAU",
            "AWEAB",
            "AWEWP"
        ],
        "fk": [
            "T000"
        ]
    },
    "TFK070B": {
        "f": [
            "MANDT",
            "COPRC"
        ],
        "fk": []
    },
    "TFK2606": {
        "f": [
            "MANDT",
            "INV_SCHEDULE"
        ],
        "fk": []
    },
    "TFK001S": {
        "f": [
            "MANDT",
            "STOPG"
        ],
        "fk": []
    },
    "J_1AFITPV": {
        "f": [
            "MANDT",
            "J_1AFITP"
        ],
        "fk": [
            "T000"
        ]
    },
    "TFK047F": {
        "f": [
            "MANDT",
            "MGRUP"
        ],
        "fk": []
    },
    "TFK2607": {
        "f": [
            "MANDT",
            "CYCLE",
            "CYCLE_PERIODCAT",
            "CYCLE_DAY_TYPE",
            "CYCLE_DAY",
            "CYCLE_MONTH",
            "INDIVIDUAL",
            "CYCLE_TRUNC",
            "CYCLE_MINDAYS",
            "TERMINATEDATE"
        ],
        "fk": []
    },
    "TFK047A": {
        "f": [
            "MANDT",
            "MAHNV",
            "MVTYP",
            "ALTMV",
            "ALTMV2",
            "VLMST",
            "XDLOD",
            "XMFAC",
            "MFCID",
            "NOT_LOWER_DL",
            "VBGUT"
        ],
        "fk": [
            "TFK047J",
            "T000",
            "TFK047A",
            "TFACD"
        ]
    },
    "TFK047J": {
        "f": [
            "MANDT",
            "MVTYP"
        ],
        "fk": [
            "T000"
        ]
    },
    "TFK043": {
        "f": [
            "MANDT",
            "TOGRU",
            "WAERS",
            "DIFBH",
            "DIFBS",
            "DIFPH",
            "DIFPS",
            "XUNDP",
            "XOVRP"
        ],
        "fk": [
            "TCURC"
        ]
    },
    "J_1BBRANCH": {
        "f": [
            "MANDT",
            "BUKRS",
            "BRANCH",
            "NAME",
            "CGC_BRANCH",
            "STATE_INSC",
            "MUNIC_INSC",
            "INDUSTRY",
            "SINGLE",
            "ADRNR",
            "NFDEC",
            "KR_REPRES",
            "KR_BUSTYPE",
            "KR_INDTYPE",
            "STCD1",
            "STCD2",
            "KR_TAXOFF",
            "PAC01",
            "VDP01",
            "PAC02",
            "VDP02",
            "IPICONTRIBUTOR",
            "IDSIGN",
            "SOURE_DANGERGOOD",
            "SUFRAMA",
            "NIRE",
            "NIREDT",
            "SPEDACTIND",
            "CNAE",
            "LEGALNAT",
            "CRTN",
            "ICMSTAXPAY",
            "INDTYP",
            "TDT",
            "COMSIZE",
            "DECREGPC"
        ],
        "fk": [
            "BUSTYPE",
            "J_1BTICMSTAXPAY",
            "J_1BTINDTYP",
            "J_1BTDECREGPC",
            "TAXOFFICE",
            "J_1BTTDT",
            "T001",
            "J_1BTLEGALNAT",
            "T000",
            "J_1BTCNAE",
            "J_1BTCOMSIZE",
            "INDUSTYPE"
        ]
    },
    "J_1BTLEGALNAT": {
        "f": [
            "MANDT",
            "J_1BLEGALNAT"
        ],
        "fk": []
    },
    "J_1BTINDTYP": {
        "f": [
            "MANDT",
            "J_1BINDTYP"
        ],
        "fk": []
    },
    "J_1BTICMSTAXPAY": {
        "f": [
            "MANDT",
            "J_1BICMSTAXPAY"
        ],
        "fk": []
    },
    "J_1BTDECREGPC": {
        "f": [
            "MANDT",
            "J_1BDECREGPC"
        ],
        "fk": []
    },
    "J_1BTCNAE": {
        "f": [
            "MANDT",
            "J_1BCNAE"
        ],
        "fk": []
    },
    "INDUSTYPE": {
        "f": [
            "MANDT",
            "INDTYPE"
        ],
        "fk": []
    },
    "J_1BTCOMSIZE": {
        "f": [
            "MANDT",
            "J_1BCOMSIZE"
        ],
        "fk": []
    },
    "J_1BTTDT": {
        "f": [
            "MANDT",
            "J_1BTDT"
        ],
        "fk": []
    },
    "TAXOFFICE": {
        "f": [
            "MANDT",
            "TAXOFFICE"
        ],
        "fk": []
    },
    "BUSTYPE": {
        "f": [
            "MANDT",
            "GESTYP"
        ],
        "fk": []
    },
    "TFK056A": {
        "f": [
            "MANDT",
            "IKEY",
            "TODAYS",
            "IRUNITO",
            "TRDAYS",
            "IRUNITR",
            "IRHYTH",
            "IRUNIT",
            "IRULE",
            "HVORG",
            "TVORG",
            "VERZZP",
            "VERZWE",
            "ICOND",
            "IALLZ"
        ],
        "fk": [
            "T056G",
            "T000"
        ]
    },
    "T056G": {
        "f": [
            "MANDT",
            "IRULE",
            "INTMETHOD",
            "XICNUM",
            "XIROUND",
            "IINTERVAL",
            "IMONTH",
            "SCALEDTYP",
            "XAMINT",
            "XDAYINT",
            "XDOCMIN",
            "XINTINT"
        ],
        "fk": []
    },
    "T007A": {
        "f": [
            "MANDT",
            "KALSM",
            "MWSKZ",
            "PRUEF",
            "MWART",
            "XMSTU",
            "ZMWSK",
            "EGRKZ",
            "XSLTA",
            "PROCD",
            "TXIND",
            "TXREL",
            "LSTML",
            "J_1BUSAGE",
            "J_1BISS",
            "J_1BTAXLW1",
            "J_1BTAXLW2",
            "J_1BTXICEX",
            "J_1BTXIPEX",
            "TOLERANCE",
            "ZMWSK_ESA",
            "ZMWSK_ESE",
            "NEWDEFTAX",
            "J_1BTAXLW4",
            "J_1BTAXLW5"
        ],
        "fk": [
            "J_1BATL5",
            "J_1BATL4A",
            "T005",
            "T007A",
            "T683",
            "J_1BATL1",
            "T000",
            "J_1BATL2"
        ]
    },
    "J_1BATL4A": {
        "f": [
            "MANDT",
            "TAXLAW",
            "TAXSIT",
            "TAXSITOUT"
        ],
        "fk": [
            "J_1BTAXSITCOF"
        ]
    },
    "J_1BTAXSITCOF": {
        "f": [
            "MANDT",
            "TAXSIT"
        ],
        "fk": []
    },
    "J_1BATL5": {
        "f": [
            "MANDT",
            "TAXLAW",
            "TAXSIT",
            "TAXSITOUT"
        ],
        "fk": [
            "J_1BTAXSITPIS"
        ]
    },
    "J_1BTAXSITPIS": {
        "f": [
            "MANDT",
            "TAXSIT"
        ],
        "fk": []
    },
    "J_1BATL1": {
        "f": [
            "MANDT",
            "TAXLAW",
            "TAXSIT"
        ],
        "fk": [
            "T000"
        ]
    },
    "J_1BATL2": {
        "f": [
            "MANDT",
            "TAXLAW",
            "TAXSIT",
            "TAXSITOUT"
        ],
        "fk": [
            "J_1BAS",
            "T000"
        ]
    },
    "J_1BAS": {
        "f": [
            "MANDT",
            "TAXSIT"
        ],
        "fk": [
            "T000"
        ]
    },
    "FAGL_SEGM": {
        "f": [
            "MANDT",
            "SEGMENT"
        ],
        "fk": []
    },
    "TAI05": {
        "f": [
            "MANDT",
            "PRART",
            "PROFIL",
            "XALLP",
            "DARST",
            "SCOPE",
            "VJAWE",
            "XJBDG",
            "PRAUT",
            "STSMA",
            "XAKTB",
            "XORGV",
            "XORGC",
            "XAFAV",
            "KURST",
            "CAFWD",
            "PPROFIL",
            "YDIST",
            "DIMEN",
            "X1ASS",
            "IVPRO"
        ],
        "fk": [
            "TJ20",
            "TBP1C",
            "TCURV",
            "TAPRF",
            "TF150",
            "T000"
        ]
    },
    "TAPRF": {
        "f": [
            "MANDT",
            "IVPRO",
            "INVMA",
            "ANLKL_I",
            "XIANLKL",
            "XURSCH",
            "ANLKL_S",
            "XSANLKL",
            "XINID",
            "ABART",
            "AUFART",
            "XBUDG",
            "VERSI_S",
            "XAKTIV",
            "XXUNVL"
        ],
        "fk": [
            "ANKA",
            "T000",
            "TKVS"
        ]
    },
    "ANKA": {
        "f": [
            "MANDT",
            "ANLKL",
            "ERNAM",
            "ERDAT",
            "AENAM",
            "AEDAT",
            "XLOEV",
            "XSPEA",
            "XOPVW",
            "NUMKR",
            "KTOGR",
            "ANKAR",
            "FELEI",
            "BEGRU",
            "ZUAWA",
            "GSBER",
            "WERKS",
            "KOSTL",
            "LSTAR",
            "ANEQK",
            "ANEQS",
            "MACKZ",
            "LAND1",
            "LIFNR",
            "LIEFE",
            "ANLUE",
            "EIGKZ",
            "VMGLI",
            "XVRMW",
            "INVSL",
            "ORD41",
            "ORD42",
            "ORD43",
            "ORD44",
            "IZWEK",
            "HERST",
            "MEINS",
            "FEINS",
            "INKEN",
            "FIAMT",
            "STADT",
            "ANLTP",
            "XUNTV",
            "XAKTIV",
            "LEAFI",
            "LEJAR",
            "LEPER",
            "LRYTH",
            "LMZIN",
            "LEANZ",
            "LETXT",
            "AIMMO",
            "GDLGRP",
            "XERWRT",
            "XANLGR",
            "XINVM",
            "LEART",
            "ABGSL"
        ],
        "fk": [
            "T006",
            "T087G",
            "T005",
            "T095A",
            "T092",
            "TGSB",
            "TZUN",
            "T087I",
            "T083L",
            "T001W",
            "T087",
            "T082A",
            "TKKAA",
            "LFA1",
            "T087U",
            "T097"
        ]
    },
    "T082A": {
        "f": [
            "MANDT",
            "FEGTB",
            "FELEI"
        ],
        "fk": []
    },
    "TKKAA": {
        "f": [
            "MANDT",
            "ABGSL",
            "SLERG",
            "SLAIB",
            "SLWIPI",
            "SLWIPP",
            "RFLG1",
            "RFLG2",
            "RFLG3",
            "RFLG4",
            "RFLG5"
        ],
        "fk": [
            "T000"
        ]
    },
    "T087U": {
        "f": [
            "MANDT",
            "ANLUE"
        ],
        "fk": [
            "T000"
        ]
    },
    "TZUN": {
        "f": [
            "ZUAWA",
            "NAME1",
            "OFFS1",
            "LENG1",
            "NAME2",
            "OFFS2",
            "LENG2",
            "NAME3",
            "OFFS3",
            "LENG3",
            "NAME4",
            "OFFS4",
            "LENG4",
            "FELD1",
            "FELD2",
            "FELD3",
            "FELD4"
        ],
        "fk": []
    },
    "T083L": {
        "f": [
            "MANDT",
            "LEART",
            "LETYP",
            "LBWASL",
            "LBLART",
            "LMWSTKZ",
            "LBSCHL",
            "LUMSKZ"
        ],
        "fk": [
            "T007A",
            "T003",
            "T000",
            "TBSL",
            "T074U",
            "TABW"
        ]
    },
    "TBSL": {
        "f": [
            "MANDT",
            "BSCHL",
            "SHKZG",
            "KOART",
            "XUMSW",
            "FAUS1",
            "XZAHL",
            "STBSL",
            "XSONU",
            "FAUS2"
        ],
        "fk": [
            "T000"
        ]
    },
    "T074U": {
        "f": [
            "MANDT",
            "KOART",
            "UMSKZ",
            "UMSKS",
            "MERKP",
            "ZUMKZ",
            "KLIMP",
            "DIAMS"
        ],
        "fk": []
    },
    "TABW": {
        "f": [
            "MANDT",
            "BWASL",
            "BWAGRP",
            "XVERGA",
            "XAKTIV",
            "XDEAKT",
            "XABGMM",
            "XERLOS",
            "XAVERB",
            "XABUCH",
            "BWAKON",
            "XPRJKT",
            "ANSHKZ",
            "BWASLG",
            "BLART",
            "XABINV",
            "BWASLN",
            "GITTGR",
            "XABGWG",
            "XABIMM",
            "XUSBWA",
            "XUMBHI",
            "XIFREL",
            "XCOOBJ",
            "XCOPSP",
            "XAVERBN",
            "XZUGBR",
            "XUMJA",
            "RSN_CODE"
        ],
        "fk": [
            "TABWQ",
            "T003",
            "T856",
            "T000",
            "TABWG",
            "TABW"
        ]
    },
    "TABWG": {
        "f": [
            "MANDT",
            "BWAGRP",
            "PERGRP",
            "VZJSAL",
            "AWTFLD",
            "XZUGNE",
            "XZUGDA",
            "XANTEI",
            "GITCOL",
            "FLDNM",
            "XACLAS",
            "BWATYP",
            "XBNAFA",
            "XBSAFA",
            "XBAAFA",
            "XBMAFA",
            "VALID",
            "V_ACTIV",
            "SUBSTID",
            "S_ACTIV",
            "JVMAN"
        ],
        "fk": [
            "GB92",
            "GB93",
            "T000"
        ]
    },
    "GB93": {
        "f": [
            "MANDT",
            "VALID",
            "BOOLCLASS",
            "MSGID",
            "AUTHGR",
            "GBOPCREATE",
            "GBDTCREATE",
            "GBTMCREATE",
            "GBOPCHANGE",
            "GBDTCHANGE",
            "GBTMCHANGE",
            "INITEXIT",
            "MULTILINE"
        ],
        "fk": [
            "GB02",
            "T100A",
            "TBRG",
            "T000"
        ]
    },
    "T100A": {
        "f": [
            "ARBGB",
            "MASTERLANG",
            "APPLCLASS",
            "RESPUSER",
            "LASTUSER",
            "LDATE",
            "LTIME",
            "STEXT"
        ],
        "fk": [
            "T002"
        ]
    },
    "GB02": {
        "f": [
            "BOOLCLASS",
            "MSGID",
            "MULTILINE"
        ],
        "fk": [
            "T100A"
        ]
    },
    "GB92": {
        "f": [
            "MANDT",
            "SUBSTID",
            "BOOLCLASS",
            "SUBSCLASS",
            "EXIT",
            "AUTHGR",
            "GBOPCREATE",
            "GBDTCREATE",
            "GBTMCREATE",
            "GBOPCHANGE",
            "GBDTCHANGE",
            "GBTMCHANGE",
            "INITEXIT",
            "MULTILINE"
        ],
        "fk": [
            "GB02",
            "TBRG",
            "T000"
        ]
    },
    "T856": {
        "f": [
            "MANDT",
            "TRTYP",
            "TTGRP",
            "TTCFO",
            "SIGN",
            "TOIND",
            "SUMRU",
            "CFIND",
            "CYIND",
            "CYDBI",
            "TTRET"
        ],
        "fk": [
            "T000",
            "T856",
            "T856X"
        ]
    },
    "T856X": {
        "f": [
            "MANDT",
            "RWGRP",
            "SIGN",
            "SUMTG"
        ],
        "fk": [
            "T000"
        ]
    },
    "TABWQ": {
        "f": [
            "MANDT",
            "GITTGR"
        ],
        "fk": [
            "T000"
        ]
    },
    "T087G": {
        "f": [
            "MANDT",
            "GDLGRP"
        ],
        "fk": [
            "T000"
        ]
    },
    "T006": {
        "f": [
            "MANDT",
            "MSEHI",
            "KZEX3",
            "KZEX6",
            "ANDEC",
            "KZKEH",
            "KZWOB",
            "KZ1EH",
            "KZ2EH",
            "DIMID",
            "ZAEHL",
            "NENNR",
            "EXP10",
            "ADDKO",
            "EXPON",
            "DECAN",
            "ISOCODE",
            "PRIMARY",
            "TEMP_VALUE",
            "TEMP_UNIT",
            "FAMUNIT",
            "PRESS_VAL",
            "PRESS_UNIT"
        ],
        "fk": [
            "T006",
            "T006D",
            "T006I",
            "T000"
        ]
    },
    "T006I": {
        "f": [
            "CLIENT",
            "ISOCODE"
        ],
        "fk": []
    },
    "T006D": {
        "f": [
            "MANDT",
            "DIMID",
            "LENG",
            "MASS",
            "TIMEX",
            "ECURR",
            "TEMP",
            "MOLQU",
            "LIGHT",
            "MSSIE",
            "TEMP_DEP",
            "PRESS_DEP"
        ],
        "fk": [
            "T006",
            "T000"
        ]
    },
    "LFA1": {
        "f": [
            "MANDT",
            "LIFNR",
            "LAND1",
            "NAME1",
            "NAME2",
            "NAME3",
            "NAME4",
            "ORT01",
            "ORT02",
            "PFACH",
            "PSTL2",
            "PSTLZ",
            "REGIO",
            "SORTL",
            "STRAS",
            "ADRNR",
            "MCOD1",
            "MCOD2",
            "MCOD3",
            "ANRED",
            "BAHNS",
            "BBBNR",
            "BBSNR",
            "BEGRU",
            "BRSCH",
            "BUBKZ",
            "DATLT",
            "DTAMS",
            "DTAWS",
            "ERDAT",
            "ERNAM",
            "ESRNR",
            "KONZS",
            "KTOKK",
            "KUNNR",
            "LNRZA",
            "LOEVM",
            "SPERR",
            "SPERM",
            "SPRAS",
            "STCD1",
            "STCD2",
            "STKZA",
            "STKZU",
            "TELBX",
            "TELF1",
            "TELF2",
            "TELFX",
            "TELTX",
            "TELX1",
            "XCPDK",
            "XZEMP",
            "VBUND",
            "FISKN",
            "STCEG",
            "STKZN",
            "SPERQ",
            "GBORT",
            "GBDAT",
            "SEXKZ",
            "KRAUS",
            "REVDB",
            "QSSYS",
            "KTOCK",
            "PFORT",
            "WERKS",
            "LTSNA",
            "WERKR",
            "PLKAL",
            "DUEFL",
            "TXJCD",
            "SPERZ",
            "SCACD",
            "SFRGR",
            "LZONE",
            "XLFZA",
            "DLGRP",
            "FITYP",
            "STCDT",
            "REGSS",
            "ACTSS",
            "STCD3",
            "STCD4",
            "STCD5",
            "IPISP",
            "TAXBS",
            "PROFS",
            "STGDL",
            "EMNFR",
            "LFURL",
            "J_1KFREPRE",
            "J_1KFTBUS",
            "J_1KFTIND",
            "CONFS",
            "UPDAT",
            "UPTIM",
            "NODEL",
            "QSSYSDAT",
            "PODKZB",
            "FISKU",
            "STENR",
            "CARRIER_CONF",
            "MIN_COMP",
            "TERM_LI",
            "CRC_NUM",
            "RG",
            "EXP",
            "UF",
            "RGDATE",
            "RIC",
            "RNE",
            "RNEDATE",
            "CNAE",
            "LEGALNAT",
            "CRTN",
            "ICMSTAXPAY",
            "INDTYP",
            "TDT",
            "COMSIZE",
            "DECREGPC",
            "J_SC_CAPITAL",
            "J_SC_CURRENCY",
            "ALC",
            "PMT_OFFICE",
            "PPA_RELEVANT",
            "PSOFG",
            "PSOIS",
            "PSON1",
            "PSON2",
            "PSON3",
            "PSOVN",
            "PSOTL",
            "PSOHS",
            "PSOST",
            "ENTY_CD",
            "RES_CNTRY",
            "RES_REGION",
            "CCODE",
            "TRANSPORT_CHAIN",
            "STAGING_TIME",
            "SCHEDULING_TYPE",
            "SUBMI_RELEVANT"
        ],
        "fk": [
            "TSFG",
            "TQ04A",
            "TTXJ",
            "J_1BTDECREGPC",
            "TVFCD",
            "VTSGD",
            "T000",
            "KNA1",
            "T880",
            "TFACD",
            "J_1AFITP",
            "T005",
            "FMFGT_PO",
            "T002",
            "J_1AACT",
            "LFA1",
            "J_1BTCNAE",
            "PSO19",
            "TQ02B",
            "BUSTYPE",
            "TZONE",
            "WRF_PSCD_TCHAINH",
            "J_1ATODC",
            "J_1BTLEGALNAT",
            "INDUSTYPE",
            "TCURC",
            "J_1BTICMSTAXPAY",
            "FMFGT_ALC",
            "J_1BTINDTYP",
            "J_1BTTDT",
            "T005S",
            "T077K",
            "J_1BTCOMSIZE",
            "T016"
        ]
    },
    "KNA1": {
        "f": [
            "MANDT",
            "KUNNR",
            "LAND1",
            "NAME1",
            "NAME2",
            "ORT01",
            "PSTLZ",
            "REGIO",
            "SORTL",
            "STRAS",
            "TELF1",
            "TELFX",
            "XCPDK",
            "ADRNR",
            "MCOD1",
            "MCOD2",
            "MCOD3",
            "ANRED",
            "AUFSD",
            "BAHNE",
            "BAHNS",
            "BBBNR",
            "BBSNR",
            "BEGRU",
            "BRSCH",
            "BUBKZ",
            "DATLT",
            "ERDAT",
            "ERNAM",
            "EXABL",
            "FAKSD",
            "FISKN",
            "KNAZK",
            "KNRZA",
            "KONZS",
            "KTOKD",
            "KUKLA",
            "LIFNR",
            "LIFSD",
            "LOCCO",
            "LOEVM",
            "NAME3",
            "NAME4",
            "NIELS",
            "ORT02",
            "PFACH",
            "PSTL2",
            "COUNC",
            "CITYC",
            "RPMKR",
            "SPERR",
            "SPRAS",
            "STCD1",
            "STCD2",
            "STKZA",
            "STKZU",
            "TELBX",
            "TELF2",
            "TELTX",
            "TELX1",
            "LZONE",
            "XZEMP",
            "VBUND",
            "STCEG",
            "DEAR1",
            "DEAR2",
            "DEAR3",
            "DEAR4",
            "DEAR5",
            "GFORM",
            "BRAN1",
            "BRAN2",
            "BRAN3",
            "BRAN4",
            "BRAN5",
            "EKONT",
            "UMSAT",
            "UMJAH",
            "UWAER",
            "JMZAH",
            "JMJAH",
            "KATR1",
            "KATR2",
            "KATR3",
            "KATR4",
            "KATR5",
            "KATR6",
            "KATR7",
            "KATR8",
            "KATR9",
            "KATR10",
            "STKZN",
            "UMSA1",
            "TXJCD",
            "PERIV",
            "ABRVW",
            "INSPBYDEBI",
            "INSPATDEBI",
            "KTOCD",
            "PFORT",
            "WERKS",
            "DTAMS",
            "DTAWS",
            "DUEFL",
            "HZUOR",
            "SPERZ",
            "ETIKG",
            "CIVVE",
            "MILVE",
            "KDKG1",
            "KDKG2",
            "KDKG3",
            "KDKG4",
            "KDKG5",
            "XKNZA",
            "FITYP",
            "STCDT",
            "STCD3",
            "STCD4",
            "STCD5",
            "XICMS",
            "XXIPI",
            "XSUBT",
            "CFOPC",
            "TXLW1",
            "TXLW2",
            "CCC01",
            "CCC02",
            "CCC03",
            "CCC04",
            "CASSD",
            "KNURL",
            "J_1KFREPRE",
            "J_1KFTBUS",
            "J_1KFTIND",
            "CONFS",
            "UPDAT",
            "UPTIM",
            "NODEL",
            "DEAR6",
            "SUFRAMA",
            "RG",
            "EXP",
            "UF",
            "RGDATE",
            "RIC",
            "RNE",
            "RNEDATE",
            "CNAE",
            "LEGALNAT",
            "CRTN",
            "ICMSTAXPAY",
            "INDTYP",
            "TDT",
            "COMSIZE",
            "DECREGPC",
            "/VSO/R_PALHGT",
            "/VSO/R_PAL_UL",
            "/VSO/R_PK_MAT",
            "/VSO/R_MATPAL",
            "/VSO/R_I_NO_LYR",
            "/VSO/R_ONE_MAT",
            "/VSO/R_ONE_SORT",
            "/VSO/R_ULD_SIDE",
            "/VSO/R_LOAD_PREF",
            "/VSO/R_DPOINT",
            "/XLSO/CUSTOMER",
            "/XLSO/SYSID",
            "/XLSO/CLIENT",
            "/XLSO/PARTNER",
            "/XLSO/PREF_PAY",
            "ALC",
            "PMT_OFFICE",
            "FEE_SCHEDULE",
            "DUNS",
            "DUNS4",
            "PSOFG",
            "PSOIS",
            "PSON1",
            "PSON2",
            "PSON3",
            "PSOVN",
            "PSOTL",
            "PSOHS",
            "PSOST",
            "PSOO1",
            "PSOO2",
            "PSOO3",
            "PSOO4",
            "PSOO5",
            "OIDRC",
            "OID_POREQD",
            "OIPBL",
            "RES_CNTRY",
            "CCODE"
        ],
        "fk": [
            "T006",
            "TTXJ",
            "TVGF",
            "T001W",
            "T005G",
            "J_1BTDECREGPC",
            "TNLS",
            "VBUK",
            "T077D",
            "TVKGG",
            "TVK1",
            "T000",
            "KNA1",
            "TVAST",
            "T880",
            "T009",
            "TBRC",
            "TFACD",
            "TWEK",
            "TVK0",
            "J_1AFITP",
            "T005",
            "FMFGT_PO",
            "TVFS",
            "OIFSPBL",
            "TKUKL",
            "TVK4",
            "T002",
            "MARA",
            "LFA1",
            "J_1BTXSTG",
            "J_1BTCNAE",
            "TVK6",
            "TVK3",
            "TVK7",
            "PSO19",
            "BUSTYPE",
            "TZONE",
            "J_1BATL1",
            "TVK5",
            "TVLS",
            "J_1ATODC",
            "J_1BTLEGALNAT",
            "TVK9",
            "T005E",
            "OICDC",
            "INDUSTYPE",
            "TCURC",
            "J_1BTICMSTAXPAY",
            "FMFGT_ALC",
            "J_1BTINDTYP",
            "/VSO/R_DPOINT",
            "TVK2",
            "TVK8",
            "J_1BTTDT",
            "T005S",
            "TVLV",
            "J_1BTCOMSIZE",
            "J_1BATL2",
            "T016"
        ]
    },
    "TVK5": {
        "f": [
            "MANDT",
            "KATR5"
        ],
        "fk": [
            "T000"
        ]
    },
    "TZONE": {
        "f": [
            "MANDT",
            "LAND1",
            "ZONE1"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "TVK2": {
        "f": [
            "MANDT",
            "KATR2"
        ],
        "fk": [
            "T000"
        ]
    },
    "FMFGT_ALC": {
        "f": [
            "MANDT",
            "ALC",
            "INTERNAL_ALC"
        ],
        "fk": []
    },
    "J_1AFITP": {
        "f": [
            "MANDT",
            "KOART",
            "J_1AFITP"
        ],
        "fk": [
            "T000",
            "J_1AFITPV"
        ]
    },
    "TVK7": {
        "f": [
            "MANDT",
            "KATR7"
        ],
        "fk": [
            "T000"
        ]
    },
    "/VSO/R_DPOINT": {
        "f": [],
        "fk": []
    },
    "FMFGT_PO": {
        "f": [
            "MANDT",
            "PMT_OFFICE"
        ],
        "fk": []
    },
    "TVK1": {
        "f": [
            "MANDT",
            "KATR1"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVK3": {
        "f": [
            "MANDT",
            "KATR3"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVLV": {
        "f": [
            "MANDT",
            "ABRVW"
        ],
        "fk": []
    },
    "PSO19": {
        "f": [
            "MANDT",
            "PSOFG"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVK8": {
        "f": [
            "MANDT",
            "KATR8"
        ],
        "fk": [
            "T000"
        ]
    },
    "TNLS": {
        "f": [
            "MANDT",
            "NIELS"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVK6": {
        "f": [
            "MANDT",
            "KATR6"
        ],
        "fk": [
            "T000"
        ]
    },
    "J_1ATODC": {
        "f": [
            "MANDT",
            "J_1ATODC"
        ],
        "fk": [
            "T000"
        ]
    },
    "J_1BTXSTG": {
        "f": [
            "MANDT",
            "STGRP",
            "EXEMPT"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVGF": {
        "f": [
            "MANDT",
            "GFORM"
        ],
        "fk": [
            "T000"
        ]
    },
    "TKUKL": {
        "f": [
            "MANDT",
            "KUKLA"
        ],
        "fk": []
    },
    "VBUK": {
        "f": [
            "MANDT",
            "VBELN",
            "RFSTK",
            "RFGSK",
            "BESTK",
            "LFSTK",
            "LFGSK",
            "WBSTK",
            "FKSTK",
            "FKSAK",
            "BUCHK",
            "ABSTK",
            "GBSTK",
            "KOSTK",
            "LVSTK",
            "UVALS",
            "UVVLS",
            "UVFAS",
            "UVALL",
            "UVVLK",
            "UVFAK",
            "UVPRS",
            "VBTYP",
            "VBOBJ",
            "AEDAT",
            "FKIVK",
            "RELIK",
            "UVK01",
            "UVK02",
            "UVK03",
            "UVK04",
            "UVK05",
            "UVS01",
            "UVS02",
            "UVS03",
            "UVS04",
            "UVS05",
            "PKSTK",
            "CMPSA",
            "CMPSB",
            "CMPSC",
            "CMPSD",
            "CMPSE",
            "CMPSF",
            "CMPSG",
            "CMPSH",
            "CMPSI",
            "CMPSJ",
            "CMPSK",
            "CMPSL",
            "CMPS0",
            "CMPS1",
            "CMPS2",
            "CMGST",
            "TRSTA",
            "KOQUK",
            "COSTA",
            "SAPRL",
            "UVPAS",
            "UVPIS",
            "UVWAS",
            "UVPAK",
            "UVPIK",
            "UVWAK",
            "UVGEK",
            "CMPSM",
            "DCSTK",
            "VESTK",
            "VLSTK",
            "RRSTA",
            "BLOCK",
            "FSSTK",
            "LSSTK",
            "SPSTG",
            "PDSTK",
            "FMSTK",
            "MANEK",
            "SPE_TMPID",
            "HDALL",
            "HDALS",
            "CMPS_CM",
            "CMPS_TE",
            "VBTYP_EXT",
            "OIG_SSTSF",
            "OI_SHIP",
            "OIC_NXTINV"
        ],
        "fk": [
            "T000"
        ]
    },
    "T016": {
        "f": [
            "MANDT",
            "BRSCH"
        ],
        "fk": [
            "T000"
        ]
    },
    "MARA": {
        "f": [
            "MANDT",
            "MATNR",
            "ERSDA",
            "ERNAM",
            "LAEDA",
            "AENAM",
            "VPSTA",
            "PSTAT",
            "LVORM",
            "MTART",
            "MBRSH",
            "MATKL",
            "BISMT",
            "MEINS",
            "BSTME",
            "ZEINR",
            "ZEIAR",
            "ZEIVR",
            "ZEIFO",
            "AESZN",
            "BLATT",
            "BLANZ",
            "FERTH",
            "FORMT",
            "GROES",
            "WRKST",
            "NORMT",
            "LABOR",
            "EKWSL",
            "BRGEW",
            "NTGEW",
            "GEWEI",
            "VOLUM",
            "VOLEH",
            "BEHVO",
            "RAUBE",
            "TEMPB",
            "DISST",
            "TRAGR",
            "STOFF",
            "SPART",
            "KUNNR",
            "EANNR",
            "WESCH",
            "BWVOR",
            "BWSCL",
            "SAISO",
            "ETIAR",
            "ETIFO",
            "ENTAR",
            "EAN11",
            "NUMTP",
            "LAENG",
            "BREIT",
            "HOEHE",
            "MEABM",
            "PRDHA",
            "AEKLK",
            "CADKZ",
            "QMPUR",
            "ERGEW",
            "ERGEI",
            "ERVOL",
            "ERVOE",
            "GEWTO",
            "VOLTO",
            "VABME",
            "KZREV",
            "KZKFG",
            "XCHPF",
            "VHART",
            "FUELG",
            "STFAK",
            "MAGRV",
            "BEGRU",
            "DATAB",
            "LIQDT",
            "SAISJ",
            "PLGTP",
            "MLGUT",
            "EXTWG",
            "SATNR",
            "ATTYP",
            "KZKUP",
            "KZNFM",
            "PMATA",
            "MSTAE",
            "MSTAV",
            "MSTDE",
            "MSTDV",
            "TAKLV",
            "RBNRM",
            "MHDRZ",
            "MHDHB",
            "MHDLP",
            "INHME",
            "INHAL",
            "VPREH",
            "ETIAG",
            "INHBR",
            "CMETH",
            "CUOBF",
            "KZUMW",
            "KOSCH",
            "SPROF",
            "NRFHG",
            "MFRPN",
            "MFRNR",
            "BMATN",
            "MPROF",
            "KZWSM",
            "SAITY",
            "PROFL",
            "IHIVI",
            "ILOOS",
            "SERLV",
            "KZGVH",
            "XGCHP",
            "KZEFF",
            "COMPL",
            "IPRKZ",
            "RDMHD",
            "PRZUS",
            "MTPOS_MARA",
            "BFLME",
            "MATFI",
            "CMREL",
            "BBTYP",
            "SLED_BBD",
            "GTIN_VARIANT",
            "GENNR",
            "RMATP",
            "GDS_RELEVANT",
            "WEORA",
            "HUTYP_DFLT",
            "PILFERABLE",
            "WHSTC",
            "WHMATGR",
            "HNDLCODE",
            "HAZMAT",
            "HUTYP",
            "TARE_VAR",
            "MAXC",
            "MAXC_TOL",
            "MAXL",
            "MAXB",
            "MAXH",
            "MAXDIM_UOM",
            "HERKL",
            "MFRGR",
            "QQTIME",
            "QQTIMEUOM",
            "QGRP",
            "SERIAL",
            "PS_SMARTFORM",
            "LOGUNIT",
            "CWQREL",
            "CWQPROC",
            "CWQTOLGR",
            "ADPROF",
            "IPMIPPRODUCT",
            "ALLOW_PMAT_IGNO",
            "MEDIUM",
            "COMMODITY",
            "ANIMAL_ORIGIN",
            "TEXTILE_COMP_IND",
            "ANP",
            "/BEV1/LULEINH",
            "/BEV1/LULDEGRP",
            "/BEV1/NESTRUCCAT",
            "/CWM/XCWMAT",
            "/CWM/VALUM",
            "/CWM/TOLGR",
            "/CWM/TARA",
            "/CWM/TARUM",
            "/DSD/SL_TOLTYP",
            "/DSD/SV_CNT_GRP",
            "/DSD/VC_GROUP",
            "/VSO/R_TILT_IND",
            "/VSO/R_STACK_IND",
            "/VSO/R_BOT_IND",
            "/VSO/R_TOP_IND",
            "/VSO/R_STACK_NO",
            "/VSO/R_PAL_IND",
            "/VSO/R_PAL_OVR_D",
            "/VSO/R_PAL_OVR_W",
            "/VSO/R_PAL_B_HT",
            "/VSO/R_PAL_MIN_H",
            "/VSO/R_TOL_B_HT",
            "/VSO/R_NO_P_GVH",
            "/VSO/R_QUAN_UNIT",
            "/VSO/R_KZGVH_IND",
            "PACKCODE",
            "DG_PACK_STATUS",
            "MCOND",
            "RETDELC",
            "LOGLEV_RETO",
            "NSNID",
            "ADSPC_SPC",
            "IMATN",
            "PICNUM",
            "BSTAT",
            "COLOR_ATINN",
            "SIZE1_ATINN",
            "SIZE2_ATINN",
            "COLOR",
            "SIZE1",
            "SIZE2",
            "FREE_CHAR",
            "CARE_CODE",
            "BRAND_ID",
            "FIBER_CODE1",
            "FIBER_PART1",
            "FIBER_CODE2",
            "FIBER_PART2",
            "FIBER_CODE3",
            "FIBER_PART3",
            "FIBER_CODE4",
            "FIBER_PART4",
            "FIBER_CODE5",
            "FIBER_PART5",
            "FASHGRD",
            "COBJID",
            "COTYPE",
            "OIGROUPNAM",
            "OITRIND",
            "OIHMTXGR",
            "ZFDB_NDC",
            "ZSMX_CMATN",
            "ZSMX_FMLKZ",
            "ZSMX_KNSKZ",
            "ZSMX_VRTKZ"
        ],
        "fk": [
            "T006",
            "TQGRP",
            "TTGR",
            "T142",
            "WRF_FIBER_CODES",
            "T6WP4",
            "OIH2M_J1B",
            "TWEA",
            "T6WFG",
            "TSKM",
            "TWSPR",
            "T000",
            "TVMS",
            "/DSD/SV_CNTGR",
            "TCSCP_COMP_LVL",
            "TDG101",
            "WRFMATBSTAT",
            "TMFG",
            "TVEGR",
            "/BEV1/LUT906",
            "TBAC_PHYSCOMM",
            "/DSD/VC_GRP",
            "T005",
            "T141",
            "TDG41",
            "TWEW",
            "T190S",
            "TOIGAP",
            "TCWQPROC",
            "T6WSP",
            "T134",
            "T6WSA",
            "T024L",
            "MARA",
            "T6WP3",
            "CCUNC121",
            "V_KNA1WETT",
            "T137",
            "T372M",
            "LFA1",
            "TWHSTC",
            "TCWQTOLGR",
            "T144",
            "/CWM/TOLGROUP",
            "TNTP",
            "TWHMATGR",
            "MARM",
            "T179",
            "/DSD/SL_TGTYP",
            "T405",
            "WRF_BRANDS",
            "TPTM",
            "STXFADM",
            "T023",
            "TSPA",
            "MGEF",
            "TMPPF",
            "TVTY",
            "T6WP1",
            "TWPT",
            "T143",
            "J_1BTANP",
            "TMBW1",
            "THNDLCD",
            "TSERIAL",
            "THUTYP",
            "TAPROF",
            "T352B"
        ]
    },
    "T134": {
        "f": [
            "MANDT",
            "MTART",
            "MTREF",
            "MBREF",
            "FLREF",
            "NUMKI",
            "NUMKE",
            "ENVOP",
            "BSEXT",
            "BSINT",
            "PSTAT",
            "KKREF",
            "VPRSV",
            "KZVPR",
            "VMTPO",
            "EKALR",
            "KZGRP",
            "KZKFG",
            "BEGRU",
            "KZPRC",
            "KZPIP",
            "PRDRU",
            "ARANZ",
            "WMAKG",
            "IZUST",
            "ARDEL",
            "KZMPN",
            "MSTAE",
            "CCHIS",
            "CTYPE",
            "CLASS",
            "CHNEU",
            "VTYPE",
            "VNUMKI",
            "VNUMKE",
            "KZRAC"
        ],
        "fk": [
            "T141",
            "T130A",
            "TCLA",
            "MGVTYPE",
            "T025K",
            "TPTM"
        ]
    },
    "TCLA": {
        "f": [
            "MANDT",
            "KLART",
            "OBTAB",
            "SWOFL",
            "SMEFL",
            "DOKFL",
            "TXTFL",
            "DINFL",
            "STAND",
            "MFKLS",
            "TRACL",
            "VARKLART",
            "MULTOBJ",
            "KONFOBJ",
            "INTKLART",
            "AEBLGZUORD",
            "AEDIEZUORD",
            "MIGRATION",
            "HIERARCHIE",
            "AUSP_NEW",
            "EFFE_ACT",
            "EFFE_DATUM",
            "AEDIKZCLS",
            "AEDICLSCREATE",
            "AEDICLSCHANGE",
            "AEDICHGCRE",
            "AEDICLSFROMSTATU",
            "AEDIFROMSTATUS",
            "AUSP_GEN"
        ],
        "fk": [
            "TCLT",
            "T000"
        ]
    },
    "TCLT": {
        "f": [
            "MANDT",
            "OBTAB",
            "AKTIV",
            "SWOFL",
            "SMEFL",
            "DOKFL",
            "TXTFL",
            "DINFL",
            "GRUNDBILD",
            "DYNNR1",
            "DYNNR2",
            "DYNNR3",
            "DYNNR4",
            "VERWSTUE",
            "REDUN",
            "KONFIOBJID"
        ],
        "fk": [
            "TCLO",
            "T000"
        ]
    },
    "TCLO": {
        "f": [
            "OBTAB",
            "TCODE",
            "KEYF0",
            "PARID0",
            "KEYF1",
            "PARID1",
            "KEYF2",
            "PARID2",
            "KEYF3",
            "PARID3",
            "KEYF4",
            "PARID4",
            "KEYF5",
            "PARID5",
            "KEYF6",
            "PARID6",
            "KEYF7",
            "PARID7",
            "KEYF8",
            "PARID8",
            "KEYF9",
            "PARID9",
            "TEXTF",
            "FLAGK0",
            "FLAGK1",
            "FLAGK2",
            "FLAGK3",
            "FLAGK4",
            "FLAGK5",
            "FLAGK6",
            "FLAGK7",
            "FLAGK8",
            "FLAGK9",
            "TXTTAB",
            "KONFITAB0",
            "KONFITAB1",
            "KONFITAB2",
            "KONFITAB3",
            "KONFITAB4",
            "KONFITAB5",
            "KONFITAB6",
            "KONFITAB7",
            "KONFITAB8",
            "KONFITAB9"
        ],
        "fk": [
            "TSTC"
        ]
    },
    "TSTC": {
        "f": [
            "TCODE",
            "PGMNA",
            "DYPNO",
            "MENUE",
            "CINFO",
            "ARBGB"
        ],
        "fk": []
    },
    "T141": {
        "f": [
            "MANDT",
            "MMSTA",
            "DEINK",
            "DSTLK",
            "DSTLP",
            "DAPLA",
            "DPBED",
            "DDISP",
            "DFAPO",
            "DFAKO",
            "DINST",
            "DBEST",
            "DPROG",
            "DFHMI",
            "DQMPF",
            "DTBED",
            "DTAUF",
            "DERZK",
            "DLFPL",
            "DLOCK",
            "AUPRF",
            "JSPPP",
            "JSPPO",
            "JSPR2P",
            "JSPRPO"
        ],
        "fk": [
            "TPRO"
        ]
    },
    "TPRO": {
        "f": [
            "MANDT",
            "UDDMODL",
            "AUPRF"
        ],
        "fk": [
            "TPRBO",
            "T000"
        ]
    },
    "TPRBO": {
        "f": [
            "MANDT",
            "UDDMODL"
        ],
        "fk": [
            "TOJTB"
        ]
    },
    "TOJTB": {
        "f": [
            "NAME",
            "ACTIVE",
            "ACTIVELANG",
            "PARENT",
            "PROGNAME",
            "EDITELEM",
            "EPRIMETHOD",
            "EPRIATTRIB",
            "APPLIC",
            "NOCLIENT",
            "CREA_USER",
            "CREA_DATE",
            "CREA_TIME",
            "CREA_REL",
            "CHAN_USER",
            "CHAN_DATE",
            "CHAN_TIME",
            "CHAN_REL",
            "VERSION",
            "ACTV_USER",
            "ACTV_DATE",
            "ACTV_TIME",
            "TRANSNUM",
            "CCHILDREN",
            "WINHLPFILE",
            "WINHLPIND",
            "MAXHLPIND",
            "CLSID",
            "CLSID_OLB",
            "OBJTYPECLS",
            "UDMENTID",
            "AGGREGTYPE",
            "OWNOBJTYPE",
            "OWNHANDLE",
            "OBJCLASS",
            "KEYLENGTH",
            "MODELONLY",
            "OBSOLETE",
            "REL_USER",
            "REL_DATE",
            "REL_REL"
        ],
        "fk": [
            "TRDIR",
            "E070",
            "TOJTB",
            "TAPLP",
            "DM40L"
        ]
    },
    "E070": {
        "f": [
            "TRKORR",
            "TRFUNCTION",
            "TRSTATUS",
            "TARSYSTEM",
            "KORRDEV",
            "AS4USER",
            "AS4DATE",
            "AS4TIME",
            "STRKORR"
        ],
        "fk": [
            "E070"
        ]
    },
    "TAPLP": {
        "f": [
            "APPL",
            "KTEXT"
        ],
        "fk": []
    },
    "DM40L": {
        "f": [
            "DMOID",
            "AS4LOCAL",
            "REF_ENTID",
            "REF_OBJECT",
            "REF_CLUST",
            "FLG_DEF",
            "FLG_COMPL",
            "FLG_FRAME",
            "FLG_CUST",
            "FLG_BUSINS",
            "OBJTYP",
            "COLORTYPE",
            "FSTUSER",
            "FSTDATE",
            "FSTTIME",
            "LSTUSER",
            "LSTDATE",
            "LSTTIME",
            "LOESCHZ",
            "FCTR_ID"
        ],
        "fk": [
            "DM40L",
            "DM48L",
            "DF14L",
            "DM02L"
        ]
    },
    "DM48L": {
        "f": [
            "CLUID",
            "AS4LOCAL",
            "FLG_DEF",
            "COLORTYPE",
            "FSTUSER",
            "FSTDATE",
            "FSTTIME",
            "LSTUSER",
            "LSTDATE",
            "LSTTIME",
            "LOESCHZ"
        ],
        "fk": []
    },
    "DM02L": {
        "f": [
            "ENTID",
            "AS4LOCAL",
            "REF_CLUST",
            "FLG_DEF",
            "FLG_COM",
            "FLG_EXA",
            "FLG_VAR",
            "FLG_VIEW",
            "ZEIT",
            "ZEINHT",
            "FLG_CUST",
            "FSTUSER",
            "FSTDATE",
            "FSTTIME",
            "LSTUSER",
            "LSTDATE",
            "LSTTIME",
            "LOESCHZ"
        ],
        "fk": [
            "DM48L"
        ]
    },
    "DF14L": {
        "f": [
            "FCTR_ID",
            "AS4LOCAL",
            "FSTUSER",
            "FSTDATE",
            "FSTTIME",
            "LSTUSER",
            "LSTDATE",
            "LSTTIME",
            "RELE",
            "LSTRELE",
            "ARIID",
            "PS_POSID",
            "XREF",
            "CUSTASS",
            "ALE_AGGR",
            "DESKTOP",
            "WWW",
            "RELEASED",
            "INCOMPLETE",
            "SYNCH",
            "VISIBLE",
            "TSTAMP",
            "UNAME1",
            "UNAME2",
            "SELECTABLE"
        ],
        "fk": [
            "DF14L"
        ]
    },
    "T025K": {
        "f": [
            "MANDT",
            "KKREF"
        ],
        "fk": [
            "T000"
        ]
    },
    "T130A": {
        "f": [
            "MANDT",
            "FLREF",
            "FAUSW"
        ],
        "fk": []
    },
    "MGVTYPE": {
        "f": [
            "MANDT",
            "VTYPE",
            "LAEDA",
            "LAETI",
            "AENAM",
            "ASTAT",
            "VTMDT",
            "VTSYS",
            "LVORM"
        ],
        "fk": [
            "T000"
        ]
    },
    "TPTM": {
        "f": [
            "MANDT",
            "MTPOS"
        ],
        "fk": []
    },
    "MGEF": {
        "f": [
            "MANDT",
            "STOFF",
            "REGKZ",
            "LAGKL",
            "WGFKL",
            "WGKKZ",
            "GFVM1",
            "GFVM2",
            "GFVM3",
            "GFVM4",
            "GFVM5",
            "GFVM6",
            "GFVM7",
            "GFVM8",
            "SFNR1",
            "SFNR2",
            "SFNR3",
            "SFNR4",
            "SFKO1",
            "SFKO2",
            "SFKO3",
            "SFKO4",
            "FLAPU",
            "SIDNR",
            "SIVAR",
            "SIVER",
            "LGFVM",
            "AGGRE",
            "VBFKL",
            "STOFT",
            "STOKL"
        ],
        "fk": [
            "T646G",
            "T646R",
            "T646L",
            "T646V",
            "T646A",
            "T023"
        ]
    },
    "T646G": {
        "f": [
            "MANDT",
            "GEFVM"
        ],
        "fk": []
    },
    "T646V": {
        "f": [
            "MANDT",
            "LGFVM"
        ],
        "fk": []
    },
    "T646L": {
        "f": [
            "MANDT",
            "LAGKL"
        ],
        "fk": []
    },
    "T646R": {
        "f": [
            "MANDT",
            "REGKZ"
        ],
        "fk": []
    },
    "T023": {
        "f": [
            "MANDT",
            "MATKL",
            "SPART",
            "LREF3",
            "WWGDA",
            "WWGPA",
            "ABTNR",
            "BEGRU",
            "GEWEI",
            "J_1BNBM",
            "BKLAS",
            "EKWSL",
            "ANLKL",
            "DEF_SCHDSC",
            "PRICE_GROUP"
        ],
        "fk": [
            "T006",
            "T405",
            "T604F",
            "ANKA",
            "MARA",
            "T025",
            "T000",
            "TSPA",
            "TSAB"
        ]
    },
    "TSAB": {
        "f": [
            "MANDT",
            "ABTNR",
            "BU_ABTNR"
        ],
        "fk": [
            "TB910",
            "T000"
        ]
    },
    "TB910": {
        "f": [
            "CLIENT",
            "ABTNR"
        ],
        "fk": [
            "T000"
        ]
    },
    "T025": {
        "f": [
            "MANDT",
            "BKLAS",
            "KKREF"
        ],
        "fk": [
            "T025K"
        ]
    },
    "T405": {
        "f": [
            "MANDT",
            "EKWSL",
            "MAHN1",
            "MAHN2",
            "MAHN3",
            "UNTTO",
            "UEBTO",
            "UEBTK",
            "EVERS",
            "KZABS",
            "WEPRZ",
            "WELFZ"
        ],
        "fk": [
            "T027A"
        ]
    },
    "T027A": {
        "f": [
            "MANDT",
            "EVERS",
            "EVDRU",
            "IVERS"
        ],
        "fk": [
            "T000"
        ]
    },
    "TSPA": {
        "f": [
            "MANDT",
            "SPART"
        ],
        "fk": []
    },
    "T604F": {
        "f": [
            "MANDT",
            "LAND1",
            "STEUC"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "T646A": {
        "f": [
            "MANDT",
            "AGGRE"
        ],
        "fk": []
    },
    "T144": {
        "f": [
            "MANDT",
            "BEHVO"
        ],
        "fk": []
    },
    "T6WP4": {
        "f": [
            "MANDT",
            "ETIFO"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVEGR": {
        "f": [
            "MANDT",
            "MAGRV"
        ],
        "fk": [
            "T000"
        ]
    },
    "TQGRP": {
        "f": [
            "MANDT",
            "QGRP"
        ],
        "fk": [
            "T000"
        ]
    },
    "TSERIAL": {
        "f": [
            "MANDT",
            "SERIAL",
            "PREFIX",
            "NR_OBJECT",
            "NR_INTERVAL",
            "NUMBERING",
            "STOCK",
            "UNIT"
        ],
        "fk": [
            "T006",
            "NRIV",
            "TNRO",
            "T000"
        ]
    },
    "J_1BTANP": {
        "f": [
            "MANDT",
            "J_1BANP"
        ],
        "fk": []
    },
    "V_KNA1WETT": {
        "f": [
            "MANDT",
            "KUNNR",
            "NAME1"
        ],
        "fk": [
            "T000"
        ]
    },
    "TWSPR": {
        "f": [
            "MANDT",
            "WRKST"
        ],
        "fk": []
    },
    "STXFADM": {
        "f": [
            "FORMNAME",
            "MASTERLANG",
            "DEVCLASS",
            "VERSION",
            "FIRSTUSER",
            "FIRSTDATE",
            "FIRSTTIME",
            "LASTUSER",
            "LASTDATE",
            "LASTTIME",
            "FORMTYPE"
        ],
        "fk": []
    },
    "T372M": {
        "f": [
            "MANDT",
            "MEDIU",
            "MATNR",
            "GHO_RELEVANT",
            "LINK_COLOR",
            "SM_RELEVANT",
            "RECLASSIFY_RELEVANT"
        ],
        "fk": [
            "MARA",
            "T000"
        ]
    },
    "T179": {
        "f": [
            "MANDT",
            "PRODH",
            "STUFE"
        ],
        "fk": [
            "T000"
        ]
    },
    "/DSD/VC_GRP": {
        "f": [],
        "fk": []
    },
    "TWEW": {
        "f": [
            "MANDT",
            "EXTWG"
        ],
        "fk": [
            "T000"
        ]
    },
    "TWPT": {
        "f": [
            "MANDT",
            "PLGTP"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCWQPROC": {
        "f": [
            "MANDT",
            "CWQPROC",
            "CWQWCMEAS",
            "CWQGRGIMEAS"
        ],
        "fk": []
    },
    "T352B": {
        "f": [
            "MANDT",
            "RBNR",
            "FEGRP",
            "URGRP",
            "MAGRP",
            "MFGRP",
            "OTGRP",
            "FRKLS",
            "FRKLSKZ",
            "QMTYP",
            "UNITFLBEW",
            "DECIMALS",
            "MSGTP"
        ],
        "fk": [
            "T006",
            "TQ8T",
            "T000"
        ]
    },
    "TQ8T": {
        "f": [
            "MANDT",
            "QMTYP",
            "FEKAT",
            "URKAT",
            "MAKAT",
            "MFKAT",
            "OTKAT",
            "KLAKT",
            "ARTPR",
            "KLART",
            "STSMA",
            "QMELT",
            "QMSMT",
            "CUA_FBS",
            "AEKNZ"
        ],
        "fk": [
            "TJ20",
            "TJ03",
            "TFDIR",
            "TCLA",
            "T000",
            "T356A",
            "TQ15"
        ]
    },
    "TQ15": {
        "f": [
            "MANDT",
            "KATALOGART",
            "KAM",
            "KAMB",
            "ERSTELLER",
            "E_DATUM",
            "AENDERER",
            "A_DATUM",
            "HIST",
            "QCATFOA"
        ],
        "fk": []
    },
    "TJ03": {
        "f": [
            "OBTYP",
            "AGSUBSCR",
            "NRSUBSCR",
            "NOSMA",
            "SVEXT",
            "SNUMB",
            "ANUMB",
            "FNAME",
            "OBJINFO"
        ],
        "fk": [
            "TFDIR"
        ]
    },
    "T356A": {
        "f": [
            "MANDT",
            "ARTPR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCSCP_COMP_LVL": {
        "f": [
            "MANDT",
            "COMP_LEVEL",
            "HIERARCHY"
        ],
        "fk": [
            "T000"
        ]
    },
    "TWHMATGR": {
        "f": [
            "MANDT",
            "WHMATGR"
        ],
        "fk": [
            "T000"
        ]
    },
    "T142": {
        "f": [
            "MANDT",
            "RAUBE"
        ],
        "fk": []
    },
    "/CWM/TOLGROUP": {
        "f": [],
        "fk": []
    },
    "OIH2M_J1B": {
        "f": [
            "MANDT",
            "OIHMTXGR",
            "OIHMTXGRT",
            "OIHPTYP",
            "OIHMIXAC",
            "OIHCV80",
            "OIHCV03",
            "OIHNOCON",
            "OIHMIXST",
            "OIHFUELGAS",
            "TAXTYPE",
            "OIHICMSP",
            "OIHSURCHARGE"
        ],
        "fk": []
    },
    "T137": {
        "f": [
            "MANDT",
            "MBRSH",
            "BRARE",
            "BBREF",
            "FLREF"
        ],
        "fk": [
            "T130A"
        ]
    },
    "CCUNC121": {
        "f": [
            "MANDT",
            "LWDG",
            "PACKCODE",
            "MAX_VOLUME_PACK",
            "U_MAX_VOL_PACK",
            "MAX_QUANT_PACK",
            "U_MAX_QUANT_PACK"
        ],
        "fk": [
            "THM063",
            "T000"
        ]
    },
    "THM063": {
        "f": [
            "MANDT",
            "LWDG",
            "RVLID",
            "MOT",
            "LWDGN",
            "SLSTID",
            "ORD",
            "ESTCAT",
            "IDLID",
            "DCTRY",
            "PCTRY"
        ],
        "fk": [
            "TCG11",
            "TCG81",
            "T000",
            "TCG26",
            "THM151",
            "TCG91"
        ]
    },
    "TCG91": {
        "f": [
            "MANDT",
            "RVLID",
            "RVLTYPE"
        ],
        "fk": [
            "TCG89",
            "T000"
        ]
    },
    "TCG89": {
        "f": [
            "MANDT",
            "RVLTYPE",
            "CHECKFKT",
            "F4TABLE",
            "F4FIELD",
            "OTHERS",
            "AUTHFLG",
            "REGIONFLG",
            "DGREGFLG"
        ],
        "fk": [
            "DD02L",
            "DD03L",
            "T000"
        ]
    },
    "DD02L": {
        "f": [
            "TABNAME",
            "AS4LOCAL",
            "AS4VERS",
            "TABCLASS",
            "SQLTAB",
            "DATMIN",
            "DATMAX",
            "DATAVG",
            "CLIDEP",
            "BUFFERED",
            "COMPRFLAG",
            "LANGDEP",
            "ACTFLAG",
            "APPLCLASS",
            "AUTHCLASS",
            "AS4USER",
            "AS4DATE",
            "AS4TIME",
            "MASTERLANG",
            "MAINFLAG",
            "CONTFLAG",
            "RESERVETAB",
            "GLOBALFLAG",
            "PROZPUFF",
            "VIEWCLASS",
            "VIEWGRANT",
            "MULTIPLEX",
            "SHLPEXI",
            "PROXYTYPE",
            "EXCLASS",
            "WRONGCL",
            "ALWAYSTRP"
        ],
        "fk": []
    },
    "DD03L": {
        "f": [
            "TABNAME",
            "FIELDNAME",
            "AS4LOCAL",
            "AS4VERS",
            "POSITION",
            "KEYFLAG",
            "MANDATORY",
            "ROLLNAME",
            "CHECKTABLE",
            "ADMINFIELD",
            "INTTYPE",
            "INTLEN",
            "REFTABLE",
            "PRECFIELD",
            "REFFIELD",
            "CONROUT",
            "NOTNULL",
            "DATATYPE",
            "LENG",
            "DECIMALS",
            "DOMNAME",
            "SHLPORIGIN",
            "TABLETYPE",
            "DEPTH",
            "COMPTYPE",
            "REFTYPE",
            "LANGUFLAG",
            "DBPOSITION",
            "ANONYMOUS",
            "OUTPUTSTYLE"
        ],
        "fk": [
            "DD02L",
            "DD01L",
            "DD04L"
        ]
    },
    "DD04L": {
        "f": [
            "ROLLNAME",
            "AS4LOCAL",
            "AS4VERS",
            "DOMNAME",
            "ROUTPUTLEN",
            "MEMORYID",
            "LOGFLAG",
            "HEADLEN",
            "SCRLEN1",
            "SCRLEN2",
            "SCRLEN3",
            "ACTFLAG",
            "APPLCLASS",
            "AUTHCLASS",
            "AS4USER",
            "AS4DATE",
            "AS4TIME",
            "DTELMASTER",
            "RESERVEDTE",
            "DTELGLOBAL",
            "SHLPNAME",
            "SHLPFIELD",
            "DEFFDNAME",
            "DATATYPE",
            "LENG",
            "DECIMALS",
            "OUTPUTLEN",
            "LOWERCASE",
            "SIGNFLAG",
            "CONVEXIT",
            "VALEXI",
            "ENTITYTAB",
            "REFKIND",
            "REFTYPE",
            "PROXYTYPE",
            "LTRFLDDIS",
            "BIDICTRLC",
            "NOHISTORY"
        ],
        "fk": [
            "DD02L",
            "TPARA",
            "DD01L"
        ]
    },
    "TPARA": {
        "f": [
            "PARAMID",
            "PARTEXT"
        ],
        "fk": []
    },
    "DD01L": {
        "f": [
            "DOMNAME",
            "AS4LOCAL",
            "AS4VERS",
            "DATATYPE",
            "LENG",
            "OUTPUTLEN",
            "DECIMALS",
            "LOWERCASE",
            "SIGNFLAG",
            "LANGFLAG",
            "VALEXI",
            "ENTITYTAB",
            "CONVEXIT",
            "MASK",
            "MASKLEN",
            "ACTFLAG",
            "APPLCLASS",
            "AUTHCLASS",
            "AS4USER",
            "AS4DATE",
            "AS4TIME",
            "DOMMASTER",
            "RESERVEDOM",
            "DOMGLOBAL",
            "APPENDNAME",
            "APPEXIST",
            "PROXYTYPE",
            "OUTPUTSTYLE",
            "AMPMFORMAT"
        ],
        "fk": [
            "DD02L"
        ]
    },
    "TCG11": {
        "f": [
            "MANDT",
            "ESTCAT",
            "ESTTYPE",
            "REM",
            "CLS",
            "CLSPOS",
            "ECCOFLG",
            "ECINFLG",
            "ECUPFLG",
            "USEPROF",
            "IDLID",
            "CLVANAM",
            "CLVPNAM",
            "USEPRDEF",
            "ENTRYF",
            "FLGSINST",
            "FLGINT",
            "FLGINV"
        ],
        "fk": [
            "TFDIR",
            "TCG96",
            "T000",
            "KLAH",
            "TCG26",
            "TCG01"
        ]
    },
    "TCG26": {
        "f": [
            "MANDT",
            "IDLID"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCG96": {
        "f": [
            "MANDT",
            "USEPROF"
        ],
        "fk": [
            "T000"
        ]
    },
    "KLAH": {
        "f": [
            "MANDT",
            "CLINT",
            "KLART",
            "CLASS",
            "STATU",
            "KLAGR",
            "BGRSE",
            "BGRKL",
            "BGRKP",
            "ANAME",
            "ADATU",
            "VNAME",
            "VDATU",
            "VONDT",
            "BISDT",
            "ANZUO",
            "PRAUS",
            "SICHT",
            "DOKNR",
            "DOKAR",
            "DOKTL",
            "DOKVR",
            "DINKZ",
            "NNORM",
            "NORMN",
            "NORMB",
            "NRMT1",
            "NRMT2",
            "AUSGD",
            "VERSD",
            "VERSI",
            "LEIST",
            "VERWE",
            "SPART",
            "LREF3",
            "WWSKZ",
            "WWSSI",
            "POTPR",
            "CLOBK",
            "CLMUL",
            "CVIEW",
            "DISST",
            "MEINS",
            "CLMOD",
            "VWSTL",
            "VWPLA",
            "CLALT",
            "LBREI",
            "BNAME",
            "MAXBL",
            "KNOBJ",
            "LOCLA",
            "KATALOG",
            "KDOKAZ",
            "GENRKZ"
        ],
        "fk": [
            "T006",
            "TCLU",
            "TCLA",
            "T000",
            "TCLG"
        ]
    },
    "TCLU": {
        "f": [
            "MANDT",
            "KLART",
            "STATUS",
            "KLPKZ",
            "KLFKZ",
            "SELKZ",
            "VSTAT",
            "DLOCK",
            "AUPRF",
            "CLAEDIMAND"
        ],
        "fk": [
            "TCLA",
            "T000"
        ]
    },
    "TCLG": {
        "f": [
            "MANDT",
            "KLAGR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCG01": {
        "f": [
            "ESTTYPE",
            "CLSCAT",
            "EPMNFLG",
            "EPRGFLG",
            "EPCLFLG",
            "EPCPFLG",
            "EPVAFLG",
            "TCFLG",
            "DGFLG",
            "EPDFFLG",
            "EPDRFLG",
            "EPDUFLG",
            "EPDSFLG",
            "HIFLG"
        ],
        "fk": [
            "TCLA"
        ]
    },
    "TCG81": {
        "f": [
            "MANDT",
            "SLSTID",
            "SLSTDIS",
            "SLSTDAT",
            "SLSTVER",
            "SLSTRES",
            "RVLID",
            "REM",
            "SLSTLAN",
            "SLSTSID",
            "SLSTSCH",
            "NEGATIVFLG"
        ],
        "fk": [
            "TCG91",
            "T000"
        ]
    },
    "THM151": {
        "f": [
            "MANDT",
            "MOT",
            "BASE_MOT"
        ],
        "fk": [
            "EHS_TDG151B",
            "T000"
        ]
    },
    "EHS_TDG151B": {
        "f": [
            "BASE_MOT"
        ],
        "fk": []
    },
    "TWEA": {
        "f": [
            "MANDT",
            "ARTGR"
        ],
        "fk": [
            "T000"
        ]
    },
    "T6WSA": {
        "f": [
            "MANDT",
            "SAITY"
        ],
        "fk": [
            "T000"
        ]
    },
    "T6WSP": {
        "f": [
            "MANDT",
            "SAISO",
            "TGVON",
            "TGBIS",
            "GRUKZ",
            "VLLIS",
            "NLLIS",
            "VLVKF",
            "NLVKF"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVTY": {
        "f": [
            "MANDT",
            "TRATY",
            "KAPPL",
            "KALSM",
            "KSCHL",
            "SORTF",
            "WERFD",
            "VELTP",
            "GRUVS",
            "NRVERG",
            "SSCC18",
            "INT_NKR",
            "EXT_NKR",
            "TARAVAR",
            "STSMA",
            "KZPGN"
        ],
        "fk": [
            "T683",
            "T685",
            "T000"
        ]
    },
    "T685": {
        "f": [
            "MANDT",
            "KVEWE",
            "KAPPL",
            "KSCHL",
            "KOZGF",
            "DATVO",
            "DTVOB",
            "J_3GPRAEND",
            "J_3GBUARTL",
            "J_3GBUARTB"
        ],
        "fk": [
            "T681Z",
            "T682",
            "T681V",
            "T000"
        ]
    },
    "T682": {
        "f": [
            "KVEWE",
            "KAPPL",
            "KOZGF",
            "KOZGV",
            "KZAKT",
            "KKMOD",
            "RPTSX",
            "MANDT",
            "SYPSY",
            "SYSID",
            "SAPRL",
            "EXT_COUNTER_USED"
        ],
        "fk": [
            "T681V",
            "T681A",
            "T000"
        ]
    },
    "T681Z": {
        "f": [
            "KVEWE",
            "KAPPL",
            "KFGRP",
            "KOPTB",
            "POSTB",
            "TITPX",
            "OJ_NAME",
            "OJ_NAME_PO",
            "POSTB_D",
            "KONLI_REP",
            "KSDAT",
            "USE_BUSOBJ"
        ],
        "fk": [
            "TOJTB",
            "T681V",
            "T681A"
        ]
    },
    "T6WP3": {
        "f": [
            "MANDT",
            "ETIAR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TSKM": {
        "f": [
            "MANDT",
            "TATYP",
            "TAXKM"
        ],
        "fk": [
            "T685A",
            "T000"
        ]
    },
    "T685A": {
        "f": [
            "MANDT",
            "KAPPL",
            "KSCHL",
            "KRECH",
            "KZBZG",
            "KNTYP",
            "KONAU",
            "KMANU",
            "GRZGF",
            "GRLNR",
            "GRMEN",
            "GANZZ",
            "KGRPE",
            "KRELI",
            "KDUPL",
            "KRUEK",
            "KOUPD",
            "SOSTA",
            "KOFRS",
            "KALSM",
            "KZNEP",
            "KOAID",
            "KKOPF",
            "KPOSI",
            "KNEGA",
            "TXPRF",
            "KSTPR",
            "KAEND_BTR",
            "KAEND_WRT",
            "KAEND_UFK",
            "KAEND_RCH",
            "KAEND_LOE",
            "KAEND_MEH",
            "IDXUP",
            "RUKOR",
            "BOVER",
            "KPRDT",
            "STFKZ",
            "PRECH",
            "BNKWE",
            "AKTKO",
            "VKKAL",
            "VKOBL",
            "RKAPPL",
            "RKSCHL",
            "BERGL",
            "VHART",
            "RDIFA",
            "KFKIV",
            "KVARC",
            "KMENG",
            "MDFLG",
            "KTREL",
            "BNKTK",
            "KFRST",
            "TXTGR",
            "TDID",
            "KDELE",
            "KBFLAG",
            "PURP",
            "DTASRC",
            "IS_CPF_ENABLED",
            "OIGRNET",
            "OIINVCYC",
            "OIREPORT",
            "OIHEAD",
            "OIITEM",
            "OIERRHAN",
            "OIDATA",
            "OIA_SPLTIV",
            "OIRCONDCL",
            "OIU_EP",
            "WTY_KONDM",
            "WTY_KATEG"
        ],
        "fk": [
            "T006",
            "T685",
            "T681Z",
            "TVTY",
            "OIRE_KSCHL_CLA",
            "T686A",
            "T683",
            "T682",
            "TOIA10",
            "TTXG",
            "T000",
            "T681A",
            "TTXERN",
            "T178"
        ]
    },
    "TTXERN": {
        "f": [
            "MANDT",
            "TDOBJECT",
            "TXTOB",
            "TXTGR",
            "TDID",
            "LFDTX",
            "REDUP",
            "FEHGR",
            "TXPFL",
            "TXZUF"
        ],
        "fk": [
            "TTXOB",
            "TTXZ",
            "TVUV",
            "TTXID",
            "TTXG"
        ]
    },
    "TTXZ": {
        "f": [
            "MANDT",
            "TXZUF",
            "TXTOB"
        ],
        "fk": [
            "T000"
        ]
    },
    "TOIA10": {
        "f": [
            "MANDT",
            "OIINVCYC",
            "OICYCMAT",
            "OICYCDEL",
            "OICYCFEE"
        ],
        "fk": [
            "T000"
        ]
    },
    "T686A": {
        "f": [
            "MANDT",
            "KAPPL",
            "KZNEP"
        ],
        "fk": [
            "T000",
            "T681A"
        ]
    },
    "OIRE_KSCHL_CLA": {
        "f": [
            "OIRCONDCL"
        ],
        "fk": []
    },
    "T178": {
        "f": [
            "MANDT",
            "KONDM"
        ],
        "fk": []
    },
    "WRF_BRANDS": {
        "f": [
            "MANDT",
            "BRAND_ID",
            "BRAND_TYPE"
        ],
        "fk": []
    },
    "THUTYP": {
        "f": [
            "MANDT",
            "HUTYP"
        ],
        "fk": [
            "T000"
        ]
    },
    "TDG41": {
        "f": [
            "MANDT",
            "PROFL",
            "IDAGO",
            "IDGCH",
            "IDGPA",
            "IDGTP",
            "IDGSM",
            "IDCL",
            "IDCL7",
            "IDCLREPL"
        ],
        "fk": [
            "T000"
        ]
    },
    "TAPROF": {
        "f": [
            "MANDT",
            "ADPROF"
        ],
        "fk": []
    },
    "WRFMATBSTAT": {
        "f": [
            "MANDT",
            "BSTAT"
        ],
        "fk": [
            "T000"
        ]
    },
    "TMFG": {
        "f": [
            "MANDT",
            "MFRGR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCWQTOLGR": {
        "f": [
            "MANDT",
            "CWQTOLGR",
            "TOLWLO",
            "TOLWHI",
            "TOLELO",
            "TOLEHI"
        ],
        "fk": []
    },
    "TBAC_PHYSCOMM": {
        "f": [
            "CLIENT",
            "COMMODITY",
            "UOM"
        ],
        "fk": [
            "T006",
            "T000"
        ]
    },
    "/DSD/SL_TGTYP": {
        "f": [],
        "fk": []
    },
    "T143": {
        "f": [
            "MANDT",
            "TEMPB"
        ],
        "fk": []
    },
    "T024L": {
        "f": [
            "MANDT",
            "LABOR"
        ],
        "fk": []
    },
    "TWHSTC": {
        "f": [
            "MANDT",
            "WHSTC"
        ],
        "fk": []
    },
    "TTGR": {
        "f": [
            "MANDT",
            "TRAGR"
        ],
        "fk": []
    },
    "T6WP1": {
        "f": [
            "MANDT",
            "BWVOR",
            "REAS1",
            "REAS2",
            "REAS3",
            "REAS4",
            "REAS5",
            "BEREC"
        ],
        "fk": [
            "T000"
        ]
    },
    "/DSD/SV_CNTGR": {
        "f": [],
        "fk": []
    },
    "WRF_FIBER_CODES": {
        "f": [
            "MANDT",
            "FIBER_CODE",
            "FIBER_CODE_ISO",
            "FIBER_CODE_TYPE",
            "FIBER_OTHERS_IND"
        ],
        "fk": []
    },
    "/BEV1/LUT906": {
        "f": [],
        "fk": []
    },
    "THNDLCD": {
        "f": [
            "MANDT",
            "HNDLCODE"
        ],
        "fk": [
            "T000"
        ]
    },
    "T6WFG": {
        "f": [
            "MANDT",
            "FASHGRD"
        ],
        "fk": [
            "T000"
        ]
    },
    "TDG101": {
        "f": [
            "MANDT",
            "DG_PACK_STATUS"
        ],
        "fk": [
            "T000"
        ]
    },
    "T190S": {
        "f": [
            "MANDT",
            "KOSCH",
            "KOMTH"
        ],
        "fk": [
            "T000"
        ]
    },
    "TNTP": {
        "f": [
            "MANDT",
            "NUMTP",
            "PRFZA",
            "NKOBJ",
            "NMKRS",
            "NMKRE",
            "PGEAN",
            "RZEAN",
            "ANEAN",
            "LNEAN"
        ],
        "fk": [
            "TNRO",
            "T000"
        ]
    },
    "MARM": {
        "f": [
            "MANDT",
            "MATNR",
            "MEINH",
            "UMREZ",
            "UMREN",
            "EANNR",
            "EAN11",
            "NUMTP",
            "LAENG",
            "BREIT",
            "HOEHE",
            "MEABM",
            "VOLUM",
            "VOLEH",
            "BRGEW",
            "GEWEI",
            "MESUB",
            "ATINN",
            "MESRT",
            "XFHDW",
            "XBEWW",
            "KZWSO",
            "MSEHI",
            "BFLME_MARM",
            "GTIN_VARIANT",
            "NEST_FTR",
            "MAX_STACK",
            "CAPAUSE",
            "TY2TQ",
            "/CWM/TY2TQ"
        ],
        "fk": [
            "T006",
            "TCHW2",
            "MARA",
            "T000",
            "TNTP"
        ]
    },
    "TCHW2": {
        "f": [
            "MANDT",
            "MSEHI",
            "XUMKQ",
            "KZTME",
            "ZAEHL",
            "NENNR",
            "EXP10",
            "DIMID",
            "REFME",
            "MEINS"
        ],
        "fk": [
            "T006",
            "T006D",
            "TCHW1",
            "T000"
        ]
    },
    "TCHW1": {
        "f": [
            "MANDT",
            "MEINH",
            "REFME"
        ],
        "fk": [
            "T006",
            "T000"
        ]
    },
    "TVMS": {
        "f": [
            "MANDT",
            "VMSTA",
            "SPVBA",
            "SPVBB",
            "SPVBC",
            "SPVBD",
            "SPVBE",
            "SPVBF",
            "SPVBG",
            "SPVBH",
            "SPVBI",
            "SPVBJ",
            "SPVBK",
            "SPVBL",
            "LIFSP",
            "WAUFT",
            "WREPL",
            "WSTOR",
            "JSPQP",
            "JSPOG",
            "JSPRP",
            "JSPIP"
        ],
        "fk": [
            "TVLS",
            "T000"
        ]
    },
    "TVLS": {
        "f": [
            "MANDT",
            "LIFSP",
            "SPELF",
            "SPEKO",
            "SPEWA",
            "SPEFT",
            "SPEBE",
            "SPEAU",
            "SPEDR",
            "SPEVI",
            "MBDIF"
        ],
        "fk": []
    },
    "TMPPF": {
        "f": [
            "MANDT",
            "MPROF",
            "MPNPF",
            "MPNCH",
            "MPINF",
            "MPQIN",
            "MPPRI",
            "MPAMP",
            "MPLIS",
            "MPBTX",
            "MPREV",
            "CKAMP",
            "NWQUOT",
            "MPNIM",
            "RESFFF"
        ],
        "fk": []
    },
    "TMBW1": {
        "f": [
            "MANDT",
            "BWSCL"
        ],
        "fk": [
            "T000"
        ]
    },
    "TOIGAP": {
        "f": [
            "CLIENT",
            "GROUPNAME"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVAST": {
        "f": [
            "MANDT",
            "SPRAS",
            "AUFSP",
            "VTEXT"
        ],
        "fk": [
            "T002",
            "T000"
        ]
    },
    "TWEK": {
        "f": [
            "MANDT",
            "KUNGR"
        ],
        "fk": [
            "T000"
        ]
    },
    "T880": {
        "f": [
            "MANDT",
            "RCOMP",
            "NAME1",
            "CNTRY",
            "NAME2",
            "LANGU",
            "STRET",
            "POBOX",
            "PSTLC",
            "CITY",
            "CURR",
            "MODCP",
            "GLSIP",
            "RESTA",
            "RFORM",
            "ZWEIG",
            "MCOMP",
            "MCLNT",
            "LCCOMP",
            "STRT2",
            "INDPO"
        ],
        "fk": [
            "T002",
            "T005",
            "TCURC",
            "T001"
        ]
    },
    "T005G": {
        "f": [
            "MANDT",
            "LAND1",
            "REGIO",
            "CITYC"
        ],
        "fk": [
            "T005S",
            "T005",
            "T000"
        ]
    },
    "TBRC": {
        "f": [
            "MANDT",
            "BRACO"
        ],
        "fk": [
            "T000"
        ]
    },
    "OICDC": {
        "f": [
            "MANDT",
            "OIDRC",
            "OIC_DRCTRY",
            "OIC_DRCREG",
            "OIMETIND",
            "OIWAP",
            "OISLF",
            "OIPSDRC",
            "ERDAT",
            "ERTIM",
            "ERNAM",
            "AEDAT",
            "AETIM",
            "AENAM"
        ],
        "fk": [
            "T005",
            "OICMI",
            "OICSL",
            "T005S",
            "T000",
            "OICWA",
            "OICDC"
        ]
    },
    "OICSL": {
        "f": [
            "MANDT",
            "OISLF"
        ],
        "fk": [
            "T000"
        ]
    },
    "OICWA": {
        "f": [
            "MANDT",
            "OIWAP"
        ],
        "fk": [
            "T000"
        ]
    },
    "OICMI": {
        "f": [
            "MANDT",
            "OIMETIND"
        ],
        "fk": [
            "T000"
        ]
    },
    "OIFSPBL": {
        "f": [
            "MANDT",
            "PBLNR",
            "NAME1",
            "A1_SGRNDB",
            "A1_UTILTP",
            "A1_GRTYP",
            "A1_GRQAL",
            "A1_GRFRM",
            "A1_GRGZS",
            "A1_DAKTB",
            "PBLTYP",
            "ADDRNUM",
            "ERDAT",
            "ERZEIT",
            "ERNAM",
            "AEDAT",
            "AEZEIT",
            "AENAM",
            "BLOIND",
            "DELIND",
            "BLCODE",
            "OBJNR",
            "BRAND",
            "LOCVALUE",
            "LOCVDIFF",
            "LOCAA",
            "LOCMP",
            "PCGROUP",
            "AUTGR",
            "VALGP",
            "BUKRS",
            "OIRIPGRP",
            "CONVGR",
            "LOGSYS",
            "TPLST",
            "TPLST_TXT",
            "LONGITUDE",
            "LATITUDE",
            "TIME_TO_ADD",
            "AVRG_STAYT",
            "KNOTE",
            "KNOTE_BEZ",
            "ROUTE",
            "TXROU",
            "R_CON_POINT",
            "R_ROUTE",
            "XCOOR",
            "YCOOR"
        ],
        "fk": [
            "TTDS",
            "OIFSBLCD",
            "OIRBPBLVALD",
            "OIRCTVKD",
            "OIRBBRAND",
            "TBDLS",
            "OIREVALGP",
            "TVKN",
            "OIRAPCG",
            "T001",
            "OIRBPBLVAL",
            "OIRBLAA",
            "T000",
            "TVRO",
            "OIRHCVGRDEFC",
            "OIFSMCADDR",
            "OIFSPBLT"
        ]
    },
    "OIFSMCADDR": {
        "f": [
            "MANDT",
            "PBLNR",
            "ADDRNUM",
            "DATE_FROM",
            "NATION"
        ],
        "fk": [
            "OIFSPBL",
            "T000",
            "ADRC"
        ]
    },
    "ADRC": {
        "f": [
            "CLIENT",
            "ADDRNUMBER",
            "DATE_FROM",
            "NATION",
            "DATE_TO",
            "TITLE",
            "NAME1",
            "NAME2",
            "NAME3",
            "NAME4",
            "NAME_TEXT",
            "NAME_CO",
            "CITY1",
            "CITY2",
            "CITY_CODE",
            "CITYP_CODE",
            "HOME_CITY",
            "CITYH_CODE",
            "CHCKSTATUS",
            "REGIOGROUP",
            "POST_CODE1",
            "POST_CODE2",
            "POST_CODE3",
            "PCODE1_EXT",
            "PCODE2_EXT",
            "PCODE3_EXT",
            "PO_BOX",
            "DONT_USE_P",
            "PO_BOX_NUM",
            "PO_BOX_LOC",
            "CITY_CODE2",
            "PO_BOX_REG",
            "PO_BOX_CTY",
            "POSTALAREA",
            "TRANSPZONE",
            "STREET",
            "DONT_USE_S",
            "STREETCODE",
            "STREETABBR",
            "HOUSE_NUM1",
            "HOUSE_NUM2",
            "HOUSE_NUM3",
            "STR_SUPPL1",
            "STR_SUPPL2",
            "STR_SUPPL3",
            "LOCATION",
            "BUILDING",
            "FLOOR",
            "ROOMNUMBER",
            "COUNTRY",
            "LANGU",
            "REGION",
            "ADDR_GROUP",
            "FLAGGROUPS",
            "PERS_ADDR",
            "SORT1",
            "SORT2",
            "SORT_PHN",
            "DEFLT_COMM",
            "TEL_NUMBER",
            "TEL_EXTENS",
            "FAX_NUMBER",
            "FAX_EXTENS",
            "FLAGCOMM2",
            "FLAGCOMM3",
            "FLAGCOMM4",
            "FLAGCOMM5",
            "FLAGCOMM6",
            "FLAGCOMM7",
            "FLAGCOMM8",
            "FLAGCOMM9",
            "FLAGCOMM10",
            "FLAGCOMM11",
            "FLAGCOMM12",
            "FLAGCOMM13",
            "ADDRORIGIN",
            "MC_NAME1",
            "MC_CITY1",
            "MC_STREET",
            "EXTENSION1",
            "EXTENSION2",
            "TIME_ZONE",
            "TAXJURCODE",
            "ADDRESS_ID",
            "LANGU_CREA",
            "ADRC_UUID",
            "UUID_BELATED",
            "ID_CATEGORY",
            "ADRC_ERR_STATUS",
            "PO_BOX_LOBBY",
            "DELI_SERV_TYPE",
            "DELI_SERV_NUMBER",
            "COUNTY_CODE",
            "COUNTY",
            "TOWNSHIP_CODE",
            "TOWNSHIP",
            "MC_COUNTY",
            "MC_TOWNSHIP"
        ],
        "fk": [
            "T005",
            "ADRSTRTYPE",
            "TTZZ",
            "TZONE",
            "TSAC",
            "ADRSTREET",
            "TSAD3",
            "T002",
            "ADRCITY",
            "ADDRC_DELI_SERV",
            "TSAD7",
            "T000",
            "ADRCITYPRT",
            "T005S",
            "ADRREGGRP",
            "TSAD6",
            "TSADV",
            "TSAD12"
        ]
    },
    "ADRSTREET": {
        "f": [
            "CLIENT",
            "COUNTRY",
            "STRT_CODE",
            "CITY_CODE",
            "CITYP_CODE",
            "STRTYPEAB",
            "COMMU_CODE",
            "REGIOGROUP",
            "TAXJURCODE"
        ],
        "fk": [
            "T005",
            "ADRSTRTYPE",
            "ADRCITY",
            "ADRREGGRP",
            "T000",
            "ADRCITYPRT"
        ]
    },
    "ADRSTRTYPE": {
        "f": [
            "CLIENT",
            "COUNTRY",
            "STRTYPEAB"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "ADRREGGRP": {
        "f": [
            "CLIENT",
            "REGIOGROUP"
        ],
        "fk": [
            "T000"
        ]
    },
    "ADRCITYPRT": {
        "f": [
            "CLIENT",
            "COUNTRY",
            "CITY_CODE",
            "CITYP_CODE",
            "POST_CODE",
            "CITY_PART",
            "COMMU_CODE"
        ],
        "fk": [
            "T005",
            "ADRCITY",
            "T000",
            "ADRPSTCODE"
        ]
    },
    "ADRCITY": {
        "f": [
            "CLIENT",
            "COUNTRY",
            "CITY_CODE",
            "COMMU_CODE",
            "FLAG_STRTS",
            "REGION",
            "TIME_ZONE",
            "TAXJURCODE",
            "TRANSPZONE",
            "DEF_LANGU",
            "REGIOGROUP",
            "CITY_CD_PS",
            "COUNTY_CODE",
            "TOWNSHIP_CODE"
        ],
        "fk": [
            "T005S",
            "T005",
            "T000"
        ]
    },
    "ADRPSTCODE": {
        "f": [
            "CLIENT",
            "COUNTRY",
            "POST_CODE",
            "FLAG_DELIV",
            "FLAG_POBOX",
            "FLAG_CUST",
            "FLAG_CSTGR"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "TSAD7": {
        "f": [
            "ADDR_GROUP",
            "MAINT_TYPE"
        ],
        "fk": []
    },
    "TSAC": {
        "f": [
            "COMM_TYPE",
            "COMM_TABLE",
            "COMM_USED",
            "PROCUREMENT_DOC",
            "COMM_ISO"
        ],
        "fk": []
    },
    "ADDRC_DELI_SERV": {
        "f": [
            "CLIENT",
            "DELI_SERV_TYPE",
            "DELI_SERV_TEXT"
        ],
        "fk": [
            "T000"
        ]
    },
    "TSAD12": {
        "f": [
            "CLIENT",
            "UNDELIVER"
        ],
        "fk": [
            "T000"
        ]
    },
    "TSADV": {
        "f": [
            "NATION"
        ],
        "fk": []
    },
    "TSAD6": {
        "f": [
            "CLIENT",
            "ORIGIN"
        ],
        "fk": [
            "T000"
        ]
    },
    "OIRHCVGRDEFC": {
        "f": [
            "MANDT",
            "CONVGR"
        ],
        "fk": [
            "T000"
        ]
    },
    "OIRAPCG": {
        "f": [
            "CLIENT",
            "PCGROUP"
        ],
        "fk": [
            "T000"
        ]
    },
    "OIRCTVKD": {
        "f": [
            "MANDT",
            "KALKS"
        ],
        "fk": []
    },
    "OIRBBRAND": {
        "f": [
            "MANDT",
            "BRANDID",
            "ICONID"
        ],
        "fk": [
            "T000"
        ]
    },
    "TTDS": {
        "f": [
            "MANDT",
            "TPLST",
            "FABKL",
            "ADRNR",
            "TPSID",
            "VTPARN",
            "VTPART",
            "KSCHL",
            "NKETP",
            "TRAEND",
            "STTRG",
            "TPSSF",
            "TPSTX1",
            "TPSTX2",
            "TPSTX3",
            "BUKRS",
            "STAGEW",
            "STAVOL",
            "STADIS",
            "STACUR"
        ],
        "fk": [
            "T006",
            "T685",
            "TCURC",
            "TQCOM",
            "T001",
            "T000",
            "TFACD"
        ]
    },
    "TQCOM": {
        "f": [
            "COMMN",
            "QUEID"
        ],
        "fk": []
    },
    "OIFSBLCD": {
        "f": [
            "MANDT",
            "BLCODE",
            "CLSAR",
            "DELFR",
            "CRENR",
            "ERDAT",
            "ERZEIT",
            "ERNAM",
            "AEDAT",
            "AEZEIT",
            "AENAM"
        ],
        "fk": [
            "T000"
        ]
    },
    "OIREVALGP": {
        "f": [
            "MANDT",
            "VALGP"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVRO": {
        "f": [
            "MANDT",
            "ROUTE",
            "TRAZT",
            "TRAZTD",
            "TDVZT",
            "TDVZTD",
            "TDVZND",
            "SPFBK",
            "EXPVZ",
            "TDIIX",
            "SPZST",
            "FAHZTD",
            "DISTZ",
            "MEDST",
            "VSART",
            "VSAVL",
            "VSANL",
            "TDLNR",
            "ROUTID",
            "TCTAB",
            "ALLOWED_TWGT",
            "ALLOWED_UOM",
            "OIG_GESZTD",
            "OIG_FAHZTD",
            "OIG_MEIZT"
        ],
        "fk": [
            "T006",
            "T173",
            "T618",
            "TTSTRSD",
            "T000",
            "LFA1",
            "TFACD"
        ]
    },
    "TTSTRSD": {
        "f": [
            "MANDT",
            "TSTRTYPE",
            "TSTREAMID",
            "CALENDARID",
            "SHIFTPROG",
            "CREATED",
            "CREATEDBY",
            "CHANGED",
            "CHANGEDBY",
            "GENERATE",
            "GENERATEBY"
        ],
        "fk": [
            "TTSTR",
            "TC38A",
            "T000",
            "USR02"
        ]
    },
    "TTSTR": {
        "f": [
            "MANDT",
            "TSTRTYPE",
            "TSTREAMID",
            "CALENDARID",
            "RELID",
            "HANDLE",
            "BUFFEROPT",
            "CALCOPT",
            "GENOPT",
            "FLAGCONTIN",
            "TZONE",
            "SCOPEGENFW",
            "SCOPEGENBW",
            "CALIDGEN",
            "FBGEN",
            "TBGEN",
            "FBDEL",
            "RUNTRELEAS",
            "FLAGEXTENT",
            "CREATED",
            "CREATEDBY",
            "CHANGED",
            "CHANGEDBY",
            "GENERATE",
            "GENERATEBY"
        ],
        "fk": [
            "TFDIR",
            "USR02",
            "DD02L",
            "T000",
            "TFACD",
            "TTZZ"
        ]
    },
    "TC38A": {
        "f": [
            "MANDT",
            "SCHGRUP",
            "SPROG",
            "SCHNR",
            "TPROG1",
            "TPROG2",
            "TPROG3",
            "TPROG4",
            "TPROG5",
            "TPROG6",
            "TPROG7"
        ],
        "fk": [
            "TC37A",
            "TC39A",
            "T000"
        ]
    },
    "TC39A": {
        "f": [
            "MANDT",
            "SCHGRUP"
        ],
        "fk": [
            "T000"
        ]
    },
    "TC37A": {
        "f": [
            "MANDT",
            "SCHGRUP",
            "KAPTPROG",
            "ENDDA",
            "BEGDA",
            "BEGZT",
            "ENDZT",
            "EINZT",
            "PAPLAN",
            "KW_PROFIL",
            "MOTPR",
            "TPROG",
            "VARIA",
            "HRENDDA"
        ],
        "fk": [
            "T318",
            "TC39A",
            "TC37P",
            "T000"
        ]
    },
    "T318": {
        "f": [
            "MANDT",
            "LGNUM",
            "KWPRO",
            "ERZEUG_ART",
            "KAP_BESCHR",
            "DUNKEL_VER",
            "MAXKOMMPOS",
            "MAXAUMETYP",
            "MAXVERHART",
            "MAXGEWICHT",
            "MAXVOLUMEN",
            "MAXZEIT"
        ],
        "fk": [
            "T000",
            "T300"
        ]
    },
    "T300": {
        "f": [
            "MANDT",
            "LGNUM",
            "REGKZ"
        ],
        "fk": [
            "T646R"
        ]
    },
    "TC37P": {
        "f": [
            "MANDT",
            "SCHGRUP",
            "PAPLAN",
            "PAUNR",
            "PAUBEG",
            "PAUEND",
            "STDAZ",
            "PADAUER"
        ],
        "fk": [
            "TC39A",
            "T000"
        ]
    },
    "T173": {
        "f": [
            "MANDT",
            "VSART",
            "VKTRA",
            "VSGRP"
        ],
        "fk": [
            "TVTR",
            "TVFCV"
        ]
    },
    "TVFCV": {
        "f": [
            "MANDT",
            "VSGRP"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVTR": {
        "f": [
            "MANDT",
            "VKTRA",
            "VKTRT",
            "OIJMTI"
        ],
        "fk": [
            "THM151",
            "T000"
        ]
    },
    "T618": {
        "f": [
            "MANDT",
            "LAND1",
            "EXPVZ"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "OIRBPBLVALD": {
        "f": [
            "MANDT",
            "LOCVDIFF"
        ],
        "fk": [
            "T000"
        ]
    },
    "OIRBLAA": {
        "f": [
            "MANDT",
            "RNBT",
            "LOCAA",
            "LOCAACTRY",
            "LOCREG",
            "LOCAREA",
            "LOCSAREA"
        ],
        "fk": [
            "T005",
            "OIRBREG",
            "OIRBAREA",
            "T000",
            "OIRARNBT",
            "OIRBSAREA"
        ]
    },
    "OIRBREG": {
        "f": [
            "MANDT",
            "REGCTRY",
            "LOCREGION"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "OIRBAREA": {
        "f": [
            "MANDT",
            "AREACTRY",
            "LOCAREA"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "OIRARNBT": {
        "f": [
            "MANDT",
            "RNBT",
            "KALVG",
            "APPBK",
            "APPMC",
            "APPCW",
            "APPNN",
            "ICONNAME",
            "RFCDEST_REM",
            "RFCDEST",
            "URL",
            "USE_HR_RETAIL",
            "ORGSTR_CHECK",
            "EXT_PRIC_TOOL"
        ],
        "fk": [
            "RFCDES",
            "OIRCTVKV",
            "T000"
        ]
    },
    "RFCDES": {
        "f": [
            "RFCDEST",
            "RFCTYPE",
            "RFCOPTIONS",
            "RFCOPTIONT",
            "RFCOPTIONU",
            "RFCOPTIONV",
            "RFCOPTION1",
            "RFCOPTION2",
            "RFCOPTION3",
            "RFCOPTION4",
            "RFCOPTION5",
            "RFCOPTION6",
            "RFCOPTION7",
            "RFCOPTION8",
            "RFCOPTION9",
            "RFCOPTIONA",
            "RFCOPTIONB"
        ],
        "fk": []
    },
    "OIRCTVKV": {
        "f": [
            "MANDT",
            "KALVG"
        ],
        "fk": []
    },
    "OIRBSAREA": {
        "f": [
            "MANDT",
            "SAREACTRY",
            "LOCSAREA"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "OIRBPBLVAL": {
        "f": [
            "MANDT",
            "LOCVALUE"
        ],
        "fk": [
            "T000"
        ]
    },
    "OIFSPBLT": {
        "f": [
            "MANDT",
            "PBLTYP",
            "NUMRI",
            "NUMRE",
            "FLAG1",
            "FLAG2",
            "FLAG3",
            "FLAG4",
            "ERDAT",
            "ERZEIT",
            "ERNAM",
            "AEDAT",
            "AEZEIT",
            "AENAM",
            "FLAG_COMP",
            "PLANIND",
            "REFIND",
            "ODINDO",
            "ODINDD"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVKN": {
        "f": [
            "MANDT",
            "KNOTE",
            "ADRNR",
            "GRENZ",
            "UMSCH",
            "FLUGH",
            "SEEHF",
            "BINHF",
            "BAHNH",
            "BAHNR",
            "STBNH",
            "EXBNH",
            "PABNH",
            "LABNH",
            "BAHNG",
            "STREKL",
            "ZOLLS",
            "SPFBK",
            "AUFZTD",
            "KUNNR",
            "KUNABL",
            "LIFNR",
            "VSTEL",
            "LSTEL",
            "WERKS",
            "LGORT",
            "LGNUM",
            "TOR"
        ],
        "fk": [
            "T615",
            "T001W",
            "T30B",
            "T000",
            "T300",
            "KNVA",
            "KNA1",
            "TVST",
            "TVLA",
            "T001L",
            "LFA1",
            "TFACD"
        ]
    },
    "TVST": {
        "f": [
            "MANDT",
            "VSTEL",
            "FABKL",
            "VTRZT",
            "ADRNR",
            "ALAND",
            "AZONE",
            "TXNAM_ADR",
            "TXNAM_KOP",
            "TXNAM_FUS",
            "TXNAM_GRU",
            "KSCHL",
            "SPRAS",
            "ANZAL",
            "VSZTP",
            "NACHA",
            "LAZBS",
            "RIZBS",
            "LAZZT",
            "RIZZT",
            "KOQUI",
            "KOMSU",
            "IMESS",
            "TXNAM_SDB",
            "ALW_SW",
            "LOADTG",
            "LOADTN",
            "PIPATG",
            "PIPATN",
            "TSTRID",
            "ROUNDG",
            "ROUNDN"
        ],
        "fk": [
            "T685",
            "T005",
            "TZONE",
            "T002",
            "TTSTRSD",
            "T000",
            "TFACD"
        ]
    },
    "T001L": {
        "f": [
            "MANDT",
            "WERKS",
            "LGORT",
            "LGOBE",
            "SPART",
            "XLONG",
            "XBUFX",
            "DISKZ",
            "XBLGO",
            "XRESS",
            "XHUPF",
            "PARLG",
            "VKORG",
            "VTWEG",
            "VSTEL",
            "LIFNR",
            "KUNNR",
            "MESBS",
            "MESST",
            "OIH_LICNO",
            "OIG_ITRFL",
            "OIB_TNKASSIGN"
        ],
        "fk": [
            "TVKO",
            "T001W",
            "MDG_BUS_SYS_TECH",
            "T000",
            "KNA1",
            "LFA1",
            "TVST",
            "TSPA",
            "TVTW"
        ]
    },
    "TVTW": {
        "f": [
            "MANDT",
            "VTWEG"
        ],
        "fk": []
    },
    "MDG_BUS_SYS_TECH": {
        "f": [
            "MANDT",
            "BUSINESS_SYSTEM",
            "BUS_SYS_ID",
            "LOGSYS",
            "RFCDEST",
            "FILE_PATH",
            "DEF_STORAGE_SERV",
            "UNICODE_SYSTEM",
            "UNICODE_CODE_PAG",
            "DISABLED"
        ],
        "fk": [
            "RFCDES",
            "TCP00",
            "TBDLS"
        ]
    },
    "TCP00": {
        "f": [
            "CPCODEPAGE",
            "CPCOMPANY",
            "CPENCODING",
            "CPBYTEIND",
            "CPEXTMETH",
            "CPID",
            "CPCOMMENT",
            "CPVERSION",
            "CPSUPEROF",
            "CPBASEDON",
            "CPNLSMAJOR",
            "CPNLSMINOR",
            "CPSOURCE",
            "CPINCLUDE1",
            "CPINCLUDE2",
            "CPINCLUDE3",
            "CPINCLUDE4",
            "CPISSYSTEM",
            "CPISPRINT",
            "CPISGUI",
            "CPISTOOL",
            "CPISINCL",
            "CPSTACKING",
            "SEGID"
        ],
        "fk": [
            "TCP05",
            "TCP00",
            "TCPSEG"
        ]
    },
    "TCPSEG": {
        "f": [
            "SEGID",
            "KIND",
            "GNAME",
            "CHARSET",
            "ESCHEMA"
        ],
        "fk": [
            "TCPCHARSET",
            "TCPSCHEMA"
        ]
    },
    "TCPCHARSET": {
        "f": [
            "CHARSET",
            "NAME",
            "CNTLKIND"
        ],
        "fk": []
    },
    "TCPSCHEMA": {
        "f": [
            "ESCHEMA",
            "NAME"
        ],
        "fk": []
    },
    "TCP05": {
        "f": [
            "CPCOMPANY",
            "CPCOMMENT"
        ],
        "fk": []
    },
    "TVKO": {
        "f": [
            "MANDT",
            "VKORG",
            "WAERS",
            "BUKRS",
            "ADRNR",
            "TXNAM_ADR",
            "TXNAM_KOP",
            "TXNAM_FUS",
            "TXNAM_GRU",
            "VKOAU",
            "KUNNR",
            "BOAVO",
            "VKOKL",
            "EKORG",
            "EKGRP",
            "LIFNR",
            "WERKS",
            "BSART",
            "BSTYP",
            "BWART",
            "LGORT",
            "TXNAM_SDB",
            "MWSKZ",
            "XSTCEG",
            "J_1ANUTIME",
            "MAXBI",
            "PLAUFZ",
            "PLAUEZ"
        ],
        "fk": [
            "T161",
            "T024E",
            "T007A",
            "TVKO",
            "TCURC",
            "T001W",
            "T156",
            "T001",
            "KNA1",
            "LFA1",
            "T001L",
            "T024",
            "TFACD"
        ]
    },
    "T161": {
        "f": [
            "MANDT",
            "BSTYP",
            "BSART",
            "BSAKZ",
            "PINCR",
            "NUMKI",
            "NUMKE",
            "BREFN",
            "REFBA",
            "ABVOR",
            "STAFO",
            "UPINC",
            "STAKO",
            "PARGR",
            "NUMKA",
            "HITYP",
            "LPHIS",
            "GSFRG",
            "VARIANTE",
            "SHENQ",
            "KZALE",
            "ABGEBOT",
            "KORNR",
            "UMLIF",
            "KOETT",
            "AR_OBJECT",
            "KOAKO",
            "OICSEGI",
            "OIRFQREQ",
            "WVVKZ",
            "XLOKZ",
            "CP_AKTIVE",
            "CPTYPE",
            "FLS_RSTO",
            "MSR_ACTIVE",
            "RDP_PROFILE",
            "NUMKC",
            "/SAPMP/CEACT",
            "/SAPMP/PDACT",
            "/SAPMP/PPROT",
            "/SAPMP/PUSER",
            "/SAPMP/PAUSW",
            "/SAPMP/ATNAM",
            "/SAPMP/GAUF",
            "TOLSL",
            "MILL_OMKZ"
        ],
        "fk": [
            "L2TC_RDP_PROFILE",
            "T161",
            "TMCB",
            "TLHIT",
            "TME_TOLS",
            "TVPG",
            "T162",
            "T000",
            "TOADV"
        ]
    },
    "TMCB": {
        "f": [
            "MANDT",
            "STAFO",
            "FITYP",
            "MCAPP"
        ],
        "fk": [
            "T000"
        ]
    },
    "L2TC_RDP_PROFILE": {
        "f": [
            "MANDT",
            "PROFILE",
            "STRATEGY",
            "AUTO_RDP_UPDATE"
        ],
        "fk": [
            "SEOCLASSTX"
        ]
    },
    "SEOCLASSTX": {
        "f": [
            "CLSNAME",
            "LANGU",
            "DESCRIPT"
        ],
        "fk": [
            "SEOCLASS",
            "T002"
        ]
    },
    "SEOCLASS": {
        "f": [
            "CLSNAME",
            "CLSTYPE",
            "UUID",
            "REMOTE"
        ],
        "fk": []
    },
    "TVPG": {
        "f": [
            "MANDT",
            "PARGR",
            "PAOBJ"
        ],
        "fk": []
    },
    "TME_TOLS": {
        "f": [
            "MANDT",
            "TOLSL"
        ],
        "fk": [
            "T000"
        ]
    },
    "T162": {
        "f": [
            "MANDT",
            "FLREF",
            "FAUS1",
            "FAUS2",
            "FAUS3",
            "FAUS4",
            "FAUS5",
            "BSTYP"
        ],
        "fk": [
            "T000"
        ]
    },
    "TLHIT": {
        "f": [
            "MANDT",
            "HITYP",
            "PARVW"
        ],
        "fk": [
            "TPAR",
            "T000"
        ]
    },
    "TOADV": {
        "f": [
            "MANDT",
            "AR_OBJECT",
            "DOC_TYPE",
            "DVS_TYPE",
            "STANDARD",
            "VIEWER",
            "VIEWOPTION"
        ],
        "fk": [
            "TOADD",
            "T000"
        ]
    },
    "TOADD": {
        "f": [
            "DOC_TYPE",
            "MIMETYPE",
            "APPL_TYPE"
        ],
        "fk": []
    },
    "T024": {
        "f": [
            "MANDT",
            "EKGRP",
            "EKNAM",
            "EKTEL",
            "LDEST",
            "TELFX",
            "TEL_NUMBER",
            "TEL_EXTENS",
            "SMTP_ADDR"
        ],
        "fk": [
            "TSP03",
            "T000"
        ]
    },
    "TSP03": {
        "f": [
            "PADEST",
            "PAOSNAME",
            "PATYPE",
            "PAHOST",
            "PAMETHOD",
            "PAPARAM1",
            "PASTATUS",
            "PAMSG",
            "PASTANDORT",
            "PALPDHOST",
            "PACONVERT",
            "PALPQFORM",
            "PALPRCMD",
            "PALPQCMD",
            "PALPXCMD",
            "PAMINPRIO",
            "PADFLTUTTL",
            "PADFLTSTTL",
            "PADEBUG",
            "PALPDSIZE",
            "PALPDPORT",
            "PAARCHIVER"
        ],
        "fk": [
            "TSP0A",
            "TSP6D",
            "TSP5D"
        ]
    },
    "TSP5D": {
        "f": [
            "LPQFORMAT"
        ],
        "fk": []
    },
    "TSP6D": {
        "f": [
            "METHOD"
        ],
        "fk": []
    },
    "TSP0A": {
        "f": [
            "PATYPE",
            "PPRINT",
            "DRIVER",
            "PVERS",
            "PNAME",
            "CPCODEPAGE",
            "CODEPG1ALT",
            "CODEPG2ALT",
            "CODEPGSYNT",
            "BASE",
            "LSTDRIVER",
            "LSTSUBTYPE",
            "CHGNAME1",
            "CHGTSTMP1",
            "CHGSAPREL1",
            "CHGSAPSYS1",
            "CHGNAME2",
            "CHGTSTMP2",
            "CHGSAPREL2",
            "CHGSAPSYS2",
            "CHGNAME3",
            "CHGTSTMP3",
            "CHGSAPREL3",
            "CHGSAPSYS3"
        ],
        "fk": [
            "TSP0A",
            "TSP09",
            "TCP00"
        ]
    },
    "TSP09": {
        "f": [
            "DRIVER",
            "DABAP",
            "DNAME"
        ],
        "fk": []
    },
    "T024E": {
        "f": [
            "MANDT",
            "EKORG",
            "EKOTX",
            "BUKRS",
            "TXADR",
            "TXKOP",
            "TXFUS",
            "TXGRU",
            "KALSE",
            "MKALS",
            "BPEFF",
            "BUKRS_NTR"
        ],
        "fk": [
            "T683",
            "TMKE",
            "T001",
            "T000"
        ]
    },
    "TMKE": {
        "f": [
            "MANDT",
            "KALSE"
        ],
        "fk": [
            "T000"
        ]
    },
    "T156": {
        "f": [
            "MANDT",
            "BWART",
            "SHKZG",
            "KZWES",
            "KZVBU",
            "KZDRU",
            "KZKON",
            "CHNEU",
            "KZZDE",
            "RSTYP",
            "SELPA",
            "XLAUT",
            "KZSTR",
            "KZGRU",
            "XINVB",
            "QSSBW",
            "KZBWA",
            "XSTBW",
            "XPBED",
            "XWSBR",
            "KZMHD",
            "KZCLA",
            "XKOKO",
            "XKCFC",
            "XNEBE",
            "J_1BNFREL",
            "J_1BNFTYPE",
            "J_1BITMTYP",
            "J_1BSPCSTO",
            "J_1BPARTYP",
            "J_1BPARVW",
            "RULES",
            "J_1AREVIDX",
            "J_1ADOCCL",
            "J_1AEXPKZ",
            "XOARC",
            "BUSTR",
            "KZDIR",
            "OIJ1BNFFI",
            "MILL_CPCONF",
            "CO_WIPB_CPCONF",
            "XWIPB",
            "/CWM/TRUE",
            "OIXTRIP"
        ],
        "fk": [
            "J_1ADOCCLS",
            "J_1BAA",
            "T434R",
            "T160S",
            "T000",
            "J_1BAD",
            "J_1BITEMTYPES",
            "T159Q"
        ]
    },
    "J_1BAA": {
        "f": [
            "MANDT",
            "NFTYPE",
            "DOCTYP",
            "DIRECT",
            "ENTRAD",
            "NFTYPC",
            "FORM",
            "MODEL",
            "PARVW",
            "PARTYP",
            "ITMTYP",
            "TEXTKEY",
            "SHIPFROM",
            "GEWEI",
            "NFTYPECONTI",
            "NFE",
            "NFENRNR",
            "FORM_SCAN",
            "CTE_TYPE",
            "MUNICIPAL",
            "OIH_DEF_TAX_CODE"
        ],
        "fk": [
            "T006",
            "T007A",
            "J_1BAA",
            "J_1BDOCTYPES",
            "J_1BMMNFTT",
            "T000",
            "J_1BITEMTYPES",
            "J_1BAQ",
            "J_1BAD"
        ]
    },
    "J_1BMMNFTT": {
        "f": [
            "MANDT",
            "TEXTKEY"
        ],
        "fk": [
            "T000"
        ]
    },
    "J_1BDOCTYPES": {
        "f": [
            "MANDT",
            "DOCTYP"
        ],
        "fk": []
    },
    "J_1BITEMTYPES": {
        "f": [
            "MANDT",
            "ITMTYP"
        ],
        "fk": []
    },
    "J_1BAQ": {
        "f": [
            "MANDT",
            "FORM",
            "MODEL",
            "SERIES"
        ],
        "fk": [
            "T000"
        ]
    },
    "T159Q": {
        "f": [
            "MANDT",
            "KZDRU",
            "TEXT30"
        ],
        "fk": [
            "T000"
        ]
    },
    "T434R": {
        "f": [
            "MANDT",
            "RULES",
            "CONS_RULES",
            "CONS_HND_BF"
        ],
        "fk": [
            "T434R",
            "T000"
        ]
    },
    "T160S": {
        "f": [
            "MANDT",
            "SELPA",
            "WE000",
            "WE00E",
            "WE00S",
            "WEBE0",
            "WEBEE",
            "WEBES",
            "WEBET",
            "WERE0",
            "WEREE",
            "WERES",
            "WERET",
            "WEREP",
            "RE000",
            "REBE0",
            "REBEP",
            "AN000",
            "WS000",
            "SWEPO",
            "SREPO",
            "SLOEK",
            "ZWBW0",
            "ZWBWT",
            "ZMBM0",
            "ZMBMT",
            "LFZAB",
            "BM000",
            "ANGEB",
            "WA000",
            "WAWE0",
            "WABE0",
            "AV000",
            "AVWE0",
            "AVBE0",
            "VARANZ",
            "GW000",
            "GWWE0",
            "GWBE0",
            "RETOU",
            "RE00E",
            "REBEE",
            "SMEMO"
        ],
        "fk": [
            "T000"
        ]
    },
    "T30B": {
        "f": [
            "MANDT",
            "LGNUM",
            "LGTOR",
            "LGBZO",
            "WATKZ",
            "WETKZ",
            "CDTKZ",
            "FTTKZ",
            "GLCGR",
            "PLCTY",
            "BLIND",
            "BLRSN",
            "YRGLN"
        ],
        "fk": [
            "LYLGR",
            "LYRSN",
            "T30C",
            "T000",
            "T300"
        ]
    },
    "T30C": {
        "f": [
            "MANDT",
            "LGNUM",
            "LGBZO",
            "LGTOR",
            "WATKZ",
            "WETKZ",
            "CDTKZ",
            "FTTKZ",
            "BORGR_HUCKZ",
            "GLCGR",
            "PLCTY",
            "BLIND",
            "BLRSN",
            "YRGLN",
            "LZONE",
            "XCORD",
            "YCORD",
            "ZCORD"
        ],
        "fk": [
            "LYLGR",
            "LYRSN",
            "T30B",
            "T000",
            "T300"
        ]
    },
    "LYRSN": {
        "f": [
            "MANDT",
            "LYARD",
            "RSNCD",
            "EXOBJ"
        ],
        "fk": []
    },
    "LYLGR": {
        "f": [
            "MANDT",
            "LYARD",
            "GLCGR",
            "YLCCL"
        ],
        "fk": [
            "LYYRD"
        ]
    },
    "LYYRD": {
        "f": [
            "MANDT",
            "LYARD",
            "ACTNR",
            "TMUOM",
            "LGNUM",
            "SCHHR",
            "SCHPR",
            "WGUOM",
            "VHILM",
            "DFPMT",
            "SLFLG",
            "SHPWT"
        ],
        "fk": [
            "T006",
            "MARA",
            "T300"
        ]
    },
    "KNVA": {
        "f": [
            "MANDT",
            "KUNNR",
            "ABLAD",
            "LFDNR",
            "KNFAK",
            "WANID",
            "TPQUA",
            "TPGRP",
            "STZKL",
            "STZZU",
            "MOAB1",
            "MOBI1",
            "MOAB2",
            "MOBI2",
            "DIAB1",
            "DIBI1",
            "DIAB2",
            "DIBI2",
            "MIAB1",
            "MIBI1",
            "MIAB2",
            "MIBI2",
            "DOAB1",
            "DOBI1",
            "DOAB2",
            "DOBI2",
            "FRAB1",
            "FRBI1",
            "FRAB2",
            "FRBI2",
            "SAAB1",
            "SABI1",
            "SAAB2",
            "SABI2",
            "SOAB1",
            "SOBI1",
            "SOAB2",
            "SOBI2",
            "DEFAB"
        ],
        "fk": [
            "TVWA",
            "T000",
            "TFACD",
            "KNA1"
        ]
    },
    "TVWA": {
        "f": [
            "MANDT",
            "WANID",
            "MOAB1",
            "MOBI1",
            "MOAB2",
            "MOBI2",
            "DIAB1",
            "DIBI1",
            "DIAB2",
            "DIBI2",
            "MIAB1",
            "MIBI1",
            "MIAB2",
            "MIBI2",
            "DOAB1",
            "DOBI1",
            "DOAB2",
            "DOBI2",
            "FRAB1",
            "FRBI1",
            "FRAB2",
            "FRBI2",
            "SAAB1",
            "SABI1",
            "SAAB2",
            "SABI2",
            "SOAB1",
            "SOBI1",
            "SOAB2",
            "SOBI2"
        ],
        "fk": []
    },
    "T615": {
        "f": [
            "MANDT",
            "LAND1",
            "ZOLLA",
            "AZOST"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "TVLA": {
        "f": [
            "MANDT",
            "VSTEL",
            "LSTEL",
            "VERAN"
        ],
        "fk": [
            "TVST"
        ]
    },
    "TVK0": {
        "f": [
            "MANDT",
            "KATR10"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVK9": {
        "f": [
            "MANDT",
            "KATR9"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVK4": {
        "f": [
            "MANDT",
            "KATR4"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVKGG": {
        "f": [
            "MANDT",
            "KDKGR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TSFG": {
        "f": [
            "MANDT",
            "SFRGR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TQ04A": {
        "f": [
            "MANDT",
            "SPERRFKT",
            "BESTELLUNG",
            "ANFRAGE",
            "BZGQUELLE",
            "WESPERR"
        ],
        "fk": []
    },
    "WRF_PSCD_TCHAINH": {
        "f": [
            "MANDT",
            "TC_ID",
            "TC_MODE",
            "TC_NAME",
            "TC_TYPE",
            "TOLERANCE",
            "TIMESTAMP",
            "UNAME",
            "PROGRAMM"
        ],
        "fk": [
            "T000"
        ]
    },
    "T077K": {
        "f": [
            "MANDT",
            "KTOKK",
            "FAUSA",
            "FAUSF",
            "FAUSM",
            "NUMKR",
            "XCPDS",
            "FAUS1",
            "FAUSW",
            "FAUST",
            "LTSNA",
            "WERKR",
            "PARGE",
            "PARGT",
            "PARGW",
            "DURAS",
            "KTOKD",
            "FAUSG",
            "FAUSN",
            "FAUSX",
            "FAUSU",
            "FAUS2"
        ],
        "fk": [
            "TVPG",
            "T000",
            "T077D"
        ]
    },
    "J_1AACT": {
        "f": [
            "MANDT",
            "J_1AACT"
        ],
        "fk": [
            "T000"
        ]
    },
    "TQ02B": {
        "f": [
            "MANDT",
            "QSSYSFAM",
            "QSSYSZERT",
            "QSSYSBEW"
        ],
        "fk": [
            "T000"
        ]
    },
    "VTSGD": {
        "f": [
            "MANDT",
            "STGDL"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVFCD": {
        "f": [
            "MANDT",
            "DLGRP"
        ],
        "fk": [
            "T000"
        ]
    },
    "T087": {
        "f": [
            "MANDT",
            "ORDNR",
            "ORD4X"
        ],
        "fk": []
    },
    "T095A": {
        "f": [
            "MANDT",
            "KTOGR"
        ],
        "fk": []
    },
    "T087I": {
        "f": [
            "MANDT",
            "IZWEK"
        ],
        "fk": [
            "T000"
        ]
    },
    "T097": {
        "f": [
            "MANDT",
            "EIGKZ"
        ],
        "fk": []
    },
    "T092": {
        "f": [
            "MANDT",
            "VMGLI"
        ],
        "fk": []
    },
    "TF150": {
        "f": [
            "MANDT",
            "DIMEN",
            "IAIND",
            "BULGH",
            "CGLGH",
            "INDGS",
            "INDGB",
            "INDPC",
            "ITCLG_FI",
            "SITYP_FI",
            "SIGNC_FI",
            "IGSGB_FI",
            "HLIND",
            "PCUIND",
            "REVIND",
            "PROTYP",
            "CIINVCHECK",
            "HRFSCAT",
            "USTPFLG",
            "NEWLL_YEAR",
            "SETGENMODE",
            "SETGENCGY",
            "DOCTY_ACS",
            "ASTHFS"
        ],
        "fk": [
            "TF120",
            "TF240",
            "T000",
            "TF500",
            "TF110"
        ]
    },
    "TF120": {
        "f": [
            "MANDT",
            "ITCLG",
            "ITLGH",
            "BLIND",
            "AREIND",
            "SETGENMODE"
        ],
        "fk": [
            "T000"
        ]
    },
    "TF110": {
        "f": [
            "MANDT",
            "SITYP",
            "SIGNIND",
            "TTYIND",
            "FMLIND",
            "CFDIND",
            "CYAIND",
            "RETIND",
            "FNUMB",
            "FLG1",
            "FLG2",
            "FLG3",
            "FLG4",
            "FLG5",
            "FLG6",
            "FLG7",
            "FLG8",
            "FLG9",
            "SIDEF",
            "SITEM_SEND"
        ],
        "fk": [
            "TF115",
            "T000"
        ]
    },
    "TF115": {
        "f": [
            "MANDT",
            "SITYP",
            "SITEM",
            "SIGN",
            "UPCFO",
            "FMLIND",
            "CFIND",
            "SDEIND",
            "CYIND",
            "UPRET",
            "UPACQ",
            "UPMER"
        ],
        "fk": [
            "TF115",
            "T000",
            "TF110"
        ]
    },
    "TF500": {
        "f": [
            "MANDT",
            "DIMEN",
            "DOCTY",
            "RLEVL",
            "TCIND",
            "LCIND",
            "GCIND",
            "CUTYP",
            "BLCHK",
            "DTAXD",
            "DTAXC",
            "MNPOS",
            "QNTIN",
            "ADTIN",
            "TAXIN",
            "CACTA",
            "CNVIN"
        ],
        "fk": [
            "TF150",
            "TF420",
            "T000"
        ]
    },
    "TF420": {
        "f": [
            "MANDT",
            "KURSA"
        ],
        "fk": [
            "T000"
        ]
    },
    "TF240": {
        "f": [
            "MANDT",
            "FSCAT"
        ],
        "fk": [
            "T000"
        ]
    },
    "T8J3A": {
        "f": [
            "MANDT",
            "BUKRS",
            "NBFORM"
        ],
        "fk": [
            "T001",
            "T000"
        ]
    },
    "AUFK": {
        "f": [
            "MANDT",
            "AUFNR",
            "AUART",
            "AUTYP",
            "REFNR",
            "ERNAM",
            "ERDAT",
            "AENAM",
            "AEDAT",
            "KTEXT",
            "LTEXT",
            "BUKRS",
            "WERKS",
            "GSBER",
            "KOKRS",
            "CCKEY",
            "KOSTV",
            "STORT",
            "SOWRK",
            "ASTKZ",
            "WAERS",
            "ASTNR",
            "STDAT",
            "ESTNR",
            "PHAS0",
            "PHAS1",
            "PHAS2",
            "PHAS3",
            "PDAT1",
            "PDAT2",
            "PDAT3",
            "IDAT1",
            "IDAT2",
            "IDAT3",
            "OBJID",
            "VOGRP",
            "LOEKZ",
            "PLGKZ",
            "KVEWE",
            "KAPPL",
            "KALSM",
            "ZSCHL",
            "ABKRS",
            "KSTAR",
            "KOSTL",
            "SAKNR",
            "SETNM",
            "CYCLE",
            "SDATE",
            "SEQNR",
            "USER0",
            "USER1",
            "USER2",
            "USER3",
            "USER4",
            "USER5",
            "USER6",
            "USER7",
            "USER8",
            "USER9",
            "OBJNR",
            "PRCTR",
            "PSPEL",
            "AWSLS",
            "ABGSL",
            "TXJCD",
            "FUNC_AREA",
            "SCOPE",
            "PLINT",
            "KDAUF",
            "KDPOS",
            "AUFEX",
            "IVPRO",
            "LOGSYSTEM",
            "FLG_MLTPS",
            "ABUKR",
            "AKSTL",
            "SIZECL",
            "IZWEK",
            "UMWKZ",
            "KSTEMPF",
            "ZSCHM",
            "PKOSA",
            "ANFAUFNR",
            "PROCNR",
            "PROTY",
            "RSORD",
            "BEMOT",
            "ADRNRA",
            "ERFZEIT",
            "AEZEIT",
            "CSTG_VRNT",
            "COSTESTNR",
            "VERAA_USER",
            "DUMMY_CI_AUFK",
            "VNAME",
            "RECID",
            "ETYPE",
            "OTYPE",
            "JV_JIBCL",
            "JV_JIBSA",
            "JV_OCO",
            "CPD_UPDAT",
            "/CUM/INDCU",
            "/CUM/CMNUM",
            "/CUM/AUEST",
            "/CUM/DESNUM",
            "/MRSS/PL_STRU_ID",
            "/MRSS/PL_MAN_TYP",
            "/MRSS/ORDER_PROB",
            "/MRSS/ACT_TYPE",
            "/MRSS/INIT_DONE",
            "/MRSS/DATACHANGE",
            "/MRSS/SALES_ORG",
            "/MRSS/NW_BOOKED",
            "VAPLZ",
            "WAWRK",
            "FERC_IND",
            "AUFK_STATUS",
            "OIHANTYP",
            "CLAIM_CONTROL",
            "UPDATE_NEEDED",
            "UPDATE_CONTROL"
        ],
        "fk": [
            "TTXJ",
            "T499S",
            "TGSB",
            "FERC_C7",
            "T8J6C",
            "T001W",
            "VBUK",
            "T000",
            "WTYSCC_UPDT_CONT",
            "TKV01",
            "T8JG",
            "T003O",
            "T8J6A",
            "ACTCMB_TAB",
            "TKAVG",
            "CSKB",
            "TBMOT",
            "CSKS",
            "WTYSCC_CLM_CONT",
            "T683",
            "T8JV",
            "TAPRF",
            "TKO08",
            "TAIF5",
            "T681V",
            "T681A",
            "SKB1",
            "TFKB",
            "CEPC",
            "TBDLS",
            "TKA01",
            "TKO03",
            "T087I",
            "USR02",
            "TKKAA",
            "PRPS",
            "TCURC",
            "T8JJ",
            "TPI01",
            "AUFK",
            "ONR00",
            "OIH5",
            "T001",
            "T087K"
        ]
    },
    "T087K": {
        "f": [
            "MANDT",
            "UMWKZ"
        ],
        "fk": [
            "T000"
        ]
    },
    "T003O": {
        "f": [
            "CLIENT",
            "AUART",
            "AUTYP",
            "NUMKR",
            "OBLIGO",
            "ERLOESE",
            "STSMA",
            "APROF",
            "PPROF",
            "COPAR",
            "RESZ1",
            "RESZ2",
            "AUFKL",
            "RELKZ",
            "CHGKZ",
            "BPROF",
            "PLINT",
            "NABPF",
            "VORPL",
            "LAYOUT",
            "TDFORM",
            "SCOPE",
            "COLORDPROC",
            "VRG_STSMA",
            "FUNC_AREA",
            "EXEC_PROFILE"
        ],
        "fk": [
            "TJ20",
            "TBP1C",
            "TKB1A",
            "T000",
            "TFKB",
            "AUFLAY0"
        ]
    },
    "TKB1A": {
        "f": [
            "MANDT",
            "APROF",
            "PREIS",
            "EPUPD",
            "HPROZ",
            "MAXBR",
            "BETRA",
            "MENGE",
            "PROZE",
            "AQZIF",
            "ABSCH",
            "URSCH",
            "KOVOR",
            "ABSAK",
            "ABKST",
            "ABAUF",
            "ABPRO",
            "ABANL",
            "ABMAT",
            "ABNVG",
            "ABBOB",
            "ABPRC",
            "ABIMM",
            "BLART",
            "RESAU",
            "ERSCH",
            "RIFIND",
            "FM_DERIVE",
            "HBSCHL",
            "SBSCHL",
            "VARIA",
            "ABKTR",
            "ABPRZ",
            "ABAUP",
            "ABRIST",
            "FM_DERIVE_FONDS",
            "FM_DERIVE_FKBER",
            "FM_DERIVE_GRANT"
        ],
        "fk": [
            "TKB5A",
            "TKB9A",
            "T000",
            "T003"
        ]
    },
    "TKB5A": {
        "f": [
            "MANDT",
            "ABSCH"
        ],
        "fk": [
            "T000"
        ]
    },
    "TKB9A": {
        "f": [
            "MANDT",
            "ERSCH"
        ],
        "fk": [
            "T000"
        ]
    },
    "AUFLAY0": {
        "f": [
            "MANDT",
            "LAYOUT"
        ],
        "fk": []
    },
    "TPI01": {
        "f": [
            "MANDT",
            "ZSCHM",
            "CTRL",
            "COCTRL"
        ],
        "fk": [
            "T000"
        ]
    },
    "TBMOT": {
        "f": [
            "MANDT",
            "BEMOT"
        ],
        "fk": []
    },
    "ACTCMB_TAB": {
        "f": [
            "MANDT",
            "ACTCMB",
            "ACTCMBDESC",
            "CMB_PRIORITY",
            "STAT_PROFILE"
        ],
        "fk": []
    },
    "CSKB": {
        "f": [
            "MANDT",
            "KOKRS",
            "KSTAR",
            "DATBI",
            "DATAB",
            "KATYP",
            "ERSDA",
            "USNAM",
            "EIGEN",
            "PLAZU",
            "PLAOR",
            "PLAUS",
            "KOSTL",
            "AUFNR",
            "MGEFL",
            "MSEHI",
            "DEAKT",
            "LOEVM",
            "RECID"
        ],
        "fk": [
            "T006",
            "T8JJ",
            "TKA01",
            "CSKS",
            "AUFK",
            "CSKA"
        ]
    },
    "WTYSCC_CLM_CONT": {
        "f": [
            "MANDT",
            "CLAIM_CONTROL"
        ],
        "fk": []
    },
    "TKO03": {
        "f": [
            "CLIENT",
            "ART",
            "ASTNR",
            "NSTNR",
            "HSTNR",
            "DEFST",
            "PLGKZ",
            "LOEKZ",
            "VOGRP",
            "PHAS0",
            "PHAS1",
            "PHAS2",
            "PHAS3"
        ],
        "fk": [
            "T003O",
            "T000",
            "TKO03"
        ]
    },
    "PRPS": {
        "f": [
            "MANDT",
            "PSPNR",
            "POSID",
            "POST1",
            "OBJNR",
            "PSPHI",
            "POSKI",
            "ERNAM",
            "ERDAT",
            "AENAM",
            "AEDAT",
            "VERNR",
            "VERNA",
            "ASTNR",
            "ASTNA",
            "PBUKR",
            "PGSBR",
            "PKOKR",
            "PRCTR",
            "PRART",
            "STUFE",
            "PLAKZ",
            "BELKZ",
            "FAKKZ",
            "NPFAZ",
            "ZUORD",
            "TRMEQ",
            "KVEWE",
            "KAPPL",
            "KALSM",
            "ZSCHL",
            "ABGSL",
            "AKOKR",
            "AKSTL",
            "FKOKR",
            "FKSTL",
            "FABKL",
            "PSPRI",
            "EQUNR",
            "TPLNR",
            "PWPOS",
            "WERKS",
            "TXTSP",
            "SLWID",
            "USR00",
            "USR01",
            "USR02",
            "USR03",
            "USR04",
            "USE04",
            "USR05",
            "USE05",
            "USR06",
            "USE06",
            "USR07",
            "USE07",
            "USR08",
            "USR09",
            "USR10",
            "USR11",
            "KOSTL",
            "KTRG",
            "BERST",
            "BERTR",
            "BERKO",
            "BERBU",
            "CLASF",
            "SPSNR",
            "SCOPE",
            "XSTAT",
            "TXJCD",
            "ZSCHM",
            "IMPRF",
            "EVGEW",
            "AENNR",
            "SUBPR",
            "POSTU",
            "PLINT",
            "LOEVM",
            "KZBWS",
            "FPLNR",
            "TADAT",
            "IZWEK",
            "ISIZE",
            "IUMKZ",
            "ABUKR",
            "GRPKZ",
            "PGPRF",
            "LOGSYSTEM",
            "PSPNR_LOGS",
            "STORT",
            "FUNC_AREA",
            "KLVAR",
            "KALNR",
            "POSID_EDIT",
            "PSPKZ",
            "MATNR",
            "VLPSP",
            "VLPKZ",
            "SORT1",
            "SORT2",
            "SORT3",
            "VNAME",
            "RECID",
            "ETYPE",
            "OTYPE",
            "JIBCL",
            "JIBSA",
            "CGPL_GUID16",
            "CGPL_LOGSYS",
            "CGPL_OBJTYPE",
            "ADPSP",
            "RFIPPNT",
            "CPD_UPDAT",
            "FERC_IND",
            "PRPS_STATUS"
        ],
        "fk": [
            "T006",
            "TTXJ",
            "T499S",
            "TGSB",
            "ZZZ_PS02",
            "FERC_C7",
            "T8J6C",
            "T001W",
            "IFLOT",
            "PRTP",
            "T000",
            "TFACD",
            "TKZSL",
            "T8J6A",
            "ACTCMB_TAB",
            "TCNRPIP",
            "CSKS",
            "T683",
            "TCJ05",
            "T8JV",
            "TAPRF",
            "T002",
            "TPGPRF",
            "TAIF5",
            "TCN07",
            "T681V",
            "T681A",
            "TFKB",
            "TCN00",
            "CEPC",
            "TCJ04",
            "TKA01",
            "T087I",
            "PRPSS",
            "TKKAA",
            "TCJ1",
            "T8JE",
            "PROJ",
            "ZZZ_PS04",
            "EQUI",
            "TCURC",
            "T8JJ",
            "TPI01",
            "ZZZ_PS03",
            "ONR00",
            "ZZZ_PS05",
            "ZZZ_PS01",
            "T001",
            "AENR",
            "T087K",
            "CKPH"
        ]
    },
    "EQUI": {
        "f": [
            "MANDT",
            "EQUNR",
            "ERDAT",
            "ERNAM",
            "EQASP",
            "AEDAT",
            "AENAM",
            "BEGRU",
            "EQTYP",
            "EQART",
            "LVORM",
            "INVNR",
            "GROES",
            "BRGEW",
            "GEWEI",
            "ANSDT",
            "ANSWT",
            "WAERS",
            "ELIEF",
            "GWLEN",
            "GWLDT",
            "WDBWT",
            "HERST",
            "HERLD",
            "HZEIN",
            "SERGE",
            "TYPBZ",
            "BAUJJ",
            "BAUMM",
            "APLKZ",
            "AULDT",
            "INBDT",
            "GERNR",
            "EQLFN",
            "GWLDV",
            "EQDAT",
            "EQBER",
            "EQNUM",
            "OBJNR",
            "EQSNR",
            "CUOBJ",
            "KRFKZ",
            "KMATN",
            "MATNR",
            "SERNR",
            "WERK",
            "LAGER",
            "CHARGE",
            "KUNDE",
            "WARPL",
            "IMRC_POINT",
            "REVLV",
            "MGANR",
            "BEGRUI",
            "S_EQUI",
            "S_SERIAL",
            "S_KONFI",
            "S_SALE",
            "S_FHM",
            "S_ELSE",
            "S_ISU",
            "S_EQBS",
            "S_FLEET",
            "BSTVP",
            "SPARTE",
            "HANDLE",
            "TSEGTP",
            "EMATN",
            "ACT_CHANGE_AA",
            "S_CC",
            "DATLWB",
            "UII",
            "IUID_TYPE",
            "UII_PLANT",
            "/GEP/PASSENGER",
            "/GEP/AUTOM",
            "/GEP/KLIMA",
            "/GEP/DACHG",
            "/GEP/SCHNEEK",
            "/GEP/WINTERR",
            "/GEP/VHCAT",
            "EQEXT_ACTIVE",
            "/MRSS/ID_PROFILE",
            "/MRSS/PROF_GUID",
            "/MRSS/PROF_KEY",
            "/MRSS/DATACHANGE",
            "EQUI_SRTYPE",
            "EQUI_SNTYPE",
            "EQLB_DUTY",
            "EQLB_HIDE"
        ],
        "fk": [
            "T006",
            "BGMK",
            "T001W",
            "T370K",
            "IMPTT",
            "T000",
            "KNA1",
            "EQSE",
            "T005",
            "COCF_CU_SRTYPE",
            "T002",
            "MARA",
            "T370T",
            "LFA1",
            "T001L",
            "TQ80",
            "TIUID_TYPE",
            "TSPA",
            "MCH1",
            "TCURC",
            "T370B",
            "MPLA"
        ]
    },
    "BGMK": {
        "f": [
            "MANDT",
            "MGANR",
            "DATAB",
            "DATBI",
            "EXGAR",
            "GASOR",
            "GAGRP",
            "ERDAT",
            "ERZEI",
            "ERNAM",
            "AEDAT",
            "AEZEI",
            "AENAM",
            "BEGRU",
            "LVORM",
            "OBJNR",
            "PARGR",
            "GAART",
            "LANGE",
            "GAERB",
            "VGLPA"
        ],
        "fk": [
            "ONR00",
            "TVPG",
            "T790G",
            "T002",
            "T000"
        ]
    },
    "T790G": {
        "f": [
            "MANDT",
            "GAART",
            "GATYP",
            "NUMKR",
            "NUMKE",
            "STSMA",
            "PARGR",
            "KVEWE",
            "KAPPL",
            "KALSM",
            "POPUPM",
            "POPUPA",
            "POPUPF"
        ],
        "fk": [
            "TJ20",
            "T683",
            "TVPG",
            "T681V",
            "T681A",
            "T000"
        ]
    },
    "MPLA": {
        "f": [
            "MANDT",
            "WARPL",
            "ERKNZ",
            "AEKNZ",
            "ERSDT",
            "ERNAM",
            "AEDAT",
            "AENAM",
            "WPTXT",
            "STRAT",
            "ABRHO",
            "EQUNR",
            "TPLNR",
            "KUNUM",
            "LTKNZ",
            "LVORM",
            "ANZPS",
            "ABNUM",
            "LANGU",
            "VSPOS",
            "VSNEG",
            "TOPOS",
            "TONEG",
            "SFAKT",
            "STICH",
            "TGOON",
            "HORIZ",
            "HORIZ_DAYS",
            "HORIZ_QUALIFIER",
            "ANDOR",
            "KNAUT",
            "BEGRU",
            "OBJNR",
            "MPTYP",
            "HUNIT",
            "STADT",
            "SZAEH",
            "CALL_CONFIRM",
            "PLAN_SORT",
            "FABKL",
            "PUFFP",
            "PUFFN",
            "START_DATE",
            "START_TIME",
            "CALL_UPDATE_IND",
            "IND_MPLA_API",
            "MCP_SF"
        ],
        "fk": [
            "T399G",
            "T370B",
            "T000",
            "T399W",
            "T351",
            "TFACD"
        ]
    },
    "T351": {
        "f": [
            "MANDT",
            "STRAT",
            "ZEIEH",
            "LEIEH",
            "ZYK1G",
            "ZYK2G",
            "ZYK1K",
            "ZYK2K",
            "ANZP1",
            "ANZP2",
            "TOLE1",
            "TOLE2",
            "VERS1",
            "VERS2",
            "TERMK",
            "HORIZ",
            "HORIZ_QUALIFIER",
            "FABKL"
        ],
        "fk": [
            "T006",
            "T000",
            "TFACD"
        ]
    },
    "T399G": {
        "f": [
            "MANDT",
            "PLAN_SORT"
        ],
        "fk": [
            "T000"
        ]
    },
    "T370B": {
        "f": [
            "MANDT",
            "BEGRU"
        ],
        "fk": [
            "T000"
        ]
    },
    "T399W": {
        "f": [
            "MANDT",
            "MPTYP",
            "CALL_TYPE",
            "WPEXT",
            "WPINT",
            "DYNNR",
            "SCREENTY",
            "MPCONTRACT",
            "MPCONFDATE",
            "MPCHANGED",
            "CHDOC_RCAL"
        ],
        "fk": [
            "T000"
        ]
    },
    "TIUID_TYPE": {
        "f": [
            "IUID_TYPE"
        ],
        "fk": []
    },
    "MCH1": {
        "f": [
            "MANDT",
            "MATNR",
            "CHARG",
            "LVORM",
            "ERSDA",
            "ERNAM",
            "AENAM",
            "LAEDA",
            "VERAB",
            "VFDAT",
            "ZUSCH",
            "ZUSTD",
            "ZAEDT",
            "LIFNR",
            "LICHA",
            "VLCHA",
            "VLWRK",
            "VLMAT",
            "CHAME",
            "LWEDT",
            "FVDT1",
            "FVDT2",
            "FVDT3",
            "FVDT4",
            "FVDT5",
            "FVDT6",
            "HERKL",
            "HERKR",
            "MTVER",
            "QNDAT",
            "HSDAT",
            "CUOBJ_BM",
            "DEACT_BM",
            "BATCH_TYPE"
        ],
        "fk": [
            "T005",
            "TVFM",
            "MARA",
            "T005S",
            "T000",
            "LFA1",
            "MARC"
        ]
    },
    "TVFM": {
        "f": [
            "MANDT",
            "MTVER",
            "STAZO"
        ],
        "fk": [
            "T000"
        ]
    },
    "MARC": {
        "f": [
            "MANDT",
            "MATNR",
            "WERKS",
            "PSTAT",
            "LVORM",
            "BWTTY",
            "XCHAR",
            "MMSTA",
            "MMSTD",
            "MAABC",
            "KZKRI",
            "EKGRP",
            "AUSME",
            "DISPR",
            "DISMM",
            "DISPO",
            "KZDIE",
            "PLIFZ",
            "WEBAZ",
            "PERKZ",
            "AUSSS",
            "DISLS",
            "BESKZ",
            "SOBSL",
            "MINBE",
            "EISBE",
            "BSTMI",
            "BSTMA",
            "BSTFE",
            "BSTRF",
            "MABST",
            "LOSFX",
            "SBDKZ",
            "LAGPR",
            "ALTSL",
            "KZAUS",
            "AUSDT",
            "NFMAT",
            "KZBED",
            "MISKZ",
            "FHORI",
            "PFREI",
            "FFREI",
            "RGEKZ",
            "FEVOR",
            "BEARZ",
            "RUEZT",
            "TRANZ",
            "BASMG",
            "DZEIT",
            "MAXLZ",
            "LZEIH",
            "KZPRO",
            "GPMKZ",
            "UEETO",
            "UEETK",
            "UNETO",
            "WZEIT",
            "ATPKZ",
            "VZUSL",
            "HERBL",
            "INSMK",
            "SPROZ",
            "QUAZT",
            "SSQSS",
            "MPDAU",
            "KZPPV",
            "KZDKZ",
            "WSTGH",
            "PRFRQ",
            "NKMPR",
            "UMLMC",
            "LADGR",
            "XCHPF",
            "USEQU",
            "LGRAD",
            "AUFTL",
            "PLVAR",
            "OTYPE",
            "OBJID",
            "MTVFP",
            "PERIV",
            "KZKFK",
            "VRVEZ",
            "VBAMG",
            "VBEAZ",
            "LIZYK",
            "BWSCL",
            "KAUTB",
            "KORDB",
            "STAWN",
            "HERKL",
            "HERKR",
            "EXPME",
            "MTVER",
            "PRCTR",
            "TRAME",
            "MRPPP",
            "SAUFT",
            "FXHOR",
            "VRMOD",
            "VINT1",
            "VINT2",
            "VERKZ",
            "STLAL",
            "STLAN",
            "PLNNR",
            "APLAL",
            "LOSGR",
            "SOBSK",
            "FRTME",
            "LGPRO",
            "DISGR",
            "KAUSF",
            "QZGTP",
            "QMATV",
            "TAKZT",
            "RWPRO",
            "COPAM",
            "ABCIN",
            "AWSLS",
            "SERNP",
            "CUOBJ",
            "STDPD",
            "SFEPR",
            "XMCNG",
            "QSSYS",
            "LFRHY",
            "RDPRF",
            "VRBMT",
            "VRBWK",
            "VRBDT",
            "VRBFK",
            "AUTRU",
            "PREFE",
            "PRENC",
            "PRENO",
            "PREND",
            "PRENE",
            "PRENG",
            "ITARK",
            "SERVG",
            "KZKUP",
            "STRGR",
            "CUOBV",
            "LGFSB",
            "SCHGT",
            "CCFIX",
            "EPRIO",
            "QMATA",
            "RESVP",
            "PLNTY",
            "UOMGR",
            "UMRSL",
            "ABFAC",
            "SFCPF",
            "SHFLG",
            "SHZET",
            "MDACH",
            "KZECH",
            "MEGRU",
            "MFRGR",
            "VKUMC",
            "VKTRW",
            "KZAGL",
            "FVIDK",
            "FXPRU",
            "LOGGR",
            "FPRFM",
            "GLGMG",
            "VKGLG",
            "INDUS",
            "MOWNR",
            "MOGRU",
            "CASNR",
            "GPNUM",
            "STEUC",
            "FABKZ",
            "MATGR",
            "VSPVB",
            "DPLFS",
            "DPLPU",
            "DPLHO",
            "MINLS",
            "MAXLS",
            "FIXLS",
            "LTINC",
            "COMPL",
            "CONVT",
            "SHPRO",
            "AHDIS",
            "DIBER",
            "KZPSP",
            "OCMPF",
            "APOKZ",
            "MCRUE",
            "LFMON",
            "LFGJA",
            "EISLO",
            "NCOST",
            "ROTATION_DATE",
            "UCHKZ",
            "UCMAT",
            "BWESB",
            "/MRSS/PROF_GUID",
            "/MRSS/PROF_KEY",
            "/MRSS/DATACHANGE",
            "/SAPMP/TOLPRPL",
            "/SAPMP/TOLPRMI",
            "/VSO/R_PKGRP",
            "/VSO/R_LANE_NUM",
            "/VSO/R_PAL_VEND",
            "/VSO/R_FORK_DIR",
            "IUID_RELEVANT",
            "IUID_TYPE",
            "UID_IEA",
            "CONS_PROCG",
            "GI_PR_TIME",
            "MULTIPLE_EKGRP",
            "REF_SCHEMA",
            "MIN_TROC",
            "MAX_TROC",
            "TARGET_STOCK",
            "/CWM/XLOSGRBAS",
            "OITAXGRP",
            "OIOILCON",
            "OIEDCODE",
            "FDICH",
            "COEFF"
        ],
        "fk": [
            "T006",
            "T434G",
            "T024D",
            "TQ05",
            "T437S",
            "T436A",
            "TQ08",
            "T377P",
            "TVFM",
            "TMVF",
            "T001W",
            "T461P",
            "TQ02",
            "T149C",
            "T000",
            "TKV01",
            "TCSCP_COMP_LVL",
            "TMFG",
            "TQ01B",
            "TCO48",
            "T009",
            "T604",
            "PVBE",
            "T439P",
            "T005",
            "T141",
            "TMABC",
            "T438A",
            "TCSCP_CONV_TYPE",
            "T438R",
            "MARA",
            "T610C",
            "T438M",
            "OIB01",
            "TWSG",
            "T439L",
            "T001L",
            "TMQ2",
            "TWMEG",
            "MDIP",
            "TMFPF",
            "T609G",
            "TLOG",
            "T618M",
            "T778P",
            "T438V",
            "T460A",
            "T604F",
            "/VSO/M_PKG",
            "T46AC",
            "TIUID_TYPE",
            "TCA01",
            "T024",
            "T778O",
            "T439G",
            "T416",
            "T024F",
            "OIB06",
            "OIH2",
            "T159C",
            "TMBW1",
            "TCO43",
            "WRFT_CONS_PROCG",
            "RDPR",
            "T439A",
            "T005S",
            "T618G",
            "WRF_REF_RFS",
            "TLGR"
        ]
    },
    "OIB01": {
        "f": [
            "MANDT",
            "UMRSL",
            "PDTYP",
            "BSTMP",
            "BSTEH",
            "WQTYL",
            "WQTYH",
            "EQTYL",
            "EQTYH",
            "DNTYP",
            "VCFLN",
            "MCFI",
            "PDCL",
            "HVTYP",
            "BPRESH",
            "BPRESHEH",
            "BSTMPH",
            "BSTMPHEH",
            "EXT_PROG_VERSION",
            "BPRESV",
            "BPRESVEH",
            "BTMPVP",
            "BTMPVPEH",
            "CHGS",
            "CHLQ",
            "EXTDNUNIT",
            "EXTHVUNIT",
            "EXTIND",
            "VCFLN_LPG",
            "BSDNEH",
            "BSHVEH",
            "TDTHV",
            "BDBHV",
            "AROMATICS",
            "BHVCLS",
            "IDGAS",
            "RFC_RELEASE"
        ],
        "fk": [
            "T006",
            "T000"
        ]
    },
    "T438R": {
        "f": [
            "MANDT",
            "WERKS",
            "RWPRO",
            "RWPER",
            "RWANZ",
            "RWART",
            "RWNTG",
            "RW1TG",
            "RW1PR",
            "RW2TG",
            "RW2PR",
            "RW3TG",
            "MIRW1",
            "MIRW2",
            "MIRW3",
            "MARW1",
            "MARW2",
            "MARW3"
        ],
        "fk": [
            "T001W",
            "T000"
        ]
    },
    "TQ01B": {
        "f": [
            "MANDT",
            "QMATAUTH",
            "KZGENLOS",
            "SIG_IL_RES",
            "SIG_IL_USA",
            "SIG_IL_SDR",
            "SIGN_TYPE_RR",
            "SIGN_TYPE_UD",
            "SIGN_TYPE_SM",
            "SIGNSTRAT_RR",
            "SIGNSTRAT_UD",
            "SIGNSTRAT_SM",
            "REMARK_CHG"
        ],
        "fk": [
            "TC85",
            "T000"
        ]
    },
    "TC85": {
        "f": [
            "MANDT",
            "APPLICID",
            "SIGNSTRAT",
            "SIGN_METHOD",
            "SIGN_COMM_DISP",
            "SIGN_REMARK_DISP",
            "SIGN_VERIFY_DISP",
            "SIGN_DOC_DISP"
        ],
        "fk": [
            "T000"
        ]
    },
    "T024D": {
        "f": [
            "MANDT",
            "WERKS",
            "DISPO",
            "DSNAM",
            "DSTEL",
            "EKGRP",
            "MEMPF",
            "GSBER",
            "PRCTR",
            "USRTYP",
            "USRKEY"
        ],
        "fk": [
            "CEPC",
            "TGSB",
            "T001W",
            "T779O",
            "T024"
        ]
    },
    "T779O": {
        "f": [
            "MANDT",
            "OTYPE"
        ],
        "fk": [
            "T778O",
            "T000"
        ]
    },
    "T778O": {
        "f": [
            "MANDT",
            "OTYPE",
            "OBJTYP",
            "ICON",
            "BW_OBJTYP",
            "CLASSNAME"
        ],
        "fk": [
            "TOJTB",
            "T000"
        ]
    },
    "T439L": {
        "f": [
            "MANDT",
            "WERKS",
            "LAGPR",
            "LKOST"
        ],
        "fk": [
            "T001W",
            "T000"
        ]
    },
    "MDIP": {
        "f": [
            "MANDT",
            "DISPR",
            "DISMM",
            "DISPO",
            "KZDIE",
            "MAABC",
            "PLIFZ",
            "DZEIT",
            "FHORI",
            "SBDKZ",
            "KZBED",
            "EISBE",
            "MINBE",
            "DISLS",
            "BSTRF",
            "BSTMI",
            "BSTMA",
            "BSTFE",
            "MABST",
            "AUSSS",
            "LOSFX",
            "LAGPR",
            "AUFTL",
            "LGRAD",
            "WEBAZ",
            "USEQU",
            "PERKZ",
            "PERIV",
            "EKGRP",
            "MRPPP",
            "SAUFT",
            "SFEPR",
            "FXHOR",
            "VRMOD",
            "VINT1",
            "VINT2",
            "DISGR",
            "KAUSF",
            "ALTSL",
            "MISKZ",
            "WZEIT",
            "VPMAT",
            "VPWRK",
            "VPREF",
            "TAKZT",
            "RWPRO",
            "LFRHY",
            "RDPRF",
            "STRGR",
            "SOBSL",
            "RGEKZ",
            "SCHGT",
            "WAERS",
            "SHFLG",
            "SHZET",
            "MDACH",
            "LGPRO",
            "MTVFP",
            "BESKZ",
            "KZECH",
            "EISLO",
            "PLIFZX"
        ],
        "fk": [
            "T024D",
            "T437S",
            "T436A",
            "TMVF",
            "T461P",
            "T000",
            "T009",
            "T439P",
            "TMABC",
            "T438A",
            "T438R",
            "MARA",
            "T438M",
            "T001L",
            "T439L",
            "TMQ2",
            "T460A",
            "T46AC",
            "MARC",
            "T024",
            "T439G",
            "TCURC",
            "RDPR",
            "T439A"
        ]
    },
    "TMABC": {
        "f": [
            "MANDT",
            "MAABC"
        ],
        "fk": [
            "T000"
        ]
    },
    "T461P": {
        "f": [
            "MANDT",
            "STRGR",
            "HPTST",
            "STRA2",
            "STRA3",
            "STRA4",
            "STRA5",
            "STRA6",
            "STRA7",
            "STRA8"
        ],
        "fk": [
            "T000",
            "T461S"
        ]
    },
    "T461S": {
        "f": [
            "MANDT",
            "STRA1",
            "BEDVP",
            "BEDKU"
        ],
        "fk": [
            "T459A",
            "T000"
        ]
    },
    "T459A": {
        "f": [
            "MANDT",
            "BEDAE",
            "BEDAR",
            "VSCHL"
        ],
        "fk": [
            "T459K",
            "T000"
        ]
    },
    "T459K": {
        "f": [
            "MANDT",
            "BEDAR",
            "ATPPR",
            "BEDSD",
            "NODIS",
            "VPZUO",
            "KNTTP",
            "APROF",
            "ABGRS",
            "PABKZ",
            "PLNKZ",
            "ZUVKZ",
            "BDTYP",
            "KONFI",
            "KALKU",
            "KALSM_K",
            "KONFV",
            "MNTGA",
            "AUART",
            "VKOMP",
            "DIAGM",
            "AUTPL",
            "VKAPA",
            "KALART",
            "KALVAR",
            "KSUEB",
            "DIRKST",
            "SDUPD",
            "QUOTA",
            "KZAKP",
            "KZBWS",
            "AUCOST",
            "BWST3",
            "MNTKAL",
            "KSCHL_KO",
            "KSCHL_KOF",
            "OCMACT",
            "FKBER",
            "SLIST",
            "MODFG",
            "ICONC"
        ],
        "fk": [
            "T685",
            "TKB10SLA",
            "T683",
            "TKKAA",
            "TKB1A",
            "T163K",
            "T000",
            "TCK03",
            "TFKB",
            "T003O"
        ]
    },
    "T163K": {
        "f": [
            "MANDT",
            "KNTTP",
            "KZVBR",
            "KNTAE",
            "REUPD",
            "WEPOS",
            "WEPOV",
            "WEUNB",
            "WEUNV",
            "REPOS",
            "REPOV",
            "KOMOK",
            "KNTDY",
            "SOBKZ",
            "KONAB",
            "TAXIK",
            "XBNSB",
            "VRTKZ",
            "TWRKZ"
        ],
        "fk": [
            "T148",
            "T000"
        ]
    },
    "T148": {
        "f": [
            "MANDT",
            "SOBKZ",
            "SOBFI",
            "SOBLO",
            "SOBVO"
        ],
        "fk": []
    },
    "TKB10SLA": {
        "f": [
            "MANDT",
            "SLIST",
            "APROF"
        ],
        "fk": [
            "TKB1A",
            "T000"
        ]
    },
    "TMQ2": {
        "f": [
            "MANDT",
            "USEQU",
            "QBEST",
            "QLPET",
            "QPLAF",
            "QBANF",
            "QDISP",
            "QFAUF",
            "QFIR"
        ],
        "fk": [
            "T000"
        ]
    },
    "T439A": {
        "f": [
            "MANDT",
            "DISLS",
            "LOSVF",
            "LOSKZ",
            "PERAZ",
            "TERBV",
            "UELAP",
            "KFPKZ",
            "KFPAZ",
            "LGLVF",
            "LGLKZ",
            "LGPAZ",
            "LGTER",
            "LGUEL",
            "LGMIN",
            "LGMAX",
            "KZSPL",
            "LGSPL",
            "INTKA",
            "LGINT",
            "LGKND",
            "KZHOR",
            "HBVAR",
            "LASTL",
            "UNTKZ"
        ],
        "fk": []
    },
    "T438M": {
        "f": [
            "MANDT",
            "WERKS",
            "MTART",
            "BANER",
            "DISER",
            "UMTHZ",
            "FIXHZ",
            "PLAHZ",
            "SBDIS",
            "LIFKZ",
            "GTERM",
            "KZDRB",
            "XFAT1",
            "XFAT2",
            "VWVOR",
            "VWVER",
            "PRREG",
            "VRMOD",
            "VINT1",
            "VINT2",
            "STRGR",
            "RESHZ",
            "ANDIS",
            "AUART",
            "AUAR2",
            "PLSEL",
            "RVPKZ",
            "RESVP",
            "SHFLG",
            "SHZET",
            "MDACH",
            "PRASTA",
            "EXSGT",
            "BESAL",
            "BSART",
            "BARTL",
            "BARTU",
            "GRREL",
            "VERTR",
            "FKOBS",
            "EVAPR"
        ],
        "fk": [
            "T161",
            "T459S",
            "T465",
            "T001W",
            "T441R",
            "T46AC",
            "T461P",
            "T000",
            "T003O"
        ]
    },
    "T46AC": {
        "f": [
            "MANDT",
            "MDACH",
            "ACCFM",
            "ACCTO"
        ],
        "fk": [
            "T46AS",
            "T000"
        ]
    },
    "T46AS": {
        "f": [
            "MANDT",
            "MDACC"
        ],
        "fk": [
            "T000"
        ]
    },
    "T459S": {
        "f": [
            "MANDT",
            "PRASTA",
            "PTEXTE",
            "TAGEA",
            "WOCHEA",
            "VERTLW",
            "VERTLM"
        ],
        "fk": []
    },
    "T441R": {
        "f": [
            "MANDT",
            "PRREG"
        ],
        "fk": [
            "T000"
        ]
    },
    "T465": {
        "f": [
            "MANDT",
            "WERKS",
            "EVAPR",
            "BERR1",
            "BERY1",
            "BERG1",
            "BERR2",
            "BERY2",
            "BERG2",
            "BERR3",
            "BERY3",
            "BERG3",
            "PDAYS",
            "PWEEK",
            "PMONT",
            "PBUPR",
            "PMRPP",
            "MRPPP",
            "IPBED",
            "EPBED"
        ],
        "fk": [
            "T001W",
            "T439G"
        ]
    },
    "T439G": {
        "f": [
            "MANDT",
            "WERKS",
            "MRPPP",
            "MRPPS",
            "FCOPT",
            "CALHZ",
            "DATUV",
            "DATUB",
            "ERFDT"
        ],
        "fk": [
            "T001W",
            "T000"
        ]
    },
    "TMVF": {
        "f": [
            "MANDT",
            "MTVFP",
            "SUMAU",
            "SUMLF",
            "SWBZT",
            "ACENQ",
            "VERPN",
            "ONVBA",
            "RELRE",
            "KZRVP"
        ],
        "fk": []
    },
    "T437S": {
        "f": [
            "MANDT",
            "SFPRO",
            "AUART",
            "BACKF",
            "KSART",
            "LABOR",
            "BWAWA",
            "BWAWE",
            "REDST",
            "REDHZ",
            "BAKOR",
            "RRETR",
            "REPPT",
            "AUTOWE",
            "BWASC",
            "BWACO",
            "BWAWEM",
            "XFAN1",
            "BWAWAM",
            "BWACR",
            "PLGEN",
            "BWAWES",
            "BWAWAS",
            "BWASCS",
            "BWACOS",
            "BWAWEMS",
            "BWAWAMS",
            "BWACRS",
            "BCKFL",
            "AGREQ",
            "NODUM",
            "PRZST",
            "CHSMM",
            "RULES",
            "BWULACT",
            "KZTTZ",
            "RP_KANBAN"
        ],
        "fk": [
            "T683",
            "TPRRU",
            "T000",
            "T003O",
            "T434R"
        ]
    },
    "TPRRU": {
        "f": [
            "MANDT",
            "AUTYP",
            "PRZST",
            "PWEIN",
            "PWAUS",
            "PKOST",
            "PKAPA",
            "AWAUS",
            "AKOST"
        ],
        "fk": [
            "T000"
        ]
    },
    "RDPR": {
        "f": [
            "MANDT",
            "WERKS",
            "RDPRF",
            "RDZAE",
            "BDMNG",
            "VORMG",
            "RDMPO",
            "RDRGL",
            "CHKMELI",
            "CHKMEKU"
        ],
        "fk": [
            "TW06S",
            "T001W",
            "T000"
        ]
    },
    "TW06S": {
        "f": [
            "MANDT",
            "RDRGL",
            "MEINS",
            "SWPAUF",
            "SWPAB"
        ],
        "fk": [
            "T006",
            "T000"
        ]
    },
    "T439P": {
        "f": [
            "MANDT",
            "WERKS",
            "PERKZ",
            "AUFTL",
            "ANZTG",
            "ANZWO",
            "ANZPR"
        ],
        "fk": [
            "T001W",
            "T000"
        ]
    },
    "T610C": {
        "f": [
            "MANDT",
            "LAND1",
            "CASNR"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "TCNRPIP": {
        "f": [
            "MANDT",
            "RFPNT"
        ],
        "fk": [
            "T000"
        ]
    },
    "TKZSL": {
        "f": [
            "MANDT",
            "ZSCHL"
        ],
        "fk": [
            "T000"
        ]
    },
    "OIH5": {
        "f": [
            "MANDT",
            "HANTYP"
        ],
        "fk": []
    },
    "TWFPF": {
        "f": [
            "MANDT",
            "FPRFW",
            "KZCDM",
            "KZFTM",
            "DFTSP",
            "LIFSK",
            "DFTAB",
            "KZKRL",
            "SPLIT_IBD_BY_UC"
        ],
        "fk": [
            "TVAG",
            "TVLS",
            "T000"
        ]
    },
    "TVAG": {
        "f": [
            "MANDT",
            "ABGRU",
            "DRAGR",
            "EP_OFF",
            "FK_ERL",
            "KOWRR"
        ],
        "fk": [
            "T000"
        ]
    },
    "ZZZ_PS04": {
        "f": [
            "MANDT",
            "LANGU",
            "DESCR"
        ],
        "fk": [
            "T002",
            "T000"
        ]
    },
    "T377P": {
        "f": [
            "MANDT",
            "SERAIL",
            "SERSCHA",
            "SEREX",
            "EQTYP",
            "BSTVP",
            "IUID_COMPATIBLE",
            "UID_USED"
        ],
        "fk": [
            "T370T",
            "T000"
        ]
    },
    "T370T": {
        "f": [
            "MANDT",
            "EQTYP",
            "REFTP",
            "NUMKI",
            "NUMKE",
            "ZEIIN",
            "TPEIN",
            "MSTKZ",
            "AEBKZ",
            "PUEMA",
            "STADY",
            "STSMA",
            "SDEQT",
            "PARGR",
            "PARK1",
            "PARK2",
            "PARK3",
            "PARK4",
            "PARK5",
            "INFOW",
            "AMKNZ",
            "WFKNZ",
            "PASYN",
            "KZKSD",
            "KONFKNZ",
            "SDKNZ",
            "FHMKZ",
            "ELSE_KNZ",
            "ISU_KNZ",
            "TSEGTP",
            "VIEW_PROF",
            "NO_SER_ENQ",
            "BTMNS",
            "CC_KNZ",
            "AEBKZ_INS",
            "LFE_IND",
            "J_3GBAUKNZ"
        ],
        "fk": [
            "TJ20",
            "TPAR",
            "TVPG",
            "T000",
            "TQ80O",
            "TITOBPROF"
        ]
    },
    "TQ80O": {
        "f": [
            "MANDT",
            "INFO_WIND",
            "BEZUG",
            "CONTRACT",
            "CLASS",
            "SMOFN",
            "SMMAB",
            "SABTG",
            "SGMSAUS",
            "IAOFN",
            "IAABG",
            "PMIS_DAYS",
            "NOT_ANZ_OF",
            "NOT_ANZ_AB",
            "NOT_SEL_AB",
            "NOT_DAYS",
            "KLART",
            "KLART_TP",
            "AUTOMATIC"
        ],
        "fk": [
            "T000"
        ]
    },
    "TITOBPROF": {
        "f": [
            "MANDT",
            "SUBGRP",
            "PROFILE"
        ],
        "fk": [
            "T000"
        ]
    },
    "CKMLMV007": {
        "f": [
            "MANDT",
            "NSCHEMA"
        ],
        "fk": []
    },
    "T010O": {
        "f": [
            "MANDT",
            "OPVAR"
        ],
        "fk": [
            "T000"
        ]
    },
    "CKPH": {
        "f": [
            "MANDT",
            "KSTRG",
            "DATBI",
            "DATAB",
            "KOKRS",
            "BUKRS",
            "WERKS",
            "GSBER",
            "FUNC_AREA",
            "OBJNR",
            "UEKTR",
            "KTRTY",
            "VAKTR",
            "LTEXT",
            "ERNAM",
            "ERDAT",
            "AENAM",
            "AEDAT",
            "KSTAT",
            "STDAT",
            "LOEKZ",
            "OBJWR",
            "KVEWE",
            "KAPPL",
            "KALSM",
            "ZSCHL",
            "AWOBA",
            "AWSLS",
            "FCPMG",
            "PRCTR",
            "SAPRL",
            "KTRAT",
            "KALNR",
            "KLVAR",
            "LOEKENNZ",
            "KTRZB",
            "FERC_IND"
        ],
        "fk": [
            "TCURC",
            "TGSB",
            "TKA01",
            "FERC_C7",
            "T683",
            "ONR00",
            "T001W",
            "T001",
            "T681A",
            "TKV01",
            "TCK03",
            "T681V",
            "TFKB",
            "T000",
            "T821S"
        ]
    },
    "T039": {
        "f": [
            "MANDT",
            "ORIGN",
            "XTFST"
        ],
        "fk": [
            "T000"
        ]
    },
    "T416": {
        "f": [
            "MANDT",
            "STLAN",
            "PMPFE",
            "PMPKO",
            "PMPKA",
            "PMPRV",
            "PMPVS",
            "PMPIN",
            "PMPER"
        ],
        "fk": [
            "T000"
        ]
    },
    "TLGR": {
        "f": [
            "MANDT",
            "LADGR"
        ],
        "fk": []
    },
    "T8J9F": {
        "f": [
            "MANDT",
            "BUKRS",
            "ACLASS",
            "ANRANGE"
        ],
        "fk": [
            "T001",
            "T000"
        ]
    },
    "TWSG": {
        "f": [
            "MANDT",
            "SERVG"
        ],
        "fk": [
            "T000"
        ]
    },
    "TPGPRF": {
        "f": [
            "MANDT",
            "PROFID",
            "ASSINT",
            "ASSEXT",
            "DICOST",
            "DICOMM",
            "DICASH",
            "DIRA",
            "DIEVA",
            "DECOST",
            "DECOMM",
            "DECASH",
            "DSTOCK",
            "DIVARI",
            "DISCRP",
            "VERSI",
            "DILCOMM",
            "DILACT"
        ],
        "fk": []
    },
    "TLOG": {
        "f": [
            "MANDT",
            "LOGGR"
        ],
        "fk": []
    },
    "COCF_CU_SRTYPE": {
        "f": [
            "MANDT",
            "SRTYPE",
            "NO_GAPS",
            "USE_SIGN",
            "SIGN_STRATEGY",
            "VERIFY_SIGN",
            "ONE_REP",
            "USE_BUTTON_MAIL",
            "ORIGIN",
            "PROTECT_PDF"
        ],
        "fk": [
            "TC85"
        ]
    },
    "ZZZ_PS02": {
        "f": [
            "MANDT",
            "LANGU",
            "DESCR"
        ],
        "fk": [
            "T002",
            "T000"
        ]
    },
    "T8J0C": {
        "f": [
            "MANDT",
            "BUKRS",
            "BMETHOD",
            "CASHCALLID"
        ],
        "fk": [
            "T000"
        ]
    },
    "ZZZ_PS01": {
        "f": [
            "MANDT",
            "LANGU",
            "DESCR"
        ],
        "fk": [
            "T002",
            "T000"
        ]
    },
    "TQ02": {
        "f": [
            "MANDT",
            "QSSYS"
        ],
        "fk": [
            "T000"
        ]
    },
    "SKB1": {
        "f": [
            "MANDT",
            "BUKRS",
            "SAKNR",
            "BEGRU",
            "BUSAB",
            "DATLZ",
            "ERDAT",
            "ERNAM",
            "FDGRV",
            "FDLEV",
            "FIPLS",
            "FSTAG",
            "HBKID",
            "HKTID",
            "KDFSL",
            "MITKZ",
            "MWSKZ",
            "STEXT",
            "VZSKZ",
            "WAERS",
            "WMETH",
            "XGKON",
            "XINTB",
            "XKRES",
            "XLOEB",
            "XNKON",
            "XOPVW",
            "XSPEB",
            "ZINDT",
            "ZINRT",
            "ZUAWA",
            "ALTKT",
            "XMITK",
            "RECID",
            "FIPOS",
            "XMWNO",
            "XSALH",
            "BEWGP",
            "INFKY",
            "TOGRU",
            "XLGCLR",
            "MCAKEY"
        ],
        "fk": [
            "TZUN",
            "SKA1",
            "TCURC",
            "T8JJ",
            "T030S",
            "T056",
            "T035",
            "T001S",
            "T012K",
            "T043S",
            "T001",
            "T036",
            "J_1AINFSKS",
            "T012",
            "T000",
            "GLE_MCA_TMCAKEY",
            "T004F"
        ]
    },
    "T043S": {
        "f": [
            "MANDT",
            "BUKRS",
            "TOGRU",
            "BETRS",
            "BETRH",
            "PROZS",
            "PROZH",
            "PRVAL"
        ],
        "fk": [
            "T001",
            "T000"
        ]
    },
    "GLE_MCA_TMCAKEY": {
        "f": [
            "MANDT",
            "MCAKEY"
        ],
        "fk": []
    },
    "T001S": {
        "f": [
            "MANDT",
            "BUKRS",
            "BUSAB",
            "SNAME",
            "USNAM"
        ],
        "fk": [
            "T001",
            "T000"
        ]
    },
    "T012K": {
        "f": [
            "MANDT",
            "BUKRS",
            "HBKID",
            "HKTID",
            "BANKN",
            "BKONT",
            "WAERS",
            "REFZL",
            "DTAAI",
            "BNKN2",
            "FDGRP",
            "ABWAE",
            "HKONT",
            "WEKON",
            "MINDT",
            "HBID1",
            "HKID1",
            "HBID2",
            "HKID2",
            "WKKON",
            "WIKON",
            "BROLL",
            "XTPRB"
        ],
        "fk": [
            "TCURC",
            "T035",
            "T012K",
            "T001",
            "SKB1",
            "T000",
            "T012"
        ]
    },
    "T012": {
        "f": [
            "MANDT",
            "BUKRS",
            "HBKID",
            "BANKS",
            "BANKL",
            "TELF1",
            "STCD1",
            "NAME1",
            "SPRAS",
            "BUPLA",
            "VPAST"
        ],
        "fk": [
            "T005",
            "J_1BBRANCH",
            "T002",
            "T001",
            "T000"
        ]
    },
    "T056": {
        "f": [
            "MANDT",
            "VZSKZ",
            "KENNZ",
            "VZSKZ_L"
        ],
        "fk": []
    },
    "T030S": {
        "f": [
            "MANDT",
            "KTOPL",
            "KDFSL",
            "CURTP",
            "KSOLL",
            "KHABN",
            "GSOLL",
            "GHABN"
        ],
        "fk": [
            "T004",
            "SKA1",
            "T033",
            "T000"
        ]
    },
    "SKA1": {
        "f": [
            "MANDT",
            "KTOPL",
            "SAKNR",
            "XBILK",
            "SAKAN",
            "BILKT",
            "ERDAT",
            "ERNAM",
            "GVTYP",
            "KTOKS",
            "MUSTR",
            "VBUND",
            "XLOEV",
            "XSPEA",
            "XSPEB",
            "XSPEP",
            "MCOD1",
            "FUNC_AREA"
        ],
        "fk": [
            "T004",
            "SKA1",
            "SKM1",
            "T000",
            "T880",
            "T077S",
            "TFKB"
        ]
    },
    "SKM1": {
        "f": [
            "MANDT",
            "KTOPL",
            "MUSTR",
            "BEGRU",
            "BUSAB",
            "DATLZ",
            "ERDAT",
            "ERNAM",
            "FDGRV",
            "FDLEV",
            "FIPLS",
            "FSTAG",
            "HBKID",
            "HKTID",
            "KDFSL",
            "MITKZ",
            "MWSKZ",
            "STEXT",
            "VZSKZ",
            "WAERS",
            "WMETH",
            "XGKON",
            "XINTB",
            "XKRES",
            "XNKON",
            "XOPVW",
            "ZINDT",
            "ZINRT",
            "ZUAWA",
            "ALTKT",
            "XMITK",
            "RECID",
            "FIPOS",
            "XMWNO",
            "XSALH",
            "BEWGP",
            "INFKY",
            "XLGCLR"
        ],
        "fk": [
            "T004",
            "TZUN",
            "TCURC",
            "T030S",
            "T056",
            "T035",
            "T000"
        ]
    },
    "T077S": {
        "f": [
            "MANDT",
            "KTOPL",
            "KTOKS",
            "VONNR",
            "BISNR",
            "FAUSS",
            "LAYOUT_0",
            "LAYOUT_P",
            "LAYOUT_S"
        ],
        "fk": [
            "T004",
            "SKA1",
            "TAMLAY0",
            "T000"
        ]
    },
    "T033": {
        "f": [
            "MANDT",
            "BWBER",
            "CURTP",
            "CURTP2",
            "CURTP3",
            "BWMET",
            "VERSN",
            "FCV_DELTA",
            "USER_AUGDT",
            "FCV_DELTA_REV"
        ],
        "fk": [
            "T011",
            "T000",
            "T044A"
        ]
    },
    "T044A": {
        "f": [
            "MANDT",
            "BWMET",
            "XPOSD",
            "XKTOD",
            "XBEW2",
            "XSALK",
            "XSALR",
            "XSICH",
            "KURSS",
            "KURSH",
            "XNWPR",
            "XSNWP",
            "BLART",
            "XKTOM",
            "XAUFW",
            "XBEW1",
            "XFILE",
            "XSALB",
            "XNABW",
            "XPOST",
            "XRESET",
            "AP_GRUP",
            "AR_GRUP",
            "GL_GRUP",
            "MINDIFF",
            "KURS_REM"
        ],
        "fk": [
            "TCURV",
            "T000",
            "T003"
        ]
    },
    "T011": {
        "f": [
            "MANDT",
            "VERSN",
            "DSPRA",
            "ASPRA",
            "XERGS",
            "KTOPL",
            "AKTVA",
            "PSSVA",
            "ERGAK",
            "ERGPA",
            "ERGGV",
            "ZUORD",
            "XAUTO",
            "XFBER",
            "ANHNG"
        ],
        "fk": [
            "T004",
            "T002",
            "T000"
        ]
    },
    "T004F": {
        "f": [
            "MANDT",
            "BUKRS",
            "FSTAG",
            "FAUS1",
            "FAUS2"
        ],
        "fk": [
            "T000",
            "T004V"
        ]
    },
    "J_1AINFSKS": {
        "f": [
            "MANDT",
            "LAND1",
            "J_1AIFSKS",
            "J_1AMONACC",
            "J_1AMETINF",
            "J_1AINDXSP",
            "J_1ATBEDEP",
            "J_1APOSTI",
            "J_1AONLYSP",
            "J_1AFCURNEW"
        ],
        "fk": [
            "J_1AINFT04",
            "J_1AINFT20",
            "T005",
            "T000"
        ]
    },
    "J_1AINFT04": {
        "f": [
            "MANDT",
            "J_1ATBEDEP",
            "J_1ATPODEP"
        ],
        "fk": [
            "T000",
            "J_1AINFT12"
        ]
    },
    "J_1AINFT12": {
        "f": [
            "MANDT",
            "J_1ATPODEP"
        ],
        "fk": [
            "T000"
        ]
    },
    "J_1AINFT20": {
        "f": [
            "MANDT",
            "J_1AINDX",
            "J_1ACOINDP",
            "J_1AVERACP",
            "J_1ADECIMP",
            "J_1ACOINAP",
            "J_1ANOVERP"
        ],
        "fk": [
            "J_1AINFT22",
            "T000"
        ]
    },
    "J_1AINFT22": {
        "f": [
            "MANDT",
            "J_1AINDX",
            "J_1AVERSIO",
            "J_1AINFRND"
        ],
        "fk": [
            "J_1AINFT20",
            "T000"
        ]
    },
    "T604": {
        "f": [
            "MANDT",
            "LAND1",
            "STAWN",
            "BEMEH",
            "NIHON",
            "IMPMA",
            "MINOL"
        ],
        "fk": [
            "T006",
            "T005",
            "T000"
        ]
    },
    "T436A": {
        "f": [
            "MANDT",
            "WERKS",
            "FHORI",
            "ERHOR",
            "SICHZ",
            "VORGZ",
            "FREIZ"
        ],
        "fk": [
            "T001W"
        ]
    },
    "TCSCP_CONV_TYPE": {
        "f": [
            "MANDT",
            "CONV_TYPE"
        ],
        "fk": [
            "T000"
        ]
    },
    "WTYSCC_UPDT_CONT": {
        "f": [
            "MANDT",
            "UPDATE_CONTROL"
        ],
        "fk": []
    },
    "T370K": {
        "f": [
            "MANDT",
            "EQART"
        ],
        "fk": [
            "T000"
        ]
    },
    "T609G": {
        "f": [
            "MANDT",
            "LAND1",
            "GPNUM",
            "EBNUM",
            "WZNUM",
            "WENUM"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "TKO08": {
        "f": [
            "CLIENT",
            "KOKRS",
            "ABKRS",
            "AUMLG",
            "ASACH"
        ],
        "fk": [
            "TKA01",
            "T000"
        ]
    },
    "T014": {
        "f": [
            "MANDT",
            "KKBER",
            "WAERS",
            "STAFO",
            "PERIV",
            "CTLPC",
            "KLIMK",
            "SBGRP",
            "ALLCC"
        ],
        "fk": [
            "TCURC",
            "T691A",
            "T024B",
            "T000",
            "T009"
        ]
    },
    "T024B": {
        "f": [
            "MANDT",
            "SBGRP",
            "KKBER",
            "STEXT",
            "SMAIL"
        ],
        "fk": [
            "T014"
        ]
    },
    "T691A": {
        "f": [
            "MANDT",
            "CTLPC",
            "KKBER"
        ],
        "fk": [
            "T014",
            "T000"
        ]
    },
    "TCJ04": {
        "f": [
            "MANDT",
            "VERNR",
            "VERNA",
            "S_USRNAM"
        ],
        "fk": [
            "T000"
        ]
    },
    "PRPSS": {
        "f": [
            "MANDT",
            "PSPNR",
            "POSID",
            "POST1",
            "OBJNR",
            "PSPHI",
            "POSKI",
            "ERNAM",
            "ERDAT",
            "AENAM",
            "AEDAT",
            "VERNR",
            "VERNA",
            "ASTNR",
            "ASTNA",
            "PBUKR",
            "PGSBR",
            "PKOKR",
            "PRCTR",
            "PRART",
            "STUFE",
            "PLAKZ",
            "BELKZ",
            "FAKKZ",
            "NPFAZ",
            "ZUORD",
            "TRMEQ",
            "KVEWE",
            "KAPPL",
            "KALSM",
            "ZSCHL",
            "ABGSL",
            "AKOKR",
            "AKSTL",
            "FKOKR",
            "FKSTL",
            "FABKL",
            "PSPRI",
            "EQUNR",
            "TPLNR",
            "PWPOS",
            "WERKS",
            "TXTSP",
            "SLWID",
            "USR00",
            "USR01",
            "USR02",
            "USR03",
            "USR04",
            "USE04",
            "USR05",
            "USE05",
            "USR06",
            "USE06",
            "USR07",
            "USE07",
            "USR08",
            "USR09",
            "USR10",
            "USR11",
            "KOSTL",
            "KTRG",
            "BERST",
            "BERTR",
            "BERKO",
            "BERBU",
            "CLASF",
            "SPSNR",
            "SCOPE",
            "XSTAT",
            "TXJCD",
            "ZSCHM",
            "IMPRF",
            "EVGEW",
            "AENNR",
            "SUBPR",
            "POSTU",
            "PLINT",
            "LOEVM",
            "KZBWS",
            "GRPKZ",
            "PGPRF",
            "STORT",
            "FUNC_AREA",
            "POSID_EDIT",
            "VNAME",
            "RECID",
            "ETYPE",
            "OTYPE",
            "JIBCL",
            "JIBSA",
            "ADPSP"
        ],
        "fk": [
            "T006",
            "TTXJ",
            "T499S",
            "TGSB",
            "T8J6C",
            "T001W",
            "IFLOT",
            "PRTP",
            "T000",
            "T8JG",
            "TFACD",
            "T8J6A",
            "CSKS",
            "T683",
            "TCJ05",
            "T8JV",
            "TAPRF",
            "T002",
            "TPGPRF",
            "T681V",
            "T681A",
            "TCN00",
            "TCJ04",
            "TKA01",
            "TKKAA",
            "TCJ1",
            "PROJS",
            "EQUI",
            "TCURC",
            "T8JJ",
            "TPI01",
            "ONR00",
            "AENR",
            "T001",
            "CKPH"
        ]
    },
    "IFLOT": {
        "f": [
            "MANDT",
            "TPLNR",
            "MLANG",
            "TPLKZ",
            "FLTYP",
            "TPLMA",
            "ERDAT",
            "ERNAM",
            "AEDAT",
            "AENAM",
            "DATAB",
            "BEGRU",
            "TRPNR",
            "PSTAE",
            "STNAM",
            "LVORM",
            "SUBMT",
            "SUBMTI",
            "MAPAR",
            "MAPARI",
            "IEQUI",
            "IEQUII",
            "EINZL",
            "EINZLI",
            "IWERK",
            "IWERKI",
            "INGRP",
            "INGRPI",
            "PM_OBJTY",
            "LGWID",
            "LGWIDI",
            "RBNR",
            "RBNR_I",
            "ILOAN",
            "OBJNR",
            "POSNR",
            "ISTYP",
            "PREMS",
            "EQART",
            "INVNR",
            "GROES",
            "BRGEW",
            "GEWEI",
            "ANSWT",
            "WAERS",
            "ANSDT",
            "HERST",
            "HERLD",
            "BAUJJ",
            "BAUMM",
            "TYPBZ",
            "EMATN",
            "SERGE",
            "HANDLE",
            "TSEGTP",
            "FLLB_DUTY",
            "FLLB_HIDE",
            "IFLOT_SRTYPE",
            "IFLOT_SNTYPE"
        ],
        "fk": [
            "T006",
            "IFLOT",
            "T370K",
            "T024I",
            "T000",
            "T370F",
            "T005",
            "T002",
            "MARA",
            "CRID",
            "IRLOT",
            "TQ80",
            "T399I",
            "ILOA",
            "TCURC",
            "T370S",
            "T370B",
            "ONR00",
            "T352B"
        ]
    },
    "T399I": {
        "f": [
            "MANDT",
            "IWERK",
            "DTVOR",
            "DAUNE",
            "ARBEH"
        ],
        "fk": [
            "T006",
            "T001W",
            "T000"
        ]
    },
    "IRLOT": {
        "f": [
            "MANDT",
            "TRPNR",
            "MLANG",
            "TPLKZ",
            "RLTYP",
            "TRPMA",
            "ERDAT",
            "ERNAM",
            "AEDAT",
            "AENAM",
            "BEGRU",
            "LVORM",
            "SUBMT",
            "MAPAR",
            "IEQUI",
            "IEQUII",
            "EINZL",
            "EINZLI",
            "IWERK",
            "IWERKI",
            "INGRP",
            "INGRPI",
            "PM_OBJTY",
            "LGWID",
            "LGWIDI",
            "RBNR",
            "RBNR_I",
            "ABCKZ",
            "ABCKZI",
            "OBJNR"
        ],
        "fk": [
            "CRID",
            "T370S",
            "T370B",
            "ONR00",
            "IRLOT",
            "T370R",
            "T370C",
            "T002",
            "T024I",
            "MARA",
            "T000",
            "T399I",
            "T352B"
        ]
    },
    "T370R": {
        "f": [
            "MANDT",
            "RLTYP",
            "STSMA",
            "MPTYP"
        ],
        "fk": [
            "TJ20",
            "T370P",
            "T000"
        ]
    },
    "T370P": {
        "f": [
            "MANDT",
            "MPTYP",
            "SUNIQ",
            "CODCT",
            "MRMES",
            "TOLER",
            "VALID",
            "LFE_IND",
            "COND_IND"
        ],
        "fk": [
            "T000",
            "TQ15"
        ]
    },
    "T024I": {
        "f": [
            "MANDT",
            "IWERK",
            "INGRP",
            "INNAM",
            "INTEL",
            "AUART_WP",
            "SMTP_ADDR"
        ],
        "fk": [
            "T003O",
            "T399I",
            "T000"
        ]
    },
    "CRID": {
        "f": [
            "MANDT",
            "OBJTY",
            "OBJID"
        ],
        "fk": [
            "T000"
        ]
    },
    "T370C": {
        "f": [
            "MANDT",
            "ABCKZ"
        ],
        "fk": [
            "T000"
        ]
    },
    "T370S": {
        "f": [
            "MANDT",
            "TPLKZ",
            "EDITM",
            "STUFM"
        ],
        "fk": [
            "T000"
        ]
    },
    "ILOA": {
        "f": [
            "MANDT",
            "ILOAN",
            "TPLNR",
            "ABCKZ",
            "ABCKZI",
            "EQFNR",
            "EQFNRI",
            "SWERK",
            "SWERKI",
            "STORT",
            "STORTI",
            "MSGRP",
            "MSGRPI",
            "BEBER",
            "BEBERI",
            "CR_OBJTY",
            "PPSID",
            "PPSIDI",
            "GSBER",
            "GSBERI",
            "KOKRS",
            "KOKRSI",
            "KOSTL",
            "KOSTLI",
            "PROID",
            "PROIDI",
            "BUKRS",
            "BUKRSI",
            "ANLNR",
            "ANLNRI",
            "ANLUN",
            "ANLUNI",
            "DAUFN",
            "DAUFNI",
            "AUFNR",
            "AUFNRI",
            "TPLNRI",
            "VKORG",
            "VKORGI",
            "VTWEG",
            "VTWEGI",
            "SPART",
            "SPARTI",
            "ADRNR",
            "ADRNRI",
            "OWNER",
            "VKBUR",
            "VKGRP"
        ],
        "fk": [
            "T499S",
            "TGSB",
            "T001W",
            "IFLOT",
            "ADRC",
            "T370C",
            "T000",
            "TVTA",
            "TVKBZ",
            "TVKOV",
            "CSKS",
            "ANLH",
            "T357",
            "CRID",
            "TKA01",
            "TVBVK",
            "ANLA",
            "PRPS",
            "TVKO",
            "AUFK",
            "T001"
        ]
    },
    "T499S": {
        "f": [
            "MANDT",
            "WERKS",
            "STAND",
            "KTEXT",
            "ADDRNUM"
        ],
        "fk": [
            "T001W",
            "T000"
        ]
    },
    "ANLA": {
        "f": [
            "MANDT",
            "BUKRS",
            "ANLN1",
            "ANLN2",
            "ANLKL",
            "GEGST",
            "ANLAR",
            "ERNAM",
            "ERDAT",
            "AENAM",
            "AEDAT",
            "XLOEV",
            "XSPEB",
            "FELEI",
            "KTOGR",
            "XOPVW",
            "ANLTP",
            "ZUJHR",
            "ZUPER",
            "ZUGDT",
            "AKTIV",
            "ABGDT",
            "DEAKT",
            "GPLAB",
            "BSTDT",
            "ORD41",
            "ORD42",
            "ORD43",
            "ORD44",
            "ANLUE",
            "ZUAWA",
            "ANEQK",
            "ANEQS",
            "LIFNR",
            "LAND1",
            "LIEFE",
            "HERST",
            "EIGKZ",
            "AIBN1",
            "AIBN2",
            "AIBDT",
            "URJHR",
            "URWRT",
            "ANTEI",
            "PROJN",
            "EAUFN",
            "MEINS",
            "MENGE",
            "TYPBZ",
            "IZWEK",
            "INKEN",
            "IVDAT",
            "INVZU",
            "VMGLI",
            "XVRMW",
            "WRTMA",
            "EHWRT",
            "AUFLA",
            "EHWZU",
            "EHWNR",
            "GRUVO",
            "GREIN",
            "GRBND",
            "GRBLT",
            "GRLFD",
            "FLURK",
            "FLURN",
            "FIAMT",
            "STADT",
            "GRUND",
            "FEINS",
            "GRUFL",
            "INVNR",
            "VBUND",
            "SPRAS",
            "TXT50",
            "TXA50",
            "XLTXID",
            "XVERID",
            "XTCHID",
            "XKALID",
            "XHERID",
            "XLEAID",
            "LEAFI",
            "LVDAT",
            "LKDAT",
            "LEABG",
            "LEJAR",
            "LEPER",
            "LRYTH",
            "LEGEB",
            "LBASW",
            "LKAUF",
            "LMZIN",
            "LZINS",
            "LTZBW",
            "LKUZA",
            "LKUZI",
            "LLAVB",
            "LEANZ",
            "LVTNR",
            "LETXT",
            "XAKTIV",
            "ANUPD",
            "LBLNR",
            "XV0DT",
            "XV0NM",
            "XV1DT",
            "XV1NM",
            "XV2DT",
            "XV2NM",
            "XV3DT",
            "XV3NM",
            "XV4DT",
            "XV4NM",
            "XV5DT",
            "XV5NM",
            "XV6DT",
            "XV6NM",
            "AIMMO",
            "OBJNR",
            "LEART",
            "LVORS",
            "GDLGRP",
            "POSNR",
            "XERWRT",
            "XAFABCH",
            "XANLGR",
            "MCOA1",
            "XINVM",
            "SERNR",
            "UMWKZ",
            "LRVDAT",
            "ACT_CHANGE_PM",
            "HAS_TDDP",
            "LAST_REORG_DATE"
        ],
        "fk": [
            "T006",
            "TZUN",
            "T095A",
            "ANKA",
            "T880",
            "T087U",
            "T087G",
            "T005",
            "T083L",
            "T002",
            "LFA1",
            "T093C",
            "ANLH",
            "T097",
            "T092",
            "T087I",
            "T087",
            "PRPS",
            "ONR00",
            "T087K",
            "T098"
        ]
    },
    "T098": {
        "f": [
            "MANDT",
            "GRUND"
        ],
        "fk": []
    },
    "T093C": {
        "f": [
            "MANDT",
            "BUKRS",
            "BUKRSN",
            "PERIV",
            "MONMIT",
            "XRUMPF",
            "DATUM",
            "AFAPL",
            "VRMAFB",
            "BKRAKT",
            "XREBUW",
            "XANUEB",
            "LGJAHR",
            "AFBLRT",
            "XVRSKU",
            "MWSKZVA",
            "MWSKZAA",
            "KZRBWB",
            "APROF",
            "TTECH",
            "TKUND",
            "XANLE",
            "VARBZD",
            "J_1AAOFFCL",
            "XZORG",
            "APERBLRT",
            "XNOSKONTO",
            "XDFYV",
            "REVDMETH"
        ],
        "fk": [
            "T007A",
            "T003",
            "TABVA",
            "T093N",
            "T093",
            "TKB1A",
            "T001",
            "T000",
            "T096",
            "T009"
        ]
    },
    "T093": {
        "f": [
            "MANDT",
            "AFAPL",
            "AFABER",
            "XSTORE",
            "ABVOR1",
            "AFABE1",
            "ANTEI1",
            "ABVOR2",
            "AFABE2",
            "ANTEI2",
            "ABVOR3",
            "AFABE3",
            "ANTEI3",
            "ABVOR4",
            "AFABE4",
            "ANTEI4",
            "VZANSW",
            "VZREST",
            "BUHBKT",
            "VIEW0",
            "VIEW1",
            "VIEW2",
            "VIEW3",
            "VIEW4",
            "VIEW5",
            "VIEW6",
            "VZINVZ",
            "VZAWMA",
            "VZNAFA",
            "VZSAFA",
            "VZAAFA",
            "VZINDW",
            "VZZINS",
            "VZINDA",
            "AFABEO",
            "XBEREP",
            "CORRBE",
            "GAFABER",
            "LDGRP_GL",
            "XAFABER",
            "ABWBER",
            "AREA_USAGE_IND"
        ],
        "fk": [
            "T093G",
            "T093",
            "T000",
            "FAGL_TLDGRP",
            "T096"
        ]
    },
    "FAGL_TLDGRP": {
        "f": [
            "MANDT",
            "LDGRP",
            "APPL",
            "SUBAPPL"
        ],
        "fk": [
            "FAGL_SUBAPPL",
            "FAGL_APPL"
        ]
    },
    "FAGL_APPL": {
        "f": [
            "APPL"
        ],
        "fk": []
    },
    "FAGL_SUBAPPL": {
        "f": [
            "SUBAPPL"
        ],
        "fk": []
    },
    "T093G": {
        "f": [
            "MANDT",
            "GAFABER",
            "XSTORE"
        ],
        "fk": []
    },
    "T093N": {
        "f": [
            "MANDT",
            "BUKRSN"
        ],
        "fk": []
    },
    "TABVA": {
        "f": [
            "MANDT",
            "VARIANTE"
        ],
        "fk": []
    },
    "ANLH": {
        "f": [
            "MANDT",
            "BUKRS",
            "ANLN1",
            "LUNTN",
            "LANEP",
            "ANUPD",
            "FUNTN",
            "ANLHTXT"
        ],
        "fk": [
            "ANLA",
            "T001"
        ]
    },
    "TVKBZ": {
        "f": [
            "MANDT",
            "VKORG",
            "VTWEG",
            "SPART",
            "VKBUR"
        ],
        "fk": [
            "TVKO",
            "TVKOV",
            "TVBUR",
            "TVKOS",
            "T000"
        ]
    },
    "TVBUR": {
        "f": [
            "MANDT",
            "VKBUR",
            "ADRNR",
            "ERNAM",
            "TXNAM_ADR",
            "TXNAM_KOP",
            "TXNAM_FUS",
            "TXNAM_GRU",
            "TXNAM_SDB",
            "ISPVKBURUE"
        ],
        "fk": [
            "TVBUR"
        ]
    },
    "TVKOS": {
        "f": [
            "MANDT",
            "VKORG",
            "SPART",
            "SPAKU",
            "SPAKO",
            "SPAAU"
        ],
        "fk": [
            "TSPA",
            "TVKO",
            "T000"
        ]
    },
    "TVKOV": {
        "f": [
            "MANDT",
            "VKORG",
            "VTWEG",
            "VTWKO",
            "VTWAU",
            "VTWKU",
            "VLGFI",
            "VLTYP",
            "VLKEB"
        ],
        "fk": [
            "T001W",
            "TVKO",
            "T000",
            "TVTW"
        ]
    },
    "T357": {
        "f": [
            "MANDT",
            "WERKS",
            "BEBER",
            "FING",
            "TELE"
        ],
        "fk": [
            "T001W",
            "T000"
        ]
    },
    "TVTA": {
        "f": [
            "MANDT",
            "VKORG",
            "VTWEG",
            "SPART",
            "VTWKU",
            "SPAKU",
            "VTWKO",
            "SPAKO",
            "MABER",
            "VKOAU",
            "VTWAU",
            "SPAAU",
            "GSBER",
            "REGGB",
            "REVFP",
            "FIXMG",
            "AFIND",
            "KKBER",
            "J_1ASNR",
            "J_1AESNR",
            "ISP_VB",
            "ISM_BP_VTB_GROUP",
            "J_3GKBAUL",
            "OID_CHECKC"
        ],
        "fk": [
            "J_1BBRANCH",
            "TVKO",
            "TGSB",
            "TVKOV",
            "TJH_GR_SALESAREA",
            "T047M",
            "JVTBEZIRK",
            "TVKOS",
            "TVTW",
            "T014",
            "TSPA"
        ]
    },
    "JVTBEZIRK": {
        "f": [
            "MANDT",
            "BEZIRK",
            "XVRTBEZIRK",
            "XTITBEZIRK",
            "XBLGBEZIRK",
            "XVERMBEZ",
            "XVERBBEZ",
            "KURZTEXT",
            "LANGTEXT",
            "TITLPOTNTL",
            "PROSPOTNTL",
            "ZAHL_STOPP",
            "ZAHL_STOPA"
        ],
        "fk": [
            "T000"
        ]
    },
    "T047M": {
        "f": [
            "MANDT",
            "BUKRS",
            "MABER",
            "CHAR1"
        ],
        "fk": [
            "T001",
            "T000"
        ]
    },
    "TJH_GR_SALESAREA": {
        "f": [
            "MANDT",
            "GR_SA"
        ],
        "fk": []
    },
    "TVBVK": {
        "f": [
            "MANDT",
            "VKBUR",
            "VKGRP"
        ],
        "fk": [
            "TVBUR",
            "T000",
            "TVKGR"
        ]
    },
    "TVKGR": {
        "f": [
            "MANDT",
            "VKGRP"
        ],
        "fk": []
    },
    "T370F": {
        "f": [
            "MANDT",
            "FLTYP",
            "STSMA",
            "PARGR",
            "SALES",
            "ELSE_KNZ",
            "MPTYP",
            "CHDOC",
            "INFOW",
            "TSEGTP",
            "VIEW_PROF",
            "CHDOC_INS",
            "LFE_IND"
        ],
        "fk": [
            "TJ20",
            "T370P",
            "TVPG",
            "T000",
            "TQ80O",
            "TITOBPROF"
        ]
    },
    "TQ80": {
        "f": [
            "MANDT",
            "QMART",
            "QMTYP",
            "RBNR",
            "HERKZ",
            "BEZZT",
            "QMNUK",
            "AUART",
            "HSCRTP",
            "OSCRTP",
            "PSCRTP",
            "PARGR",
            "STSMA",
            "SMSTSMA",
            "ARTPR",
            "SDAUART",
            "COAUART",
            "PARVW_KUND",
            "PARVW_AP",
            "PARVW_INT",
            "PARVW_LIEF",
            "PARVW_HER",
            "PARVW_VERA",
            "PARVW_AUTO",
            "PARVW_QMSM",
            "KLAKT",
            "INFO_WIND",
            "SERWI",
            "ESCAL",
            "FEKAT",
            "URKAT",
            "MAKAT",
            "MFKAT",
            "OTKAT",
            "SAKAT",
            "STAFO",
            "QMWAERS",
            "QMWERT",
            "FBS_CREATE",
            "FBS_DYNNR",
            "TDFORMAT",
            "KZEILE",
            "USERSCR1",
            "USERSCR2",
            "USERSCR3",
            "USERSCR4",
            "USERSCR5",
            "QMLTXT01",
            "QMLTXT02",
            "AUART2",
            "EARLY_NUM",
            "AUTOM_CONT",
            "MATKZ",
            "KUKZ",
            "MATKUKZ",
            "LIKZ",
            "MATLIKZ",
            "MATCHKZ",
            "MATCHKUKZ",
            "MATCHLIKZ",
            "FEGRPKZ",
            "FECODKZ",
            "FOGRPKZ",
            "FOCODKZ",
            "MOD",
            "ICON1",
            "ICON2",
            "VERS",
            "ZEITRAUM",
            "TDOBJECT",
            "TDNAME",
            "TDID",
            "CMCHECK_SM",
            "CMGRA",
            "PARVW_PAGE",
            "CUA_FBS",
            "ROLE_VERA",
            "PERMIT",
            "PARVW_GEH",
            "ROLE_GEH",
            "ROLE_QMSM",
            "PROCESS"
        ],
        "fk": [
            "TMCB",
            "TFDIR",
            "T355E",
            "T000",
            "T003O",
            "STXH",
            "TJ20",
            "TQ80_PR",
            "TPAR",
            "T691D",
            "TQ15",
            "TQ80O",
            "TVAK",
            "TTXID",
            "TQBT",
            "TCURC",
            "TTXOB",
            "T355R",
            "TQ8T",
            "TVPG",
            "T356A",
            "T352B"
        ]
    },
    "TQBT": {
        "f": [
            "SCREENTY",
            "MPOOLORT",
            "PANELORT",
            "SCRDBERN",
            "MPHEADER",
            "SCRHEADER"
        ],
        "fk": []
    },
    "TVAK": {
        "f": [
            "MANDT",
            "AUART",
            "KOPGR",
            "LFARV",
            "FKARV",
            "FKARA",
            "NUMKI",
            "NUMKE",
            "INCPO",
            "UEVOR",
            "AUGRP",
            "UMFNG",
            "DABAR",
            "PARGR",
            "FAKSK",
            "LIFSK",
            "TRVOG",
            "SPAPO",
            "SPAPR",
            "VSTRM",
            "TRTRM",
            "TXN08",
            "DIAFE",
            "FELDK",
            "DATVO",
            "AWAHR",
            "VBTYP",
            "VSBED",
            "BEZOB",
            "TXTGR",
            "KALVG",
            "ERNAM",
            "FEHGR",
            "INFLS",
            "KUNN0",
            "KLIMP",
            "KALSM",
            "KAPPL",
            "KSCHL",
            "SPERR",
            "STGAK",
            "KALSU",
            "KALLI",
            "KALAU",
            "FKAIV",
            "CMGRA",
            "OBJART_HIN",
            "OBJART_VER",
            "HITYP_PR",
            "ABRVW",
            "ABDIS",
            "KPRGBZ",
            "PRDATV",
            "VLAUF",
            "GUEBGV",
            "VTERL",
            "HNWAG",
            "HNWKM",
            "STSMA",
            "LISOF",
            "AUARA",
            "KORLI",
            "VPROF",
            "AUFAK",
            "DIAPA",
            "FPART",
            "KSCHL_KO",
            "EXCOK",
            "EXMOD",
            "KSKPF",
            "KSPOS",
            "LIFSM",
            "FKTKT",
            "EXDIA",
            "ABGRU_IN",
            "PRBST",
            "SCHEME_GRP",
            "HNWGK",
            "PUSH_GRP",
            "ABRUF_PART",
            "RPART",
            "AKTFI",
            "VBKLT",
            "J_1BNFTYPE",
            "INCUP",
            "BABSS",
            "EMPFI",
            "DELCF",
            "CCPGR",
            "EXCBC",
            "EXCEM",
            "EXCLG",
            "HNWK2",
            "EXTNR_RMA",
            "TDID",
            "AAUART1",
            "AAUART2",
            "RFPA_SW",
            "VARIANT",
            "ATPGM",
            "VERLI",
            "TENUR",
            "J_1AFCTYPE",
            "FAUPR",
            "PVBSM",
            "BPROC",
            "ERMAT",
            "BSTVO",
            "EXTCONT",
            "KSCHL_BUDGET",
            "KSCHL_CAPS",
            "MSR_ACTIVE",
            "MSR_NEXT_NUMBER",
            "MSR_AUARA",
            "MSR_BILLING_BLK",
            "MSR_CM_IMMEDIATE",
            "MSR_LFART",
            "FCS_ACTIVE",
            "MSR_DELIVERY_BLK",
            "MSR_SDF_AUART",
            "RDP_PROFILE",
            "FKART_MEV_POST",
            "FKART_MEV_POST_IB",
            "VCLASSIFIC",
            "KALPG",
            "KALVL",
            "/SAPMP/PDACT",
            "/SAPMP/PPROT",
            "/SAPMP/PUSER",
            "/SAPMP/PAUSW",
            "/SAPMP/GAUF",
            "AD01AURET",
            "AD04NUMFLG",
            "KALGT",
            "UNITSALE",
            "CPFREE",
            "NO_BUTTON",
            "XZEROORDER",
            "XASSORTMENT",
            "ISM_CONTRACT",
            "ISM_WERKSDET",
            "J_3GKBAUL",
            "MILL_SE_ATNAM",
            "OIPIPEVAL",
            "OIISOILPD",
            "OICSEGI",
            "OIMSG_PRD",
            "OIMSG_SHP",
            "OIMSG_QTY",
            "OIMSG_TRM",
            "OIMSG_DAT",
            "OIMSG_UOM",
            "OIPRTFNC",
            "OIFCONTI",
            "OICFKARTDI",
            "OIPARVW1",
            "OIPARVW2",
            "OIPARVW3",
            "OIPARVW4",
            "OIPARVW5",
            "OIPARVW6",
            "OIPARVW7",
            "OIPARVW8",
            "OIPARVW9",
            "OISUBHEAD",
            "OISUBITEM",
            "OIUSEREXIT",
            "OIU_FKARA"
        ],
        "fk": [
            "L2TC_RDP_PROFILE",
            "TVHF",
            "TVLK",
            "T000",
            "TVKK",
            "TVFAP",
            "TOADV",
            "TJ20",
            "THIT",
            "J_1BAA",
            "TVHB",
            "TPAR",
            "TVFS",
            "T683",
            "TVVD",
            "T691D",
            "TFPLA",
            "T681A",
            "SHDTVCIU",
            "TVFK",
            "TVAK",
            "TVAG",
            "T691R",
            "TVLS",
            "TPVV",
            "TVSF",
            "TVSB",
            "T685",
            "TVKV",
            "TVUV",
            "TVCAA",
            "TVPG",
            "TTXG",
            "TVBPROC",
            "TVLV",
            "TVGRPS"
        ]
    },
    "TPVV": {
        "f": [
            "MANDT",
            "PVBSM"
        ],
        "fk": []
    },
    "TVHF": {
        "f": [
            "MANDT",
            "OBJEKT",
            "FAWGR"
        ],
        "fk": []
    },
    "TVSB": {
        "f": [
            "MANDT",
            "VSBED"
        ],
        "fk": []
    },
    "TVFAP": {
        "f": [
            "MANDT",
            "FAUPR",
            "TPLST",
            "SHTYP",
            "KALSM",
            "SABWL"
        ],
        "fk": [
            "T683",
            "TTDS",
            "TVTK",
            "T000"
        ]
    },
    "TVTK": {
        "f": [
            "MANDT",
            "SHTYP",
            "VBTYP",
            "NUMKI",
            "NUMKE",
            "KOPGR",
            "STERM",
            "ABFER",
            "ABWST",
            "BFART",
            "VSART",
            "VSAVL",
            "VSANL",
            "LAUFK",
            "KALSM",
            "KAPPL",
            "TXTGR",
            "PARGR",
            "SVTRA",
            "PROFIDNETZ",
            "DTMEG",
            "DTMEV",
            "KSCHL",
            "ROUTE_VLF",
            "SPEDI_VLF",
            "ABF_ACTPRF",
            "FKART",
            "STGTA",
            "FRKRL",
            "FRKRL_STR",
            "FRKRL_UMP",
            "FRKRL_GRP",
            "ROUTE_STAG",
            "CHGDOC_SHTYP",
            "DIS_ACTPRF",
            "REG_ACTPRF",
            "LBG_ACTPRF",
            "LEN_ACTPRF",
            "TBG_ACTPRF",
            "TEN_ACTPRF",
            "PLANNING_PROFILE",
            "TSEGTP",
            "KOPRF",
            "TERMIN_VLF",
            "TRINF_UEB",
            "PMODE_VD",
            "PMODE_ND",
            "KZHULFR",
            "VTDWM",
            "BORGR_PROCTYP",
            "BORGR_AUTO_REG",
            "BORGR_AUTO_LEN",
            "BORGR_EXTI1_UNQ",
            "BORGR_EXTI1_MUST",
            "BORGR_EXTI1_EEDI",
            "BORGR_EXTI1_EDIA",
            "BORGR_EXTI2_UNQ",
            "BORGR_EXTI2_MUST",
            "BORGR_EXTI2_EEDI",
            "BORGR_EXTI2_EDIA",
            "BORGR_SIGNI_UNQ",
            "BORGR_SIGNI_MUST",
            "BORGR_SIGNI_EEDI",
            "BORGR_SIGNI_EDIA",
            "BORGR_TPBEZ_UNQ",
            "BORGR_TPBEZ_MUST",
            "BORGR_TPBEZ_EEDI",
            "BORGR_TPBEZ_EDIA",
            "BORGR_ASN_NOT_EX"
        ],
        "fk": [
            "TTSEGTPLH",
            "T173",
            "TCN41",
            "TVDSS",
            "T683",
            "TVPG",
            "VTSGT",
            "TVTF",
            "T000",
            "T681A",
            "TTXG"
        ]
    },
    "VTSGT": {
        "f": [
            "MANDT",
            "STGTA"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCN41": {
        "f": [
            "MANDT",
            "PLNAW",
            "PROFIDNETZ",
            "FLG_ERF_H",
            "ESOKZ",
            "EKORG",
            "KSTAR_FRMD",
            "STEUS_WORK",
            "STEUS_FRMD",
            "STEUS_PRIM",
            "KSTAR_COST",
            "KSTAR_SERV",
            "STEUS_SERV",
            "DAUNE",
            "ARBEH",
            "WAERS",
            "SLWID",
            "LVARI",
            "INDET",
            "BUKRS",
            "AOB_KEY",
            "VORNR_DEL",
            "TERKZ",
            "AUART",
            "WERKS",
            "DISPO",
            "RSCHL_OFER",
            "RSCHL_OFRD",
            "RSCHL_UFER",
            "RSCHL_UFRD",
            "RSCHL_OCST",
            "RSCHL_UCST",
            "GR_PRF_GR",
            "GR_PRF_NAM",
            "FHORI",
            "NETSTUFE",
            "VAGRP",
            "MSGTY",
            "AOB_DARST",
            "VRG_DARST",
            "NO_DISP",
            "COLKZ_ELEM",
            "COLKZ_TEIL",
            "COLKZ_MLST",
            "COLKZ_DOKU",
            "COLKZ_MAT",
            "VSPRF",
            "CLASF",
            "PROFILE_ID",
            "BALK_PROF",
            "KBED",
            "KKALKR",
            "LSTVAR",
            "MATKL",
            "MATEXIT",
            "EKGRP",
            "MATKL_FRMD",
            "EKGRP_FRMD",
            "POSNR_MAT",
            "SCHED_END",
            "SCEND_ACT",
            "NT_SEARCH1",
            "NT_SEARCH2",
            "NT_SEARCH3",
            "MFLIC",
            "MEINH_FRMD",
            "MEINH_SERV",
            "KSTAR_MATVORPL",
            "KZERB",
            "VALID",
            "VALID_VG",
            "SUBST",
            "SUBST_VG",
            "FPART",
            "IPPS",
            "TEMPLATE_KEY",
            "PSACL",
            "PSACLH"
        ],
        "fk": [
            "T006",
            "GB92",
            "T024D",
            "T436A",
            "T001W",
            "TWCOL",
            "GB93",
            "TCNG",
            "T000",
            "T003O",
            "TCA14",
            "TCBP",
            "TCN51",
            "T024A",
            "TCNVL",
            "TCN00",
            "TCO60",
            "TCNMF",
            "T482",
            "TCY30",
            "T430",
            "T023",
            "T024",
            "T024E",
            "TCURC",
            "T001",
            "TCA09",
            "CSKA"
        ]
    },
    "TCN51": {
        "f": [
            "MANDT",
            "VER_PROFIL",
            "FLG_PD",
            "FLG_PR",
            "FLG_NP",
            "FLG_NV",
            "FLG_OF",
            "FLG_OK",
            "FLG_NR",
            "FLG_EL",
            "FLG_TX",
            "FLG_MS",
            "FLG_KB",
            "FLG_CO",
            "FLG_SD",
            "FLG_EV",
            "FLG_2",
            "FLG_3",
            "FLG_4",
            "FLG_5",
            "FLG_6",
            "FLG_LT",
            "FLG_DK"
        ],
        "fk": [
            "T000"
        ]
    },
    "T024A": {
        "f": [
            "MANDT",
            "WERKS",
            "FEVOR",
            "TXT"
        ],
        "fk": [
            "T001W",
            "T000"
        ]
    },
    "TWCOL": {
        "f": [
            "MANDT",
            "COLOR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCNG": {
        "f": [
            "MANDT",
            "PRF_GRUPPE",
            "PRF_NAME",
            "PRF_INDEX",
            "KNOT_PROF",
            "KANT_PROF",
            "CLUS_PROF",
            "OPTS_PROF"
        ],
        "fk": [
            "TCNO",
            "T000"
        ]
    },
    "TCNO": {
        "f": [
            "MANDT",
            "PROFILE",
            "AUTOADJUST",
            "BUTTONPOS",
            "DISPBG",
            "DUPMODE",
            "HEIGHT",
            "HOFFSET",
            "IGNOREUSER",
            "INODESIZE",
            "INSMODE",
            "LAYBG",
            "LAYFG",
            "LAYORDER",
            "LAYSTYLE",
            "LBUTTBG",
            "LBUTTFG",
            "MARKNODE",
            "MODMODE",
            "NAVBG",
            "NAVFRMCOL",
            "NODEBG",
            "NODESIZE",
            "OBUTTBG",
            "OBUTTFG",
            "ORDBG",
            "ORDFG",
            "SELLINECOL",
            "SELOBJMODE",
            "SELTYPMODE",
            "STATBG",
            "STATFG",
            "TRCKFRMCOL",
            "USESAVE",
            "VIEW1BG",
            "VIEW2BG",
            "VIEW3BG",
            "VOFFSET",
            "WIDTH",
            "XPERCENT",
            "XPOS",
            "YPERCENT",
            "YPOS",
            "ZOOMFAC",
            "MARKLINK",
            "CONMODE",
            "CUSMODE",
            "TIMER",
            "DBLCLICK",
            "AUTOPORT",
            "UDM",
            "ROUNDED",
            "XPOSITION",
            "YPOSITION",
            "XSIZE",
            "YSIZE",
            "TRACKOPT",
            "CLROWS",
            "CLCOLS",
            "CLRASTER",
            "CLCOLWD",
            "MASTERVIEW",
            "LEGEND",
            "SUBCHART",
            "SUBINDEX",
            "INFOTEXTS",
            "CONFIRM",
            "TITLEBOX",
            "PORTSIZE",
            "AUTO_CLUST",
            "RANG",
            "LAYOUT",
            "CLDELS",
            "TBXZOOM",
            "BREAKCON",
            "ALIVE",
            "NODELMSG",
            "INFOTXTNUM",
            "AMODAL",
            "STGAUGE",
            "SHORTLINK",
            "USRPOPS",
            "LINKINCLUS",
            "NOWARN",
            "NODELPOP",
            "NODUPMOVE",
            "INNERPICKM",
            "NOBOXMOVE",
            "COMPACTNOD",
            "COMPCTINOD",
            "OWNLEGEND",
            "PILEMODE",
            "LINKOPTIM",
            "CUSTOMIZE",
            "TOOLTIP",
            "ROWPOSONLY",
            "INSNODEPOS",
            "BMPDISPAR",
            "BMPNODEAR",
            "BMPNAVAR",
            "UNQLNKSYMS",
            "MOVEBTMPS",
            "BREAKLGND",
            "DIAGLINES",
            "INSATLINK",
            "NOADJCONF",
            "MENUMARK",
            "NOSELWARN",
            "PHANTBAND",
            "ENJOYLEVEL"
        ],
        "fk": [
            "TWCOL",
            "TGMF",
            "T000"
        ]
    },
    "TGMF": {
        "f": [
            "MANDT",
            "GMF_FILE"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCO60": {
        "f": [
            "MANDT",
            "AUTYP",
            "RSCHL",
            "VRGNG",
            "ECTRM",
            "VGTYP",
            "PRTYP",
            "REQUI"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCBP": {
        "f": [
            "MANDT",
            "PROFILE",
            "PROF_FD",
            "WIDTH_P_C",
            "TRMNL",
            "CMART",
            "CMPOS",
            "VRGEA",
            "RELEA",
            "UPDTS",
            "TRMKS",
            "WAERS",
            "DAUNE",
            "ARBEH",
            "DFARB",
            "DFDAU",
            "PRF_GRUPPE",
            "PRF_NAME",
            "TIM_PROF",
            "PRT_SCALE",
            "TIM_SCALE",
            "AENAM",
            "PROTECT",
            "CUSTOM",
            "ANZ_KAL",
            "ANZ_TRM",
            "ANZ_HGR",
            "ANZ_VGR",
            "APPLI",
            "TMPRI",
            "MSANZ",
            "MSTEA",
            "VERSN1",
            "VERSN2",
            "FRSPT",
            "PFFREI",
            "ACTYP",
            "ELTYP",
            "T_LEFT",
            "T_MIDDLE",
            "T_RIGHT",
            "T_UPPER",
            "T_DOWN",
            "GRID_MODE",
            "HORL_MODE",
            "ROW_HEIGHT",
            "CLMN_INDEN",
            "VELEA",
            "VGKRT",
            "NZANZ",
            "RIBB_PROF",
            "PROF_FCAP",
            "PROF_FMAT",
            "PROF_FCOS",
            "EVA_VERSN",
            "CONSTR",
            "SHDOW",
            "PROF_ORDER",
            "CP_UNAME",
            "OBJCP",
            "DSHIFT",
            "PROF_PRNT",
            "SUBEA"
        ],
        "fk": [
            "T006",
            "TBCG",
            "TCURC",
            "TCNF",
            "TCY54D",
            "T000",
            "TKVS",
            "TCY58",
            "TCY33"
        ]
    },
    "TCNF": {
        "f": [
            "MANDT",
            "TABNAME",
            "PROFID",
            "KENNI",
            "FIELDNAME",
            "AENAM",
            "PROTECT",
            "CUSTOM",
            "OUTPUTLEN",
            "FACTOR",
            "ODECIMALS",
            "ORIGIN"
        ],
        "fk": [
            "TCNE",
            "DD03L",
            "T000"
        ]
    },
    "TCNE": {
        "f": [
            "TABNAME",
            "OBJID"
        ],
        "fk": [
            "DD02L"
        ]
    },
    "TBCG": {
        "f": [
            "MANDT",
            "PRF_GRUPPE",
            "PRF_NAME",
            "PRF_INDEX",
            "FORM_PROF",
            "FARB_PROF",
            "OPTS_PROF",
            "CMD_PROF",
            "LAYER_PROF",
            "CHART_PROF"
        ],
        "fk": [
            "TBCO",
            "T000"
        ]
    },
    "TBCO": {
        "f": [
            "MANDT",
            "PROFILE",
            "XPOSITION",
            "YPOSITION",
            "XSIZE",
            "YSIZE",
            "LAYER_TYPE",
            "SYMBOLTYPE",
            "MERGEICOS",
            "CUSTOMIZE",
            "MULTMOVE",
            "NOSTLIN",
            "SHIFTPHANT",
            "SNDDZIOFAC",
            "ADJWCHCOLM",
            "TSEWZOPS",
            "SHRINKROWS",
            "VIEWLIMITS",
            "ISAUTOMOT",
            "TSEWZADAPT",
            "HOTSPOT",
            "NORIBHLTS",
            "FIXCOLMOD",
            "MENUMARK",
            "FIXPHANTR",
            "RANGEPROJ",
            "LAYCON",
            "ENJOYLEVEL",
            "NUMERR",
            "NUMHSBS",
            "COLWIDTH",
            "INFOTEXTS",
            "TIMER",
            "DBCLICK",
            "DUMMYFELD",
            "MARKTYPE",
            "SELTYPE",
            "AUTOSCROLL",
            "BORDERLINE",
            "TERMINATE",
            "CREORG",
            "CSELECT",
            "CMOVE",
            "HORLINE",
            "EDITINLINE",
            "OPMODE",
            "GRANULAT",
            "OBJMARK",
            "MARKCOL",
            "ZOOMFAC",
            "PHANTCOL",
            "BITSCROLL",
            "ROWMARGIN",
            "TBXZOOM",
            "ALIVE",
            "NODELMSG",
            "SLIDEMODE",
            "STGAUGE",
            "SOLVEROWS",
            "SELCHARTS",
            "MSPOPUP",
            "ENLARGE",
            "DRAGDROP",
            "CMREDUCE",
            "TIMELIN",
            "TOOLTIP",
            "LEGEND",
            "SWPCLMNS",
            "OPTCLWD",
            "OPTROWWD",
            "DYNPMARK",
            "SCALEROWS",
            "MSSELECT",
            "SCROLLTIM",
            "KEEPOPMOD"
        ],
        "fk": [
            "TWCOL",
            "T000"
        ]
    },
    "TCY54D": {
        "f": [
            "MANDT",
            "SEC_PROFID",
            "SEC_F_AV",
            "SEC_U_PH",
            "SEC_W_PH",
            "SEC_F_AN",
            "SEC_U_AV",
            "SEC_W_AV",
            "SEC_U_AN",
            "SEC_W_AN",
            "COLLAPS"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCY58": {
        "f": [
            "MANDT",
            "RIBPROF_ID",
            "MIN_YEAR",
            "MAX_YEAR",
            "MIN_QUART",
            "MAX_QUART",
            "MIN_MONTH",
            "MAX_MONTH",
            "MIN_WEEK",
            "MAX_WEEK",
            "MIN_DAY",
            "MAX_DAY",
            "MIN_HOUR",
            "MAX_HOUR",
            "MIN_MIN",
            "MAX_MIN",
            "CLR_YEAR",
            "CLR_QUART",
            "CLR_MONTH",
            "CLR_WEEK",
            "CLR_DAY",
            "CLR_HOUR",
            "CLR_MIN",
            "MTIC_DAY",
            "MTIC_HOUR",
            "TTYP_MONTH",
            "TTYP_WEEK",
            "TTYP_DAY",
            "GRID_MODE",
            "GCLR_YEAR",
            "GCLR_QUART",
            "GCLR_MONTH",
            "GCLR_WEEK",
            "GCLR_DAY",
            "GCLR_HOUR",
            "GCLR_MIN",
            "GTIC_YEAR",
            "GTIC_QUART",
            "GTIC_MONTH",
            "GTIC_WEEK",
            "GTIC_DAY",
            "GTIC_HOUR",
            "GTIC_MIN",
            "FORM_YEAR",
            "FORM_QUART",
            "FORM_WEEK",
            "FORM_DAY",
            "FORM_HOUR",
            "FORM_MIN",
            "FORM_MONTH",
            "OFFS_WEEK",
            "CLR_SHIFT",
            "FORM_SHIFT",
            "GCLR_SHIFT",
            "SHOW_SHIFT",
            "GCLW_SHIFT",
            "OFFS_YEAR",
            "OFFS_QUART",
            "OFFS_MONTH",
            "OFFS_DAY",
            "OFFS_HOUR",
            "OFFS_MINUTE"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCY33": {
        "f": [
            "MANDT",
            "TIPRO_ID",
            "ANATIMT",
            "ANADATF",
            "ANADATT",
            "PLATIMT",
            "PLADATF",
            "PLADATT",
            "RDATE_TYPE",
            "RDATE",
            "DBRTIMT",
            "DBRDATF",
            "DBRDATT",
            "PROFAPP"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCNMF": {
        "f": [
            "MANDT",
            "MFLIC",
            "PLANT",
            "PRJCT",
            "SALES",
            "TPART",
            "PRLIM",
            "PTYPB",
            "CRREQ"
        ],
        "fk": [
            "T000",
            "T418"
        ]
    },
    "T418": {
        "f": [
            "MANDT",
            "POSTP",
            "MATIN",
            "KZBSF",
            "TXPOS",
            "RTPOS",
            "KLPOS",
            "BTPOS",
            "DKPOS",
            "MNGVZ",
            "KZUPS",
            "PSTRG",
            "INPOS"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCA14": {
        "f": [
            "MANDT",
            "LVARI",
            "OBJST",
            "CLASS",
            "FLG_LOOP"
        ],
        "fk": [
            "TCA20",
            "TCA11",
            "T000"
        ]
    },
    "TCA20": {
        "f": [
            "MANDT",
            "CLASS",
            "HINCL",
            "LINCL"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCA11": {
        "f": [
            "MANDT",
            "OBJST",
            "FLG_ALT",
            "FLG_SEQ",
            "FLG_OPR",
            "FLG_SOP",
            "FLG_MAT",
            "FLG_FHM",
            "FLG_QMK",
            "FLG_QMW",
            "FLG_AOB",
            "FLG_TXT",
            "FLG_PMS",
            "FLG_APS",
            "FLG_BED",
            "FLG_PHAS",
            "FLG_MST",
            "FLG_SNT",
            "FLG_FEAT",
            "FLG_FEAV"
        ],
        "fk": [
            "T000"
        ]
    },
    "T430": {
        "f": [
            "MANDT",
            "PLNAW",
            "STEUS",
            "TERM",
            "LIEF",
            "MRKKZ",
            "LTSCH",
            "PKOST",
            "TVWKZ",
            "AUTWE",
            "VART",
            "LODR",
            "RUEK",
            "RUDR",
            "VRGD",
            "KALKZ",
            "KAPA",
            "SERVICE",
            "REWORK",
            "SCHEDEX",
            "WIP",
            "WIPB_GR_CTRL"
        ],
        "fk": [
            "T000",
            "TCA09"
        ]
    },
    "TCNVL": {
        "f": [
            "MANDT",
            "APPLIC",
            "SUBAPP",
            "LSTVAR",
            "AENAM",
            "PROTECT",
            "CUSTOM",
            "KEYLEN",
            "MAXLEN"
        ],
        "fk": [
            "TCNVS",
            "TCNVA",
            "T000"
        ]
    },
    "TCNVS": {
        "f": [
            "APPLIC",
            "SUBAPP",
            "MAXLEN",
            "FLG_LOOP"
        ],
        "fk": [
            "TCNVA"
        ]
    },
    "TCNVA": {
        "f": [
            "APPLIC"
        ],
        "fk": []
    },
    "TCY30": {
        "f": [
            "MANDT",
            "PROFILE_ID",
            "SEPRO_ID",
            "TIPRO_ID",
            "ANPRO_ID",
            "PEPRO_ID",
            "PLTPROF_ID",
            "STPRO_ID",
            "COPRO_ID",
            "TPPRO_ID",
            "LIPRO_ID"
        ],
        "fk": [
            "TCY49",
            "TCY34",
            "TCY32",
            "TCY35",
            "TCY37",
            "TCY48",
            "TCY56",
            "T000",
            "TCY33",
            "TCY60"
        ]
    },
    "TCY37": {
        "f": [
            "MANDT",
            "STPRO_ID",
            "FORWARD",
            "CAPSCHED",
            "AUTOMATAV",
            "AUTOAUFKT",
            "AUTOAUFDT",
            "EIGENB_DIS",
            "EARLIEST",
            "CANCEL_DIS",
            "QUEUETIME",
            "RED_LEVEL",
            "DISSORT",
            "ATPCAP",
            "BUFONLY",
            "USEFLOATB",
            "USEFLOATA",
            "INSERTOPR",
            "CLOSEGAP",
            "ASS_DISP",
            "BUCKET",
            "BUCKET1",
            "BUCKETBEG",
            "BUCKETFULL",
            "NOBREAKS",
            "DIRCHANGE",
            "CANCEL_VER",
            "DISWSETUP",
            "INIT_COND"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCY56": {
        "f": [
            "MANDT",
            "TPPRO_ID",
            "LAYOUT",
            "DYNP_WIDTH",
            "AVAIL_CAP",
            "SCHED_TIM",
            "REQ_VIEW"
        ],
        "fk": [
            "TCY31_G",
            "T000"
        ]
    },
    "TCY31_G": {
        "f": [
            "MANDT",
            "LAYOUT"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCY60": {
        "f": [
            "MANDT",
            "LIPRO_ID",
            "TABNAME",
            "PROFID_LIS",
            "TABNAMESTA",
            "TABNAMEDET",
            "PROFID_STA",
            "PROFID_DET",
            "DEFLISTE"
        ],
        "fk": [
            "T000",
            "TCYD",
            "TCYE"
        ]
    },
    "TCYD": {
        "f": [
            "MANDT",
            "TABNAME",
            "PROFID_LIS",
            "SELSET_FLT",
            "PROF_FD",
            "PROF_SR",
            "PROF_GP",
            "FLG_GRP",
            "FLG_PWT",
            "FLG_SRA",
            "FLG_ORG",
            "WRT_OBJ",
            "WRT_FLD",
            "SELSET_BFT",
            "AENAM",
            "PROTECT",
            "CUSTOM"
        ],
        "fk": [
            "TCYF",
            "TCYP",
            "TCYS",
            "T000",
            "TCYE"
        ]
    },
    "TCYF": {
        "f": [
            "MANDT",
            "TABNAME",
            "PROFID",
            "KENNI",
            "FIELDNAME",
            "OUTPUTLEN",
            "AENAM",
            "PROTECT",
            "CUSTOM"
        ],
        "fk": [
            "T000",
            "TCYE"
        ]
    },
    "TCYE": {
        "f": [
            "TABNAME"
        ],
        "fk": [
            "DD02L"
        ]
    },
    "TCYS": {
        "f": [
            "MANDT",
            "TABNAME",
            "PROFID",
            "KENNI",
            "FIELDNAME",
            "AENAM",
            "PROTECT",
            "CUSTOM",
            "SORT_DOWN"
        ],
        "fk": [
            "T000",
            "TCYE"
        ]
    },
    "TCYP": {
        "f": [
            "MANDT",
            "TABNAME",
            "PROFID",
            "KENNI",
            "FIELDNAME",
            "AENAM",
            "PROTECT",
            "CUSTOM",
            "SORT_DOWN"
        ],
        "fk": [
            "T000",
            "TCYE"
        ]
    },
    "TCY35": {
        "f": [
            "MANDT",
            "PEPRO_ID",
            "PEINHEIT",
            "PDAUER",
            "ZEITRASTER",
            "KUMUL",
            "DYNP_WIDTH",
            "AVAIL_CAP",
            "SCHED_TIM",
            "REQ_VIEW",
            "MRP_CAL",
            "PPSWERK"
        ],
        "fk": [
            "T001W",
            "T439G",
            "TC35",
            "T000"
        ]
    },
    "TC35": {
        "f": [
            "MANDT",
            "ZRAST"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCY34": {
        "f": [
            "MANDT",
            "ANPRO_ID",
            "HIEAUF",
            "HIEVER",
            "ANVER",
            "HNAME",
            "HWERKS",
            "POOLKAP",
            "MINBEL",
            "MAXBEL",
            "CAPUNIT",
            "DAVAP",
            "VERTL1",
            "VERTLN",
            "UNITSOURCE",
            "INDCUMCAP",
            "INDCUMREQ"
        ],
        "fk": [
            "T006",
            "T001W",
            "T000",
            "TC29"
        ]
    },
    "TC29": {
        "f": [
            "MANDT",
            "VERTL",
            "STRAT",
            "FUNCT"
        ],
        "fk": [
            "TC29S",
            "T000",
            "TC29V"
        ]
    },
    "TC29S": {
        "f": [
            "MANDT",
            "STRAT",
            "LAGE",
            "ART",
            "BASIS"
        ],
        "fk": [
            "T000"
        ]
    },
    "TC29V": {
        "f": [
            "MANDT",
            "FUNCT"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCY32": {
        "f": [
            "MANDT",
            "SEPRO_ID",
            "SETTAB",
            "OBJ_SET",
            "FIL_SET",
            "BEDGRU",
            "TERMLEVEL",
            "SHOPORDER",
            "PLANORDER",
            "SOPORDER",
            "HIERRES",
            "INDCAPRES",
            "AVAICAPVER",
            "MARK_KEY",
            "SOLLBED",
            "RESTBED",
            "ISTBED"
        ],
        "fk": [
            "TC36",
            "TCY38_M",
            "TCY31",
            "T000",
            "SETHEADER"
        ]
    },
    "SETHEADER": {
        "f": [
            "MANDT",
            "SETCLASS",
            "SUBCLASS",
            "SETNAME",
            "SETTYPE",
            "XDYNAMIC",
            "AUTHGR",
            "XUNIQ",
            "RVALUE",
            "CREUSER",
            "CREDATE",
            "CRETIME",
            "UPDUSER",
            "UPDDATE",
            "UPDTIME",
            "SAPRL",
            "TABNAME",
            "FIELDNAME",
            "ROLLNAME",
            "SET_OLANGU",
            "NO_RWSHEADER",
            "NO_RWSLINE",
            "NO_SETLINET"
        ],
        "fk": [
            "SETCLS",
            "TBRG",
            "T000"
        ]
    },
    "SETCLS": {
        "f": [
            "SETCLASS",
            "SETNAMLENG",
            "SETNAMTAB",
            "SETNAMFLD",
            "SETOBART"
        ],
        "fk": [
            "DD02L",
            "TBO01",
            "DD03L"
        ]
    },
    "TBO01": {
        "f": [
            "SPRAS",
            "OBART",
            "OBART_LD",
            "TXT10",
            "TXT15",
            "TXT20",
            "TXT60"
        ],
        "fk": [
            "T002",
            "TBO00"
        ]
    },
    "TBO00": {
        "f": [
            "OBART",
            "FBGEN",
            "INTNUM",
            "ONRXX",
            "SETTRECV",
            "SETTRECP",
            "TABNAME",
            "FLDOBJNR",
            "KEY01",
            "KEY02",
            "KEY03",
            "KEY04",
            "KEY05",
            "KEY06",
            "KEY07",
            "REFSTRUCT"
        ],
        "fk": [
            "DD02L"
        ]
    },
    "TCY31": {
        "f": [
            "MANDT",
            "BEDGRU"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCY38_M": {
        "f": [
            "MANDT",
            "SORT_KEY",
            "POSITION",
            "AUFBKEY",
            "AUFBKEYART"
        ],
        "fk": [
            "TCY38"
        ]
    },
    "TCY38": {
        "f": [
            "MANDT",
            "AUFBKEY",
            "COL_SEP",
            "SEP_CHAR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TC36": {
        "f": [
            "MANDT",
            "VERSN",
            "OBJTY_HY",
            "OBJID_HY"
        ],
        "fk": [
            "CRID",
            "T000"
        ]
    },
    "TCY48": {
        "f": [
            "MANDT",
            "PLTPROF_ID",
            "GRAPH_GRU",
            "GRAPH_NAME",
            "GRAPH_INDX",
            "LAYPROF_ID",
            "NODPROF_ID",
            "CUAPROF_ID",
            "BOXPROF_ID",
            "SECPROF_ID",
            "SEC_SIZE_1",
            "SEC_UNIT_1",
            "SEC_SIZE_2",
            "SEC_UNIT_2",
            "SEC_SIZE_3",
            "SEC_UNIT_3",
            "CHAPROF_ID",
            "LAYOUT",
            "RIBPROF_ID",
            "PROTO",
            "DEF_REPRAE",
            "AXIS_PROF_ID",
            "CURVE_PROF_ID"
        ],
        "fk": [
            "TCY31_G",
            "TCY65K",
            "TCY61K",
            "TCY50K",
            "TCY54D",
            "T000",
            "TCY58",
            "TCY63K",
            "TCY62K",
            "TCY46K"
        ]
    },
    "TCY62K": {
        "f": [
            "MANDT",
            "NODE_PROF",
            "REPR_PROF"
        ],
        "fk": [
            "T000",
            "TCY46K"
        ]
    },
    "TCY46K": {
        "f": [
            "MANDT",
            "NODE_PROF",
            "DEF_REPRAE"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCY63K": {
        "f": [
            "MANDT",
            "AXIS_PROF"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCY65K": {
        "f": [
            "MANDT",
            "KURVE_PROF"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCY61K": {
        "f": [
            "MANDT",
            "BOX_PROF"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCY50K": {
        "f": [
            "MANDT",
            "CHART_PRF"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCY49": {
        "f": [
            "MANDT",
            "COPRO_ID",
            "PRESENT",
            "TIMETYP",
            "MODIFYMODE",
            "ENQUEUEALL",
            "CUA_DIS",
            "CUA_CNG",
            "SORTALWAYS",
            "RED_PLAN",
            "SET_EVENT",
            "EVENT_PARAM",
            "VRGWNR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCN00": {
        "f": [
            "MANDT",
            "SLWID",
            "PAR04",
            "PAR05",
            "BEROB"
        ],
        "fk": [
            "TC20",
            "TOBJ",
            "T000"
        ]
    },
    "TOBJ": {
        "f": [
            "OBJCT",
            "FIEL1",
            "FIEL2",
            "FIEL3",
            "FIEL4",
            "FIEL5",
            "FIEL6",
            "FIEL7",
            "FIEL8",
            "FIEL9",
            "FIEL0",
            "OCLSS",
            "BNAME",
            "FBLOCK",
            "CONVERSION"
        ],
        "fk": [
            "TOBC",
            "TFBLK"
        ]
    },
    "TFBLK": {
        "f": [
            "FBLOCK"
        ],
        "fk": []
    },
    "TOBC": {
        "f": [
            "OCLSS"
        ],
        "fk": []
    },
    "TC20": {
        "f": [
            "MANDT",
            "PARID",
            "VRWRT",
            "FLDPL",
            "FLDFA",
            "DIMEN",
            "UNIT",
            "VALUE_DEF",
            "VGFLD",
            "VKALK",
            "VKAPA",
            "VKAPF",
            "VTERM"
        ],
        "fk": [
            "T006",
            "T006D",
            "T000",
            "TC22"
        ]
    },
    "TC22": {
        "f": [
            "MANDT",
            "PARHK",
            "FIELD"
        ],
        "fk": [
            "T000"
        ]
    },
    "T482": {
        "f": [
            "MANDT",
            "TERMKZ",
            "VORWT",
            "RUEKT",
            "NTERM",
            "TAGDT",
            "ECK_UHRZT"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVTF": {
        "f": [
            "MANDT",
            "FKART",
            "VBTYP",
            "NUMKI",
            "NUMKE",
            "KOPGR",
            "STTRG"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVDSS": {
        "f": [
            "MANDT",
            "PMODE",
            "SMART_RES",
            "SMART_CMP",
            "WM_RESULT",
            "WM_COMPLT",
            "TR_RESULT",
            "TR_COMPLT",
            "NO_EMPTY_COMPLT",
            "NO_SHIPM_CHAINS",
            "PLAN_PACK",
            "VSTEL"
        ],
        "fk": [
            "TVSA",
            "TVST",
            "T000"
        ]
    },
    "TVSA": {
        "f": [
            "MANDT",
            "SMART",
            "NUMKI",
            "VBTYP_01",
            "VBTYP_02",
            "VBTYP_03",
            "VBTYP_04",
            "VBTYP_05",
            "VBTYP_06",
            "VBTYP_07",
            "VBTYP_08",
            "VBTYP_09",
            "VBTYP_10",
            "VBTYP_11",
            "VBTYP_12",
            "KZUNI",
            "KZMAN",
            "KAPPL",
            "KALSM",
            "KSCHL"
        ],
        "fk": [
            "T683",
            "T685B",
            "T000",
            "T681A"
        ]
    },
    "T685B": {
        "f": [
            "MANDT",
            "KAPPL",
            "KSCHL",
            "PARAB",
            "PRKEY",
            "MAXTDNAME",
            "VSZTP",
            "NACHA",
            "TXTFL",
            "TPROG",
            "TROUT",
            "PPROG",
            "PROUT",
            "PARVW",
            "ERLV1",
            "ERLV2",
            "ERLV3",
            "ERLV4",
            "KNZUG",
            "NBEAR",
            "MEHRF",
            "TDARMOD",
            "ARCOBJART",
            "APROG",
            "AROUT",
            "OBJNAM",
            "OBJPRI",
            "OBJCP",
            "FNDTIMPRG",
            "FNDTIMRTN",
            "NOPROG",
            "SORTPRG",
            "SORTRTN",
            "NOPROTOCOL",
            "SORT1",
            "SORT2",
            "SORT3",
            "STRATEGY"
        ],
        "fk": [
            "T681Z",
            "TRDIR",
            "T685",
            "TCSTR",
            "TPAR",
            "TNADP",
            "T000",
            "TOADV"
        ]
    },
    "TNADP": {
        "f": [
            "PRKEY"
        ],
        "fk": []
    },
    "TCSTR": {
        "f": [
            "MANDT",
            "STRATEGY"
        ],
        "fk": []
    },
    "TTSEGTPLH": {
        "f": [
            "CLIENT",
            "TEPL",
            "TEPL_ALI",
            "TEPL_VIWDF",
            "OBJE",
            "PROJ",
            "FLAG_INA",
            "UNAM_CRE",
            "TSTP_CRE",
            "UNAM_CHA",
            "TSTP_CHA",
            "UNAM_INA",
            "TSTP_INA"
        ],
        "fk": [
            "TTSEGPROJ",
            "TTSEGOBJE",
            "T000",
            "TTSEGTPLV"
        ]
    },
    "TTSEGTPLV": {
        "f": [
            "CLIENT",
            "TEPL_VIW",
            "TEPL_FIE01",
            "TEPL_FIE02",
            "TEPL_FIE03",
            "TEPL_FIE04",
            "TEPL_FIE05",
            "TEPL_FIE06",
            "TEPL_VIWLI",
            "TEPL_RANVT",
            "TEPL_RANVN",
            "TEPL_DISEC",
            "TEPL_DISSO",
            "TEPL_DISTX",
            "TEPL_DISAD",
            "TEPL_DISAP",
            "TEPL_DISTZ",
            "FLAG_INA",
            "UNAM_CRE",
            "TSTP_CRE",
            "UNAM_CHA",
            "TSTP_CHA",
            "UNAM_INA",
            "TSTP_INA"
        ],
        "fk": [
            "T000"
        ]
    },
    "TTSEGPROJ": {
        "f": [
            "PROJ",
            "PROJ_ALI",
            "FLAG_INA",
            "UNAM_CRE",
            "TSTP_CRE",
            "UNAM_CHA",
            "TSTP_CHA",
            "UNAM_INA",
            "TSTP_INA"
        ],
        "fk": []
    },
    "TTSEGOBJE": {
        "f": [
            "OBJE",
            "OBJE_ALI",
            "TABL_APP",
            "TABL_APPKL",
            "TABL_DBV",
            "TABL_DBH",
            "TABL_DBE",
            "FIEL_APPHD",
            "FIEL_APPTS",
            "FIEL_APPTP",
            "FUNC_APPDT",
            "PROJ",
            "FLAG_INA",
            "UNAM_CRE",
            "TSTP_CRE",
            "UNAM_CHA",
            "TSTP_CHA",
            "UNAM_INA",
            "TSTP_INA"
        ],
        "fk": [
            "TTSEGPROJ",
            "DD02L",
            "DD03L",
            "TFDIR"
        ]
    },
    "TVSF": {
        "f": [
            "MANDT",
            "STGVB"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVKK": {
        "f": [
            "MANDT",
            "KTAAR",
            "KOPGR",
            "UEVOR",
            "NUMKE",
            "PARGR",
            "VBTYP",
            "VBOBJ",
            "TRVOG",
            "KAPPL",
            "KSCHL",
            "KALSM",
            "DATVO",
            "TXTGR",
            "AFART",
            "AGART",
            "AUART",
            "GUART",
            "LAART",
            "REART",
            "SOART",
            "KTAOR",
            "BEZOB",
            "KWIVO",
            "KTAFK",
            "AUMA1",
            "AUMA2",
            "KPAFK",
            "STGRU",
            "FEHGR",
            "DIAFE",
            "NUMADR",
            "AR_OBJECT",
            "TXT_KONSE",
            "EXCLUDE_FC",
            "STGKK",
            "DIRECTION",
            "PA_PLTYPE",
            "KALE",
            "FOLLOW_UP_PREF",
            "KTAAR_CLASS",
            "ABPATTERN",
            "ISP_KAPPL",
            "ISP_KSCHL",
            "ISP_KALSM"
        ],
        "fk": [
            "TVC6",
            "TVHB",
            "TVAK",
            "TPAR",
            "TVC_FOLLOW_UP",
            "T683",
            "TKSF",
            "TVUV",
            "TVPG",
            "T000",
            "T681A",
            "TVKK",
            "TOADV",
            "TTXG",
            "T445P"
        ]
    },
    "TVC6": {
        "f": [
            "MANDT",
            "STGRU",
            "KTAST",
            "KTAGR",
            "KTAER",
            "KTAEB"
        ],
        "fk": [
            "TVC1",
            "T000",
            "TVC2",
            "TVC3",
            "TVC7"
        ]
    },
    "TVC2": {
        "f": [
            "MANDT",
            "KTAGR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVC3": {
        "f": [
            "MANDT",
            "KTAST",
            "MANU",
            "INTERN"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVC1": {
        "f": [
            "MANDT",
            "KTAER"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVC7": {
        "f": [
            "MANDT",
            "KTAER",
            "KATEB"
        ],
        "fk": [
            "TVC4",
            "TVC1",
            "T000"
        ]
    },
    "TVC4": {
        "f": [
            "MANDT",
            "KTAEB"
        ],
        "fk": [
            "T000"
        ]
    },
    "T445P": {
        "f": [
            "SCTYP",
            "GSTRU",
            "DYNNR",
            "MAKRO",
            "STRAT",
            "SMAKR",
            "EMAKR",
            "HIPER",
            "FUPER",
            "PLBEG",
            "REPER",
            "HINPU",
            "SCRTYP",
            "CDAT",
            "CTIME",
            "AUTOR",
            "UDAT",
            "UTIME",
            "UPNAM",
            "SPRAS",
            "FLGAE",
            "FLGRA",
            "HPRAST",
            "FPRAST"
        ],
        "fk": [
            "T002",
            "T445N"
        ]
    },
    "T445N": {
        "f": [
            "SCTYP",
            "MAKRO",
            "DISPL",
            "MARCA"
        ],
        "fk": [
            "T445P"
        ]
    },
    "TKSF": {
        "f": [
            "MANDT",
            "STGKK"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVHB": {
        "f": [
            "MANDT",
            "OBJEKT",
            "BIFGR"
        ],
        "fk": []
    },
    "TVC_FOLLOW_UP": {
        "f": [
            "MANDT",
            "ABPATTERN",
            "ABFUNCTION",
            "SORTNR",
            "WF_TASK",
            "ICON"
        ],
        "fk": [
            "T000"
        ]
    },
    "SHDTVCIU": {
        "f": [
            "TCVARIANT",
            "TCODE",
            "PROTECTED",
            "CRUSER",
            "CRDATE",
            "CHUSER",
            "CHDATE",
            "VERSION",
            "FLAG_GUI"
        ],
        "fk": []
    },
    "T691D": {
        "f": [
            "MANDT",
            "CRMGR_CM"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVGRPS": {
        "f": [
            "MANDT",
            "SCHEME"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVCAA": {
        "f": [
            "MANDT",
            "CCVOR",
            "CCPGA",
            "AUTBE",
            "PREAU",
            "TGAUT",
            "TGDAT"
        ],
        "fk": [
            "TFRM",
            "T000"
        ]
    },
    "TFRM": {
        "f": [
            "GRPZE",
            "GRPNO",
            "AKTIV",
            "KAPPL",
            "GNDAT",
            "GNZEI"
        ],
        "fk": [
            "T681A"
        ]
    },
    "TVVD": {
        "f": [
            "MANDT",
            "VPROF",
            "VLAUFK",
            "VKUESCH",
            "VAKTSCH",
            "VBEGREG",
            "VENDREG",
            "VASDR",
            "ISMSTARTDATEREG"
        ],
        "fk": [
            "TVKS",
            "TVAS",
            "T000",
            "TVLZ",
            "TVRG"
        ]
    },
    "TVLZ": {
        "f": [
            "MANDT",
            "VLAUFK",
            "VLAUFZ",
            "VLAUEZ"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVAS": {
        "f": [
            "MANDT",
            "AKTVT",
            "WFAFG"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVKS": {
        "f": [
            "MANDT",
            "VKUESCH",
            "GUEVO",
            "GUEBI"
        ],
        "fk": [
            "T000"
        ]
    },
    "TVLK": {
        "f": [
            "MANDT",
            "LFART",
            "KOPGR",
            "UEVOR",
            "TXN08",
            "UMFNG",
            "NUMKI",
            "NUMKE",
            "NUMKIRULE",
            "INCPO",
            "PARGR",
            "AUFER",
            "DAART",
            "POBED",
            "REGGR",
            "REGLG",
            "WAAUS",
            "ROUTF",
            "VBTYP",
            "TXTGR",
            "ERNAM",
            "KAPPL",
            "KALSM",
            "KSCHL",
            "STGAK",
            "CMGRL",
            "CMGRK",
            "CMGRW",
            "QHERK",
            "TRSPG",
            "TDIIX",
            "PROFIDNETZ",
            "EXCOK",
            "NEUTE",
            "KALSP",
            "FEHGR",
            "LNSPL",
            "AVERP",
            "PM_ITEM_GEN",
            "REGTB",
            "BZOPS",
            "EXCBC",
            "EXCEM",
            "EXCLG",
            "J_1ADOCCLS",
            "RFPL_SW",
            "TSEGTP",
            "UVEIB",
            "DBTCH",
            "DSFAD",
            "SPOFI",
            "OIDELDCM",
            "SPE_NUMKT",
            "SPE_NR_RECYCLING",
            "BORGR_LIFEX_MUST",
            "BORGR_LIFEX_UNQ",
            "BORGR_LIFEX_EEDI",
            "BORGR_LIFEX_EDIA",
            "BORGR_SODET",
            "HOLD_DATA",
            "TDID",
            "TDSPRAS",
            "EDI_WEIGHTVOL",
            "SPE_ENABLE_VALID",
            "MSR_FKARA"
        ],
        "fk": [
            "TTSEGTPLH",
            "T000",
            "T609B",
            "TTXS",
            "TVHB",
            "T683",
            "T002",
            "T691D",
            "T681A",
            "TTSG",
            "J_1ADOCCLS",
            "TVFK",
            "TVAK",
            "TQ31",
            "TVSF",
            "T685",
            "TCN41",
            "TVUV",
            "TVPG",
            "TTXG"
        ]
    },
    "TTXS": {
        "f": [
            "MANDT",
            "TDOBJECT",
            "TXTGR",
            "TDID",
            "TXZUF"
        ],
        "fk": [
            "TTXOB",
            "TTXZ",
            "TTXID",
            "T000",
            "TTXG"
        ]
    },
    "TTSG": {
        "f": [
            "MANDT",
            "TRSPG"
        ],
        "fk": [
            "T000"
        ]
    },
    "TQ31": {
        "f": [
            "HERKUNFT"
        ],
        "fk": []
    },
    "TVBPROC": {
        "f": [
            "MANDT",
            "BPROC"
        ],
        "fk": [
            "T000"
        ]
    },
    "T691R": {
        "f": [
            "MANDT",
            "BABSS"
        ],
        "fk": [
            "T000"
        ]
    },
    "T355R": {
        "f": [
            "MANDT",
            "SERWI",
            "COND_R"
        ],
        "fk": [
            "T000"
        ]
    },
    "STXH": {
        "f": [
            "MANDT",
            "TDOBJECT",
            "TDNAME",
            "TDID",
            "TDSPRAS",
            "TDTITLE",
            "TDFRELES",
            "TDFUSER",
            "TDFDATE",
            "TDFTIME",
            "TDLRELES",
            "TDLUSER",
            "TDLDATE",
            "TDLTIME",
            "TDVERSION",
            "TDSTYLE",
            "TDFORM",
            "TDHYPHENAT",
            "TDTRANSTAT",
            "TDOSPRAS",
            "TDMACODE1",
            "TDMACODE2",
            "TDTXTLINES",
            "TDREF",
            "TDREFOBJ",
            "TDREFNAME",
            "TDREFID",
            "TDTEXTTYPE",
            "TDCOMPRESS",
            "TDOCLASS",
            "LOGSYS"
        ],
        "fk": [
            "T002"
        ]
    },
    "TQ80_PR": {
        "f": [
            "PROCESS"
        ],
        "fk": []
    },
    "T355E": {
        "f": [
            "MANDT",
            "ESCAL",
            "HIER",
            "COND_E"
        ],
        "fk": []
    },
    "AENR": {
        "f": [
            "MANDT",
            "AENNR",
            "AENST",
            "AENBE",
            "DATUV",
            "TECHV",
            "ANDAT",
            "ANNAM",
            "AEDAT",
            "AENAM",
            "AETXT",
            "LTXSP",
            "AEGRU",
            "CCART",
            "CCSTM",
            "DYDAT",
            "CONT1",
            "AEFUN",
            "UESTR",
            "RLKEY",
            "LVORM",
            "CLINT",
            "AERNG",
            "RLDAT",
            "RLTIM",
            "TEREL",
            "NACHT",
            "INDAT",
            "AUDAT",
            "FLUSE",
            "AEDIF",
            "ERLED"
        ],
        "fk": [
            "TCC10",
            "T419S",
            "T000"
        ]
    },
    "TCC10": {
        "f": [
            "MANDT",
            "RLKEY",
            "RLGLB",
            "AEFRK",
            "AEFRP",
            "AEFRF",
            "AEFRS",
            "OCMDV",
            "OCMFS"
        ],
        "fk": []
    },
    "T419S": {
        "f": [
            "MANDT",
            "AENST",
            "AEFLG",
            "DTFLG",
            "DLOCK"
        ],
        "fk": [
            "T000"
        ]
    },
    "PROJS": {
        "f": [
            "MANDT",
            "PSPNR",
            "PSPID",
            "POST1",
            "OBJNR",
            "ERNAM",
            "ERDAT",
            "AENAM",
            "AEDAT",
            "KIMSK",
            "AUTOD",
            "STSPD",
            "STSPR",
            "VERNR",
            "VERNA",
            "ASTNR",
            "ASTNA",
            "VBUKR",
            "VGSBR",
            "VKOKR",
            "PRCTR",
            "PWHIE",
            "ZUORD",
            "TRMEQ",
            "PLFAZ",
            "PLSEZ",
            "WERKS",
            "KALID",
            "VGPLF",
            "EWPLF",
            "ZTEHT",
            "NZANZ",
            "PLNAW",
            "VPROF",
            "PROFL",
            "BPROF",
            "TXTSP",
            "KOSTL",
            "KTRG",
            "AEDTE",
            "AEDTP",
            "BERST",
            "BERTR",
            "BERKO",
            "BERBU",
            "SPSNR",
            "BESTA",
            "SCOPE",
            "XSTAT",
            "TXJCD",
            "ZSCHM",
            "SCPRF",
            "IMPRF",
            "FMPRF",
            "ABGSL",
            "POSTU",
            "PPROF",
            "PLINT",
            "LOEVM",
            "INACT",
            "KZBWS",
            "SMPRF",
            "FLGWBS",
            "FLGVRG",
            "GRTOP",
            "PGPRF",
            "STORT",
            "FLGSD",
            "KZERB",
            "PARGR",
            "FUNC_AREA",
            "VKORG",
            "VTWEG",
            "SPART",
            "DPPPROF",
            "VPKSTU",
            "SCHTYP",
            "PSPID_EDIT",
            "VNAME",
            "RECID",
            "ETYPE",
            "OTYPE",
            "JIBCL",
            "JIBSA"
        ],
        "fk": [
            "T006",
            "TTXJ",
            "T499S",
            "TGSB",
            "T8J6C",
            "T001W",
            "V_TVPG_S",
            "T000",
            "T8JG",
            "TFACD",
            "T8J6A",
            "TJ20",
            "CSKS",
            "TCJ05",
            "T8JV",
            "TAPRF",
            "T002",
            "TPGPRF",
            "TCXPS",
            "TCJ04",
            "TKA01",
            "TKKAA",
            "TCJ41",
            "TCN54",
            "TBP1C",
            "TCURC",
            "T8JJ",
            "TCN41",
            "TPI01",
            "ONR00",
            "T001",
            "TCA09",
            "CKPH"
        ]
    },
    "TCJ41": {
        "f": [
            "MANDT",
            "PROFIDPROJ",
            "WERKS",
            "KALID",
            "VGPLF",
            "EWPLF",
            "PLNAW",
            "VPROF",
            "NZANZ",
            "IDENT",
            "ABGSL",
            "LEVELS",
            "ZUORD",
            "TRMEQ",
            "STSPD",
            "STSPR",
            "KVEWE",
            "KAPPL",
            "KALSM",
            "ZSCHL",
            "APROF",
            "APRFE",
            "GRPGS",
            "GRPFS",
            "GRPGT",
            "GRPFT",
            "GRPGB",
            "GRPFB",
            "BERST",
            "BERTR",
            "BERKO",
            "BERBU",
            "SLWID",
            "AUTOD",
            "BPROF",
            "ZTEHT",
            "ALL_ACC",
            "ALL_ACT",
            "BUKRS",
            "GSBER",
            "KOKRS",
            "PRCTR",
            "WAERS",
            "CHGKZ",
            "BESTA",
            "SCOPE",
            "XSTAT",
            "AEBLG",
            "PRART",
            "BPPROFL",
            "ZSCHM",
            "EINGR",
            "EINTB",
            "IMPRF",
            "THPROFILE",
            "SCPRF",
            "CLALL",
            "CLFAK",
            "CLKNT",
            "VSPRF",
            "FMPRF",
            "LSTKP",
            "EINGE",
            "EINTE",
            "PPROF",
            "PLINT",
            "RESZ1",
            "RESZ2",
            "GRVST",
            "XROOT",
            "VALID",
            "VALID_PSP",
            "AUTOVAL",
            "SUBST",
            "SUBST_PSP",
            "AUTOSUB",
            "KZBWS",
            "SMPRF",
            "HY_SEARCH1",
            "HY_SEARCH2",
            "HY_SEARCH3",
            "FLGVRG",
            "GRTOP",
            "PGPRF",
            "KZERB",
            "STRAT",
            "PARGR",
            "SCHTYP",
            "FUNC_AREA",
            "VKORG",
            "VTWEG",
            "SPART",
            "DPPPROF",
            "VPKSTU",
            "EXEC_PROFILE",
            "IPPS",
            "PSACL",
            "PSACLH",
            "TEMPLATE_KEY"
        ],
        "fk": [
            "GB92",
            "T006",
            "TGSB",
            "T001W",
            "AD01C_PROF",
            "V_TVPG_S",
            "GB93",
            "TKB1A",
            "T000",
            "TVTA",
            "TFACD",
            "TJ20",
            "TEE000",
            "TVKOV",
            "TCBP",
            "T683",
            "TCN51",
            "TAPRF",
            "TPGPRF",
            "T681V",
            "T681A",
            "TFKB",
            "TCN00",
            "CEPC",
            "TCXPS",
            "TKA01",
            "TCTH",
            "TKKAA",
            "TCJ1",
            "TCN54",
            "TCY30",
            "TBP1C",
            "TVKO",
            "TCURC",
            "TCN41",
            "TPI01",
            "TSR0E",
            "T001",
            "TCA09"
        ]
    },
    "TCTH": {
        "f": [
            "MANDT",
            "PROFILE",
            "VRG_DARST",
            "PSP_DARST",
            "DISPACT",
            "COLKZ_VORG",
            "COLKZ_AUFT",
            "COLKZ_MLST",
            "COLKZ_DOKU",
            "COLKZ_ELEM",
            "COLKZ_TEIL",
            "COLKZ_MAT"
        ],
        "fk": [
            "TWCOL",
            "T000"
        ]
    },
    "TEE000": {
        "f": [
            "MANDT",
            "CK_EXPROFILE"
        ],
        "fk": [
            "T000"
        ]
    },
    "AD01C_PROF": {
        "f": [
            "MANDT",
            "PROFNR",
            "DPUS",
            "MACOND",
            "SDAUART",
            "SDAUARG",
            "WCHECK",
            "FLDIMAT",
            "FLITD",
            "AD01SDAUART"
        ],
        "fk": [
            "DPPROFH",
            "TVAK",
            "T000"
        ]
    },
    "DPPROFH": {
        "f": [
            "MANDT",
            "PROFNR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TSR0E": {
        "f": [
            "MANDT",
            "STRAT"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCJ1": {
        "f": [
            "MANDT",
            "PRART"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCXPS": {
        "f": [
            "MANDT",
            "PROFIL",
            "TERMKZ",
            "TERM_AUTO",
            "PROT_AUTO",
            "STVERG",
            "ECKTM_UPD",
            "REDST_MAX",
            "MATFRUEH",
            "FLGWBS",
            "AUF_SHIFT",
            "RED_ART"
        ],
        "fk": [
            "T482",
            "T000"
        ]
    },
    "V_TVPG_S": {
        "f": [
            "MANDT",
            "PARGR",
            "PAOBJ",
            "SPRAS",
            "VTEXT"
        ],
        "fk": [
            "T002"
        ]
    },
    "TCN54": {
        "f": [
            "MANDT",
            "VER_PROFIL",
            "FLG_PD",
            "FLG_PR",
            "FLG_NP",
            "FLG_NV",
            "FLG_OF",
            "FLG_OK",
            "FLG_NR",
            "FLG_EL",
            "FLG_TX",
            "FLG_MS",
            "FLG_KB",
            "FLG_CO",
            "FLG_SD",
            "FLG_EV",
            "FLG_2",
            "FLG_3",
            "FLG_4",
            "FLG_5",
            "FLG_6",
            "FLG_LT",
            "FLG_DK",
            "ACT_ALLOC"
        ],
        "fk": []
    },
    "TCJ05": {
        "f": [
            "MANDT",
            "ASTNR",
            "ASTNA"
        ],
        "fk": [
            "T000"
        ]
    },
    "PRTP": {
        "f": [
            "MANDT",
            "SUBPR",
            "POST1"
        ],
        "fk": []
    },
    "/VSO/M_PKG": {
        "f": [],
        "fk": []
    },
    "OIB06": {
        "f": [
            "MANDT",
            "UOMGR"
        ],
        "fk": [
            "T000"
        ]
    },
    "T434G": {
        "f": [
            "MANDT",
            "WERKS",
            "EPRIO"
        ],
        "fk": [
            "T001W",
            "T000"
        ]
    },
    "T438V": {
        "f": [
            "MANDT",
            "WERKS",
            "SHPRO"
        ],
        "fk": [
            "T001W",
            "T000"
        ]
    },
    "OIH2": {
        "f": [
            "MANDT",
            "TAXGRP",
            "UOMGRP"
        ],
        "fk": [
            "OIB06",
            "T000"
        ]
    },
    "EQSE": {
        "f": [
            "MANDT",
            "EQSNR",
            "MATNR",
            "SERNR",
            "ERNAM",
            "ERDAT",
            "AENAM",
            "AEDAT",
            "EQUNR",
            "STATUS",
            "WERK",
            "LAGER",
            "CHARGE",
            "KUNDE",
            "SDBELN",
            "WABELN",
            "BLART",
            "HEQSNR",
            "HSNPOS",
            "HMATNR",
            "REVLV",
            "OBJNR"
        ],
        "fk": [
            "EQUI",
            "T003",
            "T001W",
            "MCHA",
            "VBUK",
            "MARA",
            "T000",
            "KNA1",
            "EQSE",
            "T001L"
        ]
    },
    "MCHA": {
        "f": [
            "MANDT",
            "MATNR",
            "WERKS",
            "CHARG",
            "LVORM",
            "ERSDA",
            "ERNAM",
            "AENAM",
            "LAEDA",
            "VERAB",
            "VFDAT",
            "ZUSCH",
            "ZUSTD",
            "ZAEDT",
            "LIFNR",
            "LICHA",
            "VLCHA",
            "VLWRK",
            "VLMAT",
            "BWTAR",
            "CHAME",
            "LWEDT",
            "FVDT1",
            "FVDT2",
            "FVDT3",
            "FVDT4",
            "FVDT5",
            "FVDT6",
            "HERKL",
            "HERKR",
            "MTVER",
            "QNDAT",
            "HSDAT",
            "CUOBJ_BM",
            "DEACT_BM",
            "BATCH_TYPE"
        ],
        "fk": [
            "T006",
            "T005",
            "MCHA",
            "TVFM",
            "MARA",
            "T005S",
            "MBEW",
            "LFA1",
            "T000",
            "MARC",
            "MCH1"
        ]
    },
    "MBEW": {
        "f": [
            "MANDT",
            "MATNR",
            "BWKEY",
            "BWTAR",
            "LVORM",
            "LBKUM",
            "SALK3",
            "VPRSV",
            "VERPR",
            "STPRS",
            "PEINH",
            "BKLAS",
            "SALKV",
            "VMKUM",
            "VMSAL",
            "VMVPR",
            "VMVER",
            "VMSTP",
            "VMPEI",
            "VMBKL",
            "VMSAV",
            "VJKUM",
            "VJSAL",
            "VJVPR",
            "VJVER",
            "VJSTP",
            "VJPEI",
            "VJBKL",
            "VJSAV",
            "LFGJA",
            "LFMON",
            "BWTTY",
            "STPRV",
            "LAEPR",
            "ZKPRS",
            "ZKDAT",
            "TIMESTAMP",
            "BWPRS",
            "BWPRH",
            "VJBWS",
            "VJBWH",
            "VVJSL",
            "VVJLB",
            "VVMLB",
            "VVSAL",
            "ZPLPR",
            "ZPLP1",
            "ZPLP2",
            "ZPLP3",
            "ZPLD1",
            "ZPLD2",
            "ZPLD3",
            "PPERZ",
            "PPERL",
            "PPERV",
            "KALKZ",
            "KALKL",
            "KALKV",
            "KALSC",
            "XLIFO",
            "MYPOL",
            "BWPH1",
            "BWPS1",
            "ABWKZ",
            "PSTAT",
            "KALN1",
            "KALNR",
            "BWVA1",
            "BWVA2",
            "BWVA3",
            "VERS1",
            "VERS2",
            "VERS3",
            "HRKFT",
            "KOSGR",
            "PPRDZ",
            "PPRDL",
            "PPRDV",
            "PDATZ",
            "PDATL",
            "PDATV",
            "EKALR",
            "VPLPR",
            "MLMAA",
            "MLAST",
            "LPLPR",
            "VKSAL",
            "HKMAT",
            "SPERW",
            "KZIWL",
            "WLINL",
            "ABCIW",
            "BWSPA",
            "LPLPX",
            "VPLPX",
            "FPLPX",
            "LBWST",
            "VBWST",
            "FBWST",
            "EKLAS",
            "QKLAS",
            "MTUSE",
            "MTORG",
            "OWNPR",
            "XBEWM",
            "BWPEI",
            "MBRUE",
            "OKLAS",
            "OICURVAL",
            "OICURDATE",
            "OICURQTY",
            "OICURUT",
            "OIFUTVAL",
            "OIFUTDATE",
            "OIFUTQTY",
            "OIFUTUT",
            "OINVALQTY",
            "OIREQUAT",
            "OITAXKEY",
            "OIHANTYP",
            "OIHMTXGR",
            "OIPPINV",
            "CON_FIN_VALLEVEL",
            "CON_FIN_VALPROC"
        ],
        "fk": [
            "TCK14",
            "OIH2M_J1B",
            "TPOOL",
            "T001K",
            "OIH5",
            "TCK05",
            "TKKH1",
            "MARA",
            "T025",
            "T149",
            "T000",
            "OIH4"
        ]
    },
    "TCK14": {
        "f": [
            "MANDT",
            "BWKEY",
            "KOSGR",
            "ZSCHL"
        ],
        "fk": [
            "TKZSL"
        ]
    },
    "OIH4": {
        "f": [
            "MANDT",
            "TAXKEY",
            "INDTAX",
            "DEFTAX"
        ],
        "fk": [
            "T000",
            "OIH4"
        ]
    },
    "T149": {
        "f": [
            "MANDT",
            "BWKEY",
            "BWTTY",
            "VBWAF",
            "KZVBF",
            "VBWAE",
            "KZVBE",
            "KZBAA",
            "VBWAA",
            "KZVBA"
        ],
        "fk": [
            "T149D",
            "T149C",
            "T000",
            "T001K"
        ]
    },
    "T149C": {
        "f": [
            "MANDT",
            "BWTTY",
            "VBWAF",
            "KZVBF",
            "VBWAE",
            "KZVBE",
            "KZBAA",
            "VBWAA",
            "KZVBA",
            "RSTBW"
        ],
        "fk": [
            "T149D",
            "T000"
        ]
    },
    "T149D": {
        "f": [
            "MANDT",
            "BWTAR",
            "KKREF",
            "BSEXT",
            "BSINT"
        ],
        "fk": [
            "T000",
            "T025K"
        ]
    },
    "TPOOL": {
        "f": [
            "MANDT",
            "MYKEY",
            "MYPOOL",
            "MEINS",
            "PEINH",
            "XINDX",
            "RANGE1",
            "RANGE2",
            "CHKPR"
        ],
        "fk": [
            "T006",
            "T001Y",
            "T000"
        ]
    },
    "T001Y": {
        "f": [
            "MANDT",
            "MYKEY",
            "GJAHR",
            "MVERS"
        ],
        "fk": [
            "T000"
        ]
    },
    "TKKH1": {
        "f": [
            "MANDT",
            "KOKRS",
            "KOATY",
            "HRKFT"
        ],
        "fk": [
            "TKA01",
            "T000"
        ]
    },
    "TCK01": {
        "f": [
            "MANDT",
            "KALKA",
            "BZOBJ",
            "UPDTM",
            "UPDTO",
            "UPDTV",
            "UPDTC",
            "DTKEY",
            "VSNEX",
            "VSNIN",
            "ANWER",
            "ANWEI",
            "BVKEY",
            "PRVFN",
            "TERID",
            "DMKEY",
            "SCHKZ",
            "GKSICHT",
            "KDFSCHD",
            "KDFRZUS",
            "PART_VRSN",
            "VALUATION",
            "KOKRS_ALL_CALC",
            "DEF_PRICELABEL",
            "DEF_PRICE_VIEW"
        ],
        "fk": [
            "TCKH8",
            "TCK22",
            "TCK29",
            "TCK16"
        ]
    },
    "TCK29": {
        "f": [
            "MANDT",
            "PART_VRSN",
            "KOREKRS",
            "BUCHKRS",
            "WERK",
            "GESCHBER",
            "PROFCTR",
            "DIR_PART_BUCHKRS",
            "DIR_PART_WERK",
            "DIR_PART_GESCHBE",
            "DIR_PART_PROFCTR"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCKH8": {
        "f": [
            "MANDT",
            "SICHT",
            "ZUSCH",
            "VV_GK",
            "HERKO",
            "BESBW",
            "INVHR",
            "INVSR",
            "GEWZS",
            "GEWBK",
            "GEWPC"
        ],
        "fk": []
    },
    "T778P": {
        "f": [
            "MANDT",
            "PLVAR"
        ],
        "fk": [
            "T000"
        ]
    },
    "WRF_REF_RFS": {
        "f": [
            "MANDT",
            "REF_SCHEMA",
            "REF_FIND_TYPE",
            "TREE_LEVEL",
            "FACTOR",
            "VALIDITY_RANGE",
            "HIST_BASE_FILTER",
            "EXCLUSION_RANGE",
            "INACTIVITY_RANGE",
            "NEW_COMP_RANGE",
            "CHECK_RELEVANCE",
            "RANGE",
            "THRESHOLD"
        ],
        "fk": []
    },
    "T024F": {
        "f": [
            "MANDT",
            "WERKS",
            "FEVOR",
            "TXT",
            "SFCPF"
        ],
        "fk": [
            "T001W",
            "T000",
            "TCO43"
        ]
    },
    "TCO43": {
        "f": [
            "MANDT",
            "WERKS",
            "CO_PRODPRF",
            "FLG_REL_CR",
            "FLG_PR_REL",
            "FLG_TM_REL",
            "FLG_WM_REL",
            "PROFILE_ID",
            "AUART",
            "AUTYP",
            "FLG_CR_REL",
            "FLG_COM_QA",
            "FLG_QUAN_P",
            "FLG_QUAN_M",
            "FLG_QUAN_A",
            "FLG_KAP_TM",
            "FLG_KAP_TB",
            "FLG_BOM_EX",
            "KZCLA",
            "XKCFC",
            "KZBCR",
            "AUTWE",
            "AUART_KDE",
            "AUART_PSP",
            "AUART_NOM",
            "WM_KZTBV",
            "WM_KZBMG",
            "WM_KZPGI",
            "FLG_DLM_CR",
            "FLG_DLM_REL",
            "FLG_DLB_CR",
            "FLG_DLB_REL",
            "FLG_SPLIT_BATCH",
            "MILL_AUART_UTA",
            "WM_KZKTS",
            "CFB_FLG_BBD_CALC",
            "CFB_FLG_BBD_BTCH"
        ],
        "fk": [
            "T001W",
            "T003O",
            "T000",
            "TCY30"
        ]
    },
    "TQ05": {
        "f": [
            "MANDT",
            "ZGTYP",
            "WEPRF",
            "ZGLIEF",
            "ZGPRUEF",
            "MSGART",
            "STSMA",
            "QCPRACT",
            "QGRPOP",
            "QREMIND",
            "QESCAL"
        ],
        "fk": [
            "TJ20"
        ]
    },
    "T007DT": {
        "f": [
            "MANDT",
            "DTAXR",
            "TPLEV",
            "EXRAT",
            "BANKO",
            "VEND",
            "CUST",
            "TRFR_ZERO_TAX"
        ],
        "fk": [
            "T000"
        ]
    },
    "T8JPTS": {
        "f": [
            "MANDT",
            "BUKRS",
            "PSCHEM"
        ],
        "fk": [
            "T001",
            "T000"
        ]
    },
    "T8JT": {
        "f": [
            "MANDT",
            "BUKRS",
            "VCLASS",
            "NRANGE"
        ],
        "fk": [
            "T001",
            "T000"
        ]
    },
    "VBWF01": {
        "f": [
            "MANDT",
            "WFVAR",
            "XWFBU",
            "HWBWF",
            "WAERS",
            "SUBNR",
            "VARBT",
            "VARGS",
            "XWFZG",
            "HWZWF",
            "VARZF",
            "XERRL"
        ],
        "fk": [
            "TCURC",
            "T000"
        ]
    },
    "ZZZ_PS05": {
        "f": [
            "MANDT",
            "LANGU",
            "DESCR"
        ],
        "fk": [
            "T002",
            "T000"
        ]
    },
    "T618M": {
        "f": [
            "MANDT",
            "LAND1",
            "MOWNR",
            "MOORG",
            "MOONR"
        ],
        "fk": [
            "T618W",
            "T005",
            "T000",
            "T618O"
        ]
    },
    "T618O": {
        "f": [
            "MANDT",
            "LAND1",
            "MOORG"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "T618W": {
        "f": [
            "MANDT",
            "LAND1",
            "MOORG",
            "MOONR"
        ],
        "fk": [
            "T005",
            "T000",
            "T618O"
        ]
    },
    "T820": {
        "f": [
            "MANDT",
            "RPLAN",
            "SETNR",
            "DIPER",
            "FRPER",
            "TOPER",
            "CUTYP",
            "MACUD",
            "CSPRED",
            "QSPRED",
            "DOCTY",
            "VALDIS",
            "TXTDIS",
            "GL",
            "RKK",
            "TRCUR",
            "CCCUR",
            "LCCUR",
            "ACCUR",
            "RCCUR",
            "OCCUR",
            "QUANT",
            "ATQNT",
            "RKL",
            "AAQNT",
            "AKQNT",
            "AOQNT",
            "TFCUR",
            "TVCUR",
            "RKB",
            "SAQNT",
            "SMQNT",
            "TRDIS",
            "CCDIS",
            "LCDIS",
            "ACDIS",
            "RCDIS",
            "OCDIS",
            "QUDIS",
            "ATDIS",
            "AADIS",
            "AKDIS",
            "AODIS",
            "TFDIS",
            "TVDIS",
            "SADIS",
            "SMDIS",
            "CLASS",
            "BRGRU",
            "CRNAM",
            "CRDAT",
            "UPNAM",
            "UPDAT",
            "SET_FIELD",
            "CONDENSE"
        ],
        "fk": [
            "TCURV",
            "TBRG",
            "T822",
            "T000",
            "T889",
            "T821S"
        ]
    },
    "T822": {
        "f": [
            "MANDT",
            "CLASS",
            "GL_CLASS",
            "RKS_CLASS",
            "RKA_CLASS"
        ],
        "fk": [
            "T000"
        ]
    },
    "T889": {
        "f": [
            "MANDT",
            "DOCTY",
            "PLACT",
            "TCURR",
            "LCURR",
            "GCURR",
            "BALAN",
            "NORNG"
        ],
        "fk": [
            "T000"
        ]
    },
    "TAIF5": {
        "f": [
            "MANDT",
            "SIZECL",
            "XVERD"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCO48": {
        "f": [
            "MANDT",
            "GPROFILE",
            "CUST_PROFILE",
            "MAST_PROFILE",
            "ATO_PROFILE"
        ],
        "fk": [
            "T000",
            "TCO47"
        ]
    },
    "TCO47": {
        "f": [
            "MANDT",
            "PROFILE",
            "AUTYP",
            "OPRDEL_RELE",
            "OPRDEL_PCNF",
            "OPRDEL_CONF",
            "OPRDEL_CMAN",
            "OPRCHG_RELE",
            "OPRCHG_RELE_DE",
            "OPRCHG_PCNF",
            "OPRCHG_PCNF_DE",
            "OPRCHG_CONF",
            "OPRCHG_CONF_DE",
            "OPRINS_CONF",
            "OPRINS_PCNF",
            "OPRINS_RELE",
            "OPRINS_SREL",
            "OPRINS_SPCO",
            "OPRINS_SCON",
            "CMPDEL_CONF",
            "CMPDEL_GISS",
            "CMPDEL_PCNF",
            "CMPDEL_PRCH",
            "CMPDEL_RELE",
            "CMPDEL_CMAN",
            "CMPCHG_CONF",
            "CMPCHG_CONF_DE",
            "CMPCHG_GISS",
            "CMPCHG_GISS_DE",
            "CMPCHG_PCNF",
            "CMPCHG_PCNF_DE",
            "CMPCHG_PRCH",
            "CMPCHG_PRCH_DE",
            "CMPCHG_RELE",
            "CMPCHG_RELE_DE",
            "CMPINS_CONF",
            "CMPINS_PCNF",
            "CMPINS_RELE",
            "CMPMVS_CONF",
            "CMPMVS_PCNF",
            "CMPMVS_RELE",
            "CMPMOV_GISS",
            "CMPMOV_PRCH",
            "CMPMVD_CONF",
            "CMPMVD_RELE",
            "CMPMVD_PCNF",
            "DPCDEL_CONF",
            "DPCDEL_GISS",
            "DPCDEL_PCNF",
            "DPCDEL_RELE",
            "DPCDEL_CMAN",
            "DPCCHG_CONF",
            "DPCCHG_CONF_DE",
            "DPCCHG_GISS",
            "DPCCHG_GISS_DE",
            "DPCCHG_PCNF",
            "DPCCHG_PCNF_DE",
            "DPCCHG_RELE",
            "DPCCHG_RELE_DE",
            "DPCINS_CONF",
            "DPCINS_PCNF",
            "DPCINS_RELE",
            "DPCMVS_RELE",
            "DPCMVS_PCNF",
            "DPCMVS_CONF",
            "DPCMOV_GISS",
            "DPCMVD_RELE",
            "DPCMVD_PCNF",
            "DPCMVD_CONF",
            "SOPCHG_CONF",
            "SOPCHG_CONF_DE",
            "SOPCHG_PCNF",
            "SOPCHG_PCNF_DE",
            "SOPCHG_RELE",
            "SOPCHG_RELE_DE",
            "SOPDEL_CONF",
            "SOPDEL_PCNF",
            "SOPDEL_RELE",
            "SOPDEL_CMAN",
            "SOPINS_CONF",
            "SOPINS_PCNF",
            "SOPINS_RELE",
            "PRTCHG_CONF",
            "PRTCHG_CONF_DE",
            "PRTCHG_PCNF",
            "PRTCHG_PCNF_DE",
            "PRTCHG_RELE",
            "PRTCHG_RELE_DE",
            "PRTDEL_CONF",
            "PRTDEL_PCNF",
            "PRTDEL_RELE",
            "PRTDEL_CMAN",
            "PRTINS_CONF",
            "PRTINS_PCNF",
            "PRTINS_RELE",
            "SEQDEL_CMAN",
            "MARK_CHNG",
            "SINGLE_CHG",
            "OPRMAN_NEXE",
            "SOPMAN_NEXE",
            "CMPMAN_NEXE",
            "DPCMAN_NEXE",
            "PRTMAN_NEXE",
            "ORDCHG_RELE",
            "ORDCHG_RELE_DE",
            "ORDCHG_PCNF",
            "ORDCHG_PCNF_DE",
            "ORDCHG_CONF",
            "ORDCHG_CONF_DE",
            "DPCCHG_HIER",
            "OPRDEL_RELE_DE",
            "OPRDEL_PCNF_DE",
            "OPRDEL_CONF_DE",
            "ORDMVS_RELE",
            "ORDMVS_PCNF",
            "ORDMVS_CONF",
            "ORDMVS_PURC",
            "ORDMOV_RELE",
            "ORDMOV_PCNF",
            "ORDMOV_CONF",
            "CMPMVS_RELE_QV",
            "CMPMVS_PCNF_QV",
            "CMPMVS_CONF_QV",
            "CMPMVS_PRCH_QV",
            "CMPMVS_GISS_QV",
            "CMPMVS_RELE_ZV",
            "CMPMVS_PCNF_ZV",
            "CMPMVS_CONF_ZV",
            "DPCMVS_RELE_QV",
            "DPCMVS_PCNF_QV",
            "DPCMVS_CONF_QV",
            "DPCMVS_GISS_QV",
            "DPCMVS_RELE_ZV",
            "DPCMVS_PCNF_ZV",
            "DPCMVS_CONF_ZV"
        ],
        "fk": []
    },
    "WRFT_CONS_PROCG": {
        "f": [
            "MANDT",
            "WRF_CONS_PROCG"
        ],
        "fk": []
    },
    "T618G": {
        "f": [
            "MANDT",
            "LAND1",
            "MOGRU",
            "HEDDA"
        ],
        "fk": [
            "T005",
            "T000"
        ]
    },
    "TQ08": {
        "f": [
            "MANDT",
            "QM_PUR",
            "TLERF",
            "QVERF",
            "LIEFFREI",
            "ZGERF",
            "DOKPFL",
            "MSGART",
            "SPERRINAKT",
            "RESPERRE",
            "SRCGR",
            "SRCBTCH"
        ],
        "fk": []
    },
    "TMFPF": {
        "f": [
            "MANDT",
            "FPRFM",
            "BARTV",
            "VERVF",
            "ANPRF",
            "SABST",
            "APPRZ"
        ],
        "fk": [
            "T000",
            "TFMA"
        ]
    },
    "TFMA": {
        "f": [
            "MANDT",
            "ANPRF",
            "GABLV",
            "BARTV",
            "FBUEB",
            "FBUNT",
            "FMCHS",
            "FMSPE",
            "DIFFE"
        ],
        "fk": [
            "T000"
        ]
    },
    "T8J0R": {
        "f": [
            "MANDT",
            "BILLFORMAT",
            "BSTRUCT"
        ],
        "fk": [
            "T8JS",
            "T000"
        ]
    },
    "T8JS": {
        "f": [
            "MANDT",
            "BSTRUCT",
            "INT_US",
            "FL_JIBCL",
            "FL_JIBSA",
            "FL_JIBSB",
            "FL_CEIND",
            "FL_AFEIN",
            "FL_AFENM",
            "FL_COBJT",
            "FL_ACCNT",
            "FL_TANGI",
            "FL_SUPPL",
            "INVLEVEL",
            "EDI_COBJT",
            "PROP_EG",
            "PROP_COMP",
            "CAP_DERI"
        ],
        "fk": [
            "T000"
        ]
    },
    "T171": {
        "f": [
            "MANDT",
            "BZIRK"
        ],
        "fk": []
    },
    "T438A": {
        "f": [
            "MANDT",
            "DISMM",
            "DISVF",
            "PROKZ",
            "PROVB",
            "PROOS",
            "KZSIB",
            "KZMEB",
            "PRRED",
            "FXART",
            "RESPL",
            "KZREG",
            "ICBED",
            "RYBED",
            "DYFOL",
            "CBPPT",
            "BBBED",
            "U1BED",
            "U2BED",
            "U4BED",
            "A1BED",
            "A2BED"
        ],
        "fk": [
            "T449F"
        ]
    },
    "T449F": {
        "f": [
            "MANDT",
            "DYFOL",
            "SRTNR",
            "DYNNR"
        ],
        "fk": []
    },
    "T159C": {
        "f": [
            "MANDT",
            "WERKS",
            "ABCIN",
            "ANINV",
            "ININV",
            "PZINV",
            "CCDEV"
        ],
        "fk": [
            "T001W",
            "T000"
        ]
    },
    "TCK31": {
        "f": [
            "MANDT",
            "REFID",
            "UEBID",
            "M_NEU",
            "E_NEU",
            "F_NEU",
            "L_NEU",
            "P_NEU",
            "G_NEU",
            "R_NEU",
            "ADDI_UEBER",
            "ADDI_NEU"
        ],
        "fk": [
            "TCK24"
        ]
    },
    "TKAVG": {
        "f": [
            "MANDT",
            "OBJID",
            "GRUPPE",
            "ACTIVITY"
        ],
        "fk": []
    },
    "TWMEG": {
        "f": [
            "MANDT",
            "MEGRU",
            "MEINS",
            "WITHOUT"
        ],
        "fk": [
            "T006",
            "T000"
        ]
    },
    "ZZZ_PS03": {
        "f": [
            "MANDT",
            "LANGU",
            "DESCR"
        ],
        "fk": [
            "T002",
            "T000"
        ]
    },
    "T460A": {
        "f": [
            "MANDT",
            "WERKS",
            "SOBSL",
            "BESKZ",
            "SOBES",
            "WRK02",
            "CLCOR",
            "DUMPS",
            "REWFG",
            "REWRK",
            "DIRPR",
            "UMLDB",
            "ADDIN",
            "MLSCR"
        ],
        "fk": [
            "T001W"
        ]
    },
    "TCN07": {
        "f": [
            "MANDT",
            "NPRIO"
        ],
        "fk": [
            "T000"
        ]
    },
    "PVBE": {
        "f": [
            "MANDT",
            "WERKS",
            "PRVBE",
            "LGORT",
            "RGVER",
            "ABLAD",
            "PVADR",
            "LGBZO",
            "FABKLV",
            "SCHGRUPV",
            "SPROGV",
            "PINTVD",
            "PINTVM"
        ],
        "fk": [
            "T024D",
            "T001W",
            "TC38A",
            "T000",
            "TC39A",
            "T001L",
            "TFACD"
        ]
    },
    "PROJ": {
        "f": [
            "MANDT",
            "PSPNR",
            "PSPID",
            "POST1",
            "OBJNR",
            "ERNAM",
            "ERDAT",
            "AENAM",
            "AEDAT",
            "KIMSK",
            "AUTOD",
            "STSPD",
            "STSPR",
            "VERNR",
            "VERNA",
            "ASTNR",
            "ASTNA",
            "VBUKR",
            "VGSBR",
            "VKOKR",
            "PRCTR",
            "PWHIE",
            "ZUORD",
            "TRMEQ",
            "PLFAZ",
            "PLSEZ",
            "WERKS",
            "KALID",
            "VGPLF",
            "EWPLF",
            "ZTEHT",
            "NZANZ",
            "PLNAW",
            "VPROF",
            "PROFL",
            "BPROF",
            "TXTSP",
            "KOSTL",
            "KTRG",
            "AEDTE",
            "AEDTP",
            "BERST",
            "BERTR",
            "BERKO",
            "BERBU",
            "SPSNR",
            "BESTA",
            "SCOPE",
            "XSTAT",
            "TXJCD",
            "ZSCHM",
            "SCPRF",
            "IMPRF",
            "FMPRF",
            "ABGSL",
            "POSTU",
            "PPROF",
            "PLINT",
            "LOEVM",
            "INACT",
            "KZBWS",
            "SMPRF",
            "FLGVRG",
            "GRTOP",
            "PGPRF",
            "STORT",
            "LOGSYSTEM",
            "KZERB",
            "PARGR",
            "FUNC_AREA",
            "VKORG",
            "VTWEG",
            "SPART",
            "DPPPROF",
            "VPKSTU",
            "PSPID_EDIT",
            "VNAME",
            "RECID",
            "ETYPE",
            "OTYPE",
            "JIBCL",
            "JIBSA",
            "ZFILEPATH",
            "ZFILE1NAME",
            "ZFILE1EXTE",
            "ZFILE2NAME",
            "ZFILE2EXTE",
            "ZFILE3NAME",
            "ZFILE3EXTE",
            "SCHTYP",
            "SPROG",
            "EPROG",
            "CPD_UPDAT",
            "FERC_IND",
            "PROJ_STATUS"
        ],
        "fk": [
            "T006",
            "TTXJ",
            "T499S",
            "TGSB",
            "FERC_C7",
            "T8J6C",
            "T001W",
            "AD01C_PROF",
            "V_TVPG_S",
            "T000",
            "TVTA",
            "TFACD",
            "T8J6A",
            "ACTCMB_TAB",
            "TJ20",
            "TVKOV",
            "CSKS",
            "TCJ05",
            "T8JV",
            "TAPRF",
            "T002",
            "TPGPRF",
            "TFKB",
            "CEPC",
            "TCXPS",
            "TCJ04",
            "TKA01",
            "TKKAA",
            "TCJ41",
            "TCN54",
            "PROJS",
            "T8JE",
            "TBP1C",
            "TCURC",
            "T8JJ",
            "TVKO",
            "TCN41",
            "TPI01",
            "ONR00",
            "T001",
            "TCA09",
            "CKPH"
        ]
    },
    "J_1AINFMET": {
        "f": [
            "MANDT",
            "LAND1",
            "J_1AINFMET",
            "J_1AFIACT",
            "J_1ATBEAPP",
            "J_1AIPMNG",
            "J_1ANOTRT",
            "J_1AIBLART",
            "J_1AFWBLAT",
            "J_1ACBSCHL",
            "J_1ADBSCHL",
            "J_1AIMWSKZ",
            "J_1AOMWSKZ",
            "J_1APOSMET",
            "J_1AAMACT",
            "J_1AAAUCTF",
            "J_1AABBWNC",
            "J_1AABBWND",
            "J_1ATPODEP",
            "J_1ARVSTRT",
            "J_1AAKBWND",
            "J_1AAKBWNC",
            "J_1AMMACT",
            "J_1APORECO",
            "J_1AINDXF",
            "J_1ADELCST",
            "J_1ADELCTF",
            "J_1ATBFISC",
            "J_1AMANPR",
            "J_1AMMCUTY",
            "J_1APOINDX",
            "J_1AVLEVEL",
            "INDEXM",
            "J_1AAXREVD",
            "J_1AAOTTYC",
            "J_1AAOTTYD",
            "J_1AA_RVEND",
            "J_1AMMDAC",
            "J_1AERTYPE",
            "J_1ALEDGER"
        ],
        "fk": [
            "J_1AINFT04",
            "T007A",
            "T005",
            "T003",
            "J_1AINFT12",
            "TCURV",
            "T000",
            "TBSL",
            "J_1AINFT20",
            "T881",
            "TABW"
        ]
    },
    "IMPTT": {
        "f": [
            "MANDT",
            "POINT",
            "MPOBJ",
            "PSORT",
            "PSORTR",
            "PTTXT",
            "MLANG",
            "KZLTX",
            "MPTYP",
            "IRFMP",
            "ERDAT",
            "ERNAM",
            "AEDAT",
            "AENAM",
            "BEGRU",
            "INACT",
            "LVORM",
            "LOCAS",
            "REFMP",
            "ATINN",
            "ATINNR",
            "EXPON",
            "DECIM",
            "DESIR",
            "DESIRI",
            "DESIRR",
            "DSTXT",
            "DSTXTR",
            "MRMIN",
            "MRMINI",
            "MRMAX",
            "MRMAXI",
            "MRNGU",
            "INDCT",
            "INDRV",
            "INDTR",
            "TRANS",
            "CJUMP",
            "CJUMPI",
            "PYEAR",
            "PYEARI",
            "CODCT",
            "CODGR",
            "CODGRR",
            "CDSUF",
            "MODTR",
            "INDTRR",
            "LOGSYS",
            "LOGSYS_CHG"
        ],
        "fk": [
            "T006",
            "T370B",
            "ONR00",
            "CABN",
            "T002",
            "MARA",
            "IMPTT",
            "T000",
            "QPGR",
            "T370P",
            "TQ15"
        ]
    },
    "CABN": {
        "f": [
            "MANDT",
            "ATINN",
            "ADZHL",
            "ATNAM",
            "ATIDN",
            "ATFOR",
            "ANZST",
            "ANZDZ",
            "ATVOR",
            "ATSCH",
            "ATKLE",
            "ATKON",
            "ATEND",
            "ATAEN",
            "ATKLA",
            "ATERF",
            "ATEIN",
            "ATAME",
            "ATWME",
            "MSEHI",
            "ATDIM",
            "ATGLO",
            "ATGLA",
            "ATINT",
            "ATUNS",
            "ATSON",
            "ATTAB",
            "ATFEL",
            "ATTEI",
            "ATPRT",
            "ATPRR",
            "ATPRF",
            "ATWRD",
            "ATFOD",
            "ATHIE",
            "ATDEX",
            "ATFGA",
            "ATVSC",
            "ANAME",
            "ADATU",
            "VNAME",
            "VDATU",
            "ATXAC",
            "ATYAC",
            "ATMST",
            "ATWSO",
            "ATBSO",
            "DATUV",
            "TECHV",
            "AENNR",
            "LKENZ",
            "ATWRI",
            "DOKAR",
            "DOKNR",
            "DOKVR",
            "DOKTL",
            "KNOBJ",
            "ATINP",
            "ATVIE",
            "WERKS",
            "KATALOGART",
            "AUSWAHLMGE",
            "ATHKA",
            "ATHKO",
            "CLINT",
            "ATTOL",
            "ATZUS",
            "ATVPL",
            "ATAUTH",
            "COUNTRYGRP"
        ],
        "fk": [
            "T006",
            "TCMG",
            "TCMS",
            "AENR",
            "T000",
            "KLAH"
        ]
    },
    "TCMG": {
        "f": [
            "MANDT",
            "ATKLA"
        ],
        "fk": [
            "T000"
        ]
    },
    "TCMS": {
        "f": [
            "MANDT",
            "ATMST",
            "ATFRE",
            "ATLVM",
            "DLOCK",
            "AUPRF",
            "CLAEDIMAND"
        ],
        "fk": [
            "T000"
        ]
    },
    "QPGR": {
        "f": [
            "MANDT",
            "KATALOGART",
            "CODEGRUPPE",
            "ERSTELLER",
            "E_DATUM",
            "AENDERER",
            "A_DATUM",
            "VERWENDUNG",
            "INAKTIV",
            "STATUS"
        ],
        "fk": [
            "T000",
            "TQ15"
        ]
    }
}