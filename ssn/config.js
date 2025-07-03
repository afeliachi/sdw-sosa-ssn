var respecConfig = {
  specStatus: "ED",
  shortName: "vocab-ssn-2023",
  //publishDate:  "2025-08-01",
  prevRecShortname: "vocab-ssn",
  previousPublishDate: "2017-10-19",
  previousMaturity: "TR",
  repoURL: "https://github.com/w3c/sdw-sosa-ssn/",
  edDraftURI: "https://w3c.github.io/sdw-sosa-ssn/ssn/",
  editors: [
    {
      name: "Simon J D Cox",
      company: "Timely Logic, AU",
      note: "formerly CSIRO and OGC",
      orcid: "0000-0002-3884-3420"
    },
    {
      name: "Maxime Lefrançois",
      company: "École Nationale Supérieure des Mines de Saint-Étienne, FR",
      companyURL: "https://www.mines-stetienne.fr/",
      orcid: "0000-0001-9814-8991"
    },
    {
      name: "Rob Warren",
      company: "Glengarry Agriculture and Farming, CA",
      companyURL: "https://github.com/GlengarryAg"
    },
    {
      name: "Luis Moreira de Sousa",
      company: "Instituto Superior Técnico Lisboa, PT",
      companyURL: "https://tecnico.ulisboa.pt/en/",
      orcid: "0000-0002-5851-2071"
    }],
  formerEditors: [
    {
      name: "Armin Haller",
      company: "Australian National University, AU",
      companyURL: "https://www.cbe.anu.edu.au/",
      orcid: "0000-0003-3425-0780"
    },
    {
      name: "Krzysztof Janowicz",
      company: "Universität Wien, AT",
      companyURL: "https://www.univie.ac.at/",
      orcid: "0009-0003-1968-887X"
    },
    {
      name: "Danh Le Phuoc",
      company: "Technical University of Berlin, DE",
      companyURL: "http://www.tu-berlin.de/",
      orcid: "0000-0003-2480-9261"
    },
    {
      name: "Kerry Taylor",
      company: "Australian National University, AU",
      companyURL: "https://cecs.anu.edu.au/",
      orcid: "0000-0003-2447-1088"
    }],
  otherLinks: [
    {
      key: "Contributors (ordered alphabetically by surname)",
      data: [
        {
          value: "Rob Atkinson, Metalinkage, AU"
        }, {
          value: "Sylvain Grellet, BRGM, FR"
        }, {
          value: "Krzysztof Janowicz, Universität Wien, AT"
        }, {
          value: "Alex Robin, Georobotix, FR"
        }, {
          value: "Kathi Schleidt, Datacove, AT"
        }, {
          value: "Hylke van der Schaaf, Fraunhofer IOSB, DE"
        }]
    },
    {
      key: "Previous Contributors (ordered alphabetically by surname)",
      data: [
        {
          value: "Raúl García-Castro, Universidad Politécnica de Madrid, ES"
        }, {
          value: "Joshua Lieberman, Tumbling Walls, US"
        }, {
          value: "Claus Stadler, Universität Leipzig, DE"
        }]
    },
    {
      key: "OGC Document Number",
      data: [
        {
          value: "OGC 25-022"
        }]
    }],
  group: "wg/sdw",
  wgPublicList: "public-sdw-comments",
  implementationReportURI: "https://w3c.github.io/sdw-sosa-ssn/ssn-usage/",
  inlineCSS: true,
  noIDLIn: true,
  noLegacyStyle: false,
  logos: [
    {
      src: "https://raw.githubusercontent.com/w3c/sdw-sosa-ssn/gh-pages/ssn/images/ogclogo_symbol_transparentbackground.png",
      alt: "OGC",
      height: "70",
      width: "62",
      url: "https://www.ogc.org/"
    }
  ],
  noRecTrack: false,
  localBiblio: {
    "CDT": {
      href: "https://w3id.org/lindt/v4/custom_datatypes",
      title: "Custom Datatypes - Towards a web of Linked Datatypes",
      authors: ["Maxime Lefrançois", "Antoine Zimmermann"],
      date: "19 July 2021"
    },
    "CoverageJSON": {
      authors: ["Chris Little", "Jon Blower", "Maik Reichert"],
      href: "https://docs.ogc.org/cs/21-069r2/21-069r2.html",
      title: "OGC CoverageJSON Community Standard",
      publisher: "Open Geospatial Consortium",
      date: "August 2023"
    },
    "DCAT": {
      authors: [
        "Riccardo Albertoni",
        "David Browning",
        "Simon Cox",
        "Alejandra Gonzalez Beltran",
        "Andrea Perego",
        "Peter Winstanley"
      ],
      href: "https://www.w3.org/TR/vocab-dcat/",
      title: "Data Catalog Vocabulary (DCAT) - Version 3",
      rawDate: "2024-08-22",
      status: "REC",
      publisher: "W3C",
      edDraft: "https://w3c.github.io/dxwg/dcat/",
      deliveredBy: [
        "https://www.w3.org/2017/dxwg/"
      ],
    },
    "DUL": {
      href: "http://ontologydesignpatterns.org/wiki/Ontology:DOLCE+DnS_Ultralite",
      authors: ["Aldo Gangemi"],
      title: "DOLCE+DnS Ultralite (DUL)"
    },
    "iso-19157-1": {
      authors: [
        "ISO/TC 211"
      ],
      href: "https://www.iso.org/standard/78900.html",
      title: "Geographic information -- Data quality -- Part 1: General requirements",
      publisher: "ISO",
      status: "International Standard",
      date: "2023",
      isoNumber: "ISO 19157-1:2023"
    },
    "Lefrancois-et-al-2017": {
      href: "https://w3id.org/seas/SEAS-D2_2-SEAS-Knowledge-Model.pdf",
      authors: ["Maxime Lefrançois", "Jarmo Kalaoja", "Takoua Ghariani", "Antoine Zimmermann"],
      title: "The SEAS Knowledge Model",
      status: "Deliverable 2.2",
      publisher: "ITEA2 12004 Smart Energy Aware Systems",
      date: "2017"
    },
    "OBOE": {
      href: "http://dx.doi.org/10.5063/F11C1TTM",
      date: "2016",
      authors: ["Mark Schildhauer", "Matthew B. Jones", "Shawn Bowers", "Joshua Madin", "Sergeui Krivov", "Deana Pennington", "Ferdinando Villa", "Benjamin Leinfelder", "Christopher Jones", "Margaret O'Brien"],
      title: "OBOE: the Extensible Observation Ontology, version 1.1"
    },
    "OM-Lite": {
      href: "http://content.iospress.com/articles/semantic-web/sw214",
      doi: "10.3233/SW-160214",
      title: "Ontology for observations and sampling features, with alignments to existing models",
      publisher: "Semantic Web",
      date: "2017",
      volume: "8",
      page: "453-470",
      authors: ["S.J.D. Cox"]
    },
    "Project-PROV": {
      href: "https://linked.data.gov.au/def/project/",
      authors: ["Simon J D Cox"],
      title: "A Project Ontology",
      date: "2017"
    },
    "SAREF": {
      href: "https://www.etsi.org/deliver/etsi_ts/103200_103299/103264/04.01.01_60/ts_103264v040101p.pdf",
      title: "SmartM2M; Smart Applications; Reference Ontology and oneM2M Mapping",
      id: "ETSI TS 103 264 (V4.1.1)",
      publisher: "ETSI",
      date: "2025"
    },
    "SAREF_Patterns": {
      href: "https://www.etsi.org/deliver/etsi_ts/103500_103599/103548/01.02.01_60/ts_103548v010201p.pdf",
      title: "SmartM2M; SAREF reference ontology patterns",
      id: "ETSI TS 103 548 (V1.2.1)",
      publisher: "ETSI",
      date: "2024"
    },
    "SSN-PROV": {
      href: "http://ceur-ws.org/Vol-1401/paper-05.pdf",
      title: "Sensor Data Provenance: SSNO and PROV-O Together at Last",
      date: "2014",
      authors: ["Michael Compton", "David Corsar", "Kerry Taylor"],
      publisher: "CEUR: 7th International Conference on Semantic Sensor Networks"
    },
    "SSNX": {
      authors: ["Michael Compton", "Payam Barnaghi", "Luis Bermudez", "Raúl García-Castro", "Oscar Corcho", "Simon Cox", "John Graybeal", "Manfred Hauswirth", "Cory Henson", "Arthur Herzog", "Vincent Huang", "Krzysztof Janowicz", "W. David Kelsey", "Danh Le Phuoc", "Laurent Lefort", "Myriam Leggieri", "Holger Neuhaus", "Andriy Nikolov", "Kevin Page", "Alexandre Passant", "Amit Sheth", "Kerry Taylor"],
      title: "The SSN ontology of the W3C semantic sensor network incubator group",
      href: "http://www.sciencedirect.com/science/article/pii/S1570826812000571",
      publisher: "Web Semantics: Science, Services and Agents on the World Wide Web, 17:25-32 ",
      date: "December 2012"
    },
    "SSO-Pattern": {
      href: "http://ceur-ws.org/Vol-668/paper12.pdf",
      authors: ["Krzysztof Janowicz", "Michael Compton"],
      title: "The Stimulus-Sensor-Observation Ontology Design Pattern and its Integration into the Semantic Sensor Network Ontology",
      publisher: "CEUR: Proceedings of the 3rd International Workshop on Semantic Sensor Networks (SSN10)",
      date: "2010"
    },
    "STA": {
      href: "https://www.ogc.org/standard/sensorthings/",
      title: "OGC SensorThings API (STA)",
      publisher: "Open Geospatial Consortium"
    },
    "SWE": {
      href: "https://www.ogc.org/about-ogc/domains/swe/",
      title: "Sensor Web Enablement (SWE)",
      publisher: "Open Geospatial Consortium"
    },
    "SWE-Common": {
      authors: ["Alex Robin"],
      href: "https://portal.ogc.org/files/?artifact_id=41157",
      title: "OGC® SWE Common Data Model Encoding Standard",
      publisher: "Open Geospatial Consortium",
      date: "January 2011"
    },
    "SWE-Common-JSON": {
      authors: ["Alex Robin"],
      href: "https://docs.ogc.org/bp/17-011r2/17-011r2.html",
      title: "JSON Encoding Rules SWE Common / SensorML",
      publisher: "Open Geospatial Consortium",
      date: "January 2018"
    },
    "UCUM": {
      href: "https://ucum.org/ucum",
      title: "The Unified Code for Units of Measure",
      authors: ["Gunther Schadow", "Clement J. McDonald"],
      publisher: "Regenstrief Institute, Inc. and the UCUM Organization",
      date: "17 June 2024"
    }
  }
};
