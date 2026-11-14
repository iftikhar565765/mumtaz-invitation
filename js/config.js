/* ═══════════════════════════════════════════════════════════════
   MUMTAZ · config.js
   ---------------------------------------------------------------
   Main personalisation data for the site and visual editor.
   Longer copy, palette, and theme are editable here. Values
   marked SAMPLE are tasteful placeholders — replace them with
   your own before sending the link to your guests.
   ═══════════════════════════════════════════════════════════════ */

window.HEIRLOOM = {
  templateId: "mumtaz",

  /* ── The couple — SAMPLE content, replace with your names ────── */
  couple: {
    partnerOne: "Ayaan",                    // SAMPLE
    partnerTwo: "Mehr",                     // SAMPLE
    initials:  "A · M",                     // SAMPLE — used on seals & monograms
    namesLine: "Ayaan & Mehr"               // SAMPLE — used across the site
  },

  /* ── The wedding date & time ─────────────────────────────────
     iso : ISO 8601 date-time WITH an explicit UTC offset, so the
           countdown and the calendar files are correct on every
           guest's device, wherever they are in the world.
           Format: "YYYY-MM-DDTHH:MM:SS±HH:MM"
     display / words / numerals : how the date reads in the copy. */
  wedding: {
    iso: "2027-11-06T10:18:00+05:30",                                        // EDIT
    endIso: "2027-11-06T23:00:00+05:30",                                     // EDIT — end of the celebration
    display: "Saturday, 6 November 2027 · the pheras begin at 10:18 in the morning", // EDIT
    zoneLabel: "IST",                                                        // EDIT — optional note for guests abroad
    words: "Saturday · The Sixth of November · Two Thousand Twenty-Seven",   // EDIT
    numerals: "06 · 11 · 2027",                                              // EDIT
    weekday: "Saturday",                                                     // EDIT — the ornamental date row
    month: "November",                                                       // EDIT
    day: "06",                                                               // EDIT — the large numeral
    year: "2027",                                                            // EDIT
    muhuratLabel: "Pheras",                                                  // EDIT
    muhurat: "10:18 in the morning",                                         // EDIT
    eventTitle: "Ayaan & Mehr — Wedding"                                     // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "The Taj Vista Pavilion",                       // SAMPLE
    address: "18 Fatehabad Road, Agra, Uttar Pradesh 282001", // SAMPLE
    mapsQuery: "The Taj Vista Pavilion, Fatehabad Road, Agra",
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Ayaan & Mehr · 6 November 2027 — A Taj Mahal Wedding Invitation",
    pageDescription: "Ayaan and Mehr request the honour of your presence at The Taj Vista Pavilion, Fatehabad Road, Agra — two days of mehndi, qawwali and the sacred pheras at 10:18 on Saturday the sixth of November 2027, in the city of the monument to love. Open your invitation.",
    socialTitle: "Ayaan & Mehr — An Invitation · 06.11.2027",
    socialDescription: "Ivory marble, gemstone inlay and a happily ever after — you are cordially invited.",
    navStory: "Story",
    navDetails: "Events",
    navVenue: "Venue",
    navRsvp: "RSVP",
    menuInvitation: "The Invitation",
    menuStory: "Our Story",
    menuSaveDate: "Save the Date",
    menuDetails: "The Celebrations",
    menuPalette: "The Palette",
    menuWeddingDay: "The Festivities",
    menuVenue: "Venue & Location",
    menuRsvp: "Kindly Respond",
    menuCountdown: "The Countdown",
    menuClosing: "A Closing Note",
    openingEyebrow: "At the great gate, every veil is lifted gently — you are invited to the wedding of",
    openingHint: "Touch the seal to lift the veil",
    openButton: "Enter the Pavilion",
    skipButton: "Skip straight to the invitation",
    envelopeAddress: "their honoured guests",
    invitationEyebrow: "With the blessings of our families",
    invitationLead: "We joyfully invite you to celebrate the wedding of",
    invitationAnd: "and",
    invitationClosing: "Your presence is the gold leaf on our day",
    heroVenueLabel: "Venue",
    sceneSignboard: "Together is our favorite place to be",
    invitationVenueSuffix: "· Agra",
    storyKicker: "The Chronicle",
    storyTitle: "Two hearts,",
    storyTitleScript: "one monument",
    storyParagraphOne: "Every monument begins as a moment, and ours was an October morning at Mehtab Bagh, the moonlight garden across the river. One shared bench, one scarf carried off by the river wind, one conversation that outlasted the sunrise as the Taj rose slowly out of the mist — and somehow, that morning decided the rest of our lives.",
    storyParagraphTwo: "Five years and two cities later, we are returning to the river to begin our next chapter — adding our names to the city of the world's most famous promise: that love, built patiently and by hand, outlives everything. Nothing would mean more than to have you standing beside us when we do.",
    storyQuote: "A teardrop on the cheek of time.",
    storyQuoteLabel: "— Rabindranath Tagore, on the Taj Mahal — the line we read to each other that first morning",
    storyNote: "chapter one, and every chapter after",
    storyNoteCredit: "— pencilled on the back of a Taj Mahal entry ticket",
    storyCaptionOne: "the morning at Mehtab Bagh",
    storyCaptionTwo: "the scarf on the river wind",
    storyCaptionFour: "the seven vows",
    storyAside: "and they lived",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "two days of roses, qawwali & sacred vows",
    saveDateNote: "Add the date to your calendar and keep these particulars close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "The Celebrations",
    detailsTitleFirst: "Wedding",
    detailsTitleSecond: "Events",
    detailsIntro: "Two days of festivity in the city of the Taj — at a glance.",
    haldiLabel: "The Haldi",
    haldiTime: "Friday, 5 November 2027 · nine in the morning",
    haldiNote: "A golden morning of turmeric, songs and blessings on the riverside terrace.",
    mehndiLabel: "The Mehndi",
    mehndiTime: "Friday, 5 November 2027 · four in the afternoon",
    mehndiNote: "Henna in the shape of domes and vines, folk songs, and rose sherbet under the arches.",
    ceremonyLabel: "The Qawwali Night",
    ceremonyTime: "Friday, 5 November 2027 · half past seven in the evening",
    ceremonyNote: "An evening of qawwali and ghazals on marble — bring your hearts, and your dancing shoes.",
    receptionLabel: "The Pheras",
    receptionTime: "Saturday, 6 November 2027 · 10:18 in the morning",
    receptionNote: "Seven vows, seven steps and the mangalsutra — as the shehnai plays beneath the arches.",
    feastLabel: "The Walima",
    feastTime: "Saturday, 6 November 2027 · half past seven in the evening",
    feastNote: "A candlelit feast in the marble hall — the banquet the emperors would recognise.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply card further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Jewel tones & ivory",
    particularsAttireNote: "Silk, pashmina and fine embroidery are most welcome — dress as though the marble could blush.",
    particularsCarriagesLabel: "Kindly Reply",
    particularsCarriagesTime: "the sixth of October, 2027",
    particularsCarriagesNote: "So the banquet count is right and every seat is saved.",
    paletteKicker: "The Colours of the Day",
    paletteTitleFirst: "The inlay",
    paletteTitleSecond: "palette",
    paletteIntro: "Makrana ivory and champagne gold, carnelian and lapis, jade and rose quartz — the stones of the inlay, worn by our favourite people.",
    dressCodeLabel: "Attire · Jewel Tones & Ivory",
    dressCodeTitle: "Stones of the inlay",
    dressCodeNote: "Ivory silk, carnelian brights and lapis depths are most welcome — dress as splendidly as you feel.",
    weddingDayKicker: "The Celebrations",
    weddingDayTitleFirst: "The wedding",
    weddingDayTitleSecond: "festivities",
    venueKicker: "The Place",
    venueDescription: "A marble pavilion on Fatehabad Road with the Taj on the horizon — cusped arches and chandeliers, shehnai at the door, roses on every table and candles floating in the courtyard bowl.",
    venueCeremonyLabel: "Pheras",
    venueCeremonyText: "in the garden mandap, as the shehnai plays",
    venueReceptionLabel: "Walima",
    venueReceptionText: "candlelit dinner in the marble hall",
    mapButton: "View Location",
    rsvpKicker: "Your Reply",
    rsvpTitle: "Kindly Respond",
    rsvpLead: "Kindly reply by",
    rsvpNameLabel: "Your name",
    rsvpNamePlaceholder: "e.g. Mehrunissa Khan",
    rsvpNameError: "May we have your name? Two letters or more will do.",
    rsvpAttendanceLabel: "Will you be joining us?",
    rsvpAcceptLabel: "Joyfully accepts",
    rsvpDeclineLabel: "Regretfully declines",
    rsvpAttendanceError: "Please let us know whether you can come.",
    rsvpGuestsLabel: "Seats in your party",
    rsvpGuestsError: "May we have a seat count between one and the party size allowed?",
    rsvpGuestSingular: "guest",
    rsvpGuestPlural: "guests",
    rsvpDietaryLabel: "Dietary requirements",
    rsvpDietaryPlaceholder: "Vegetarian, Jain, vegan, allergies…",
    rsvpMessageLabel: "A note for the couple",
    rsvpMessagePlaceholder: "Song requests, memories, blessings…",
    rsvpSubmitLabel: "Send Response",
    rsvpAmendLabel: "Amend the reply",
    countdownDaysLabel: "Days",
    countdownHoursLabel: "Hours",
    countdownMinutesLabel: "Minutes",
    countdownSecondsLabel: "Seconds",
    countdownKicker: "The Grand Countdown",
    countdownTitle: "counting the hours until",
    countdownPromise: "the pheras begin",
    closingScript: "with all our love",
    closingMessage: "Thank you, from the depths of our hearts, for being part of our story. May we always watch the dawn rise over the river the way we watched it that first morning — together, and with full hearts. Your presence completes our day.",
    footerTagline: "Ivory, gold and a monument to love."
  },

  palette: [
    { name: "Makrana Ivory",  color: "#F7F3EA" },
    { name: "Champagne Gold", color: "#C6A14F" },
    { name: "Carnelian",      color: "#A9502E" },
    { name: "Lapis Dusk",     color: "#1B2E4A" },
    { name: "Jade",           color: "#3E6B52" },
    { name: "Rose Quartz",    color: "#E4C9B4" }
  ],
  theme: "taj",
  themeColors: {},
  fonts: {
    editorial: "cormorant",
    display: "marcellus",
    script: "pinyon",
    hand: "laBelle",
    body: "ebGaramond"
  },

  /* ── Wedding festivities — SAMPLE words for the garland.
     Use one short phrase per entry; an empty list hides the section. */
  moments: ["The Mehndi", "The Haldi", "The Qawwali", "The Pheras", "The Walima", "The Blessings"],

  /* ── RSVP ─────────────────────────────────────────────────────
     endpoint : leave "" for the honest demonstration mode — the
                form validates and shows a preview of the reply and
                states clearly that nothing is sent or stored.
                Cloudflare's publishing service supplies the invitation-
                specific RSVP endpoint to public invitation pages.
     maxGuests: the number allowed by the invitation.
     deadline  : shown above the form.                                  */
  rsvp: {
    endpoint: "",
    maxGuests: 4,
    deadline: "the sixth of October, 2027"        // SAMPLE
  },

  /* ── Countdown wording (invalid or passed dates) ─────────────── */
  countdown: {
    invalidMessage: "The pheras are still being finalised — see the celebrations below.",
    pastMessage: "The celebration has begun — thank you for being part of our story."
  },

  /* ── Optional ambient music ───────────────────────────────────
     Drop a small looping file at assets/audio/theme.mp3 and set
     src to enable the volume toggle in the navigation. Never
     autoplays; stays silent if the file is missing.                  */
  audio: {
    src: ""             // e.g. "assets/audio/theme.mp3"
  }
};
