"use client";
import { useState, useEffect } from "react";

const SPORTS = [
  { id: "cricket",      name: "CRICKET",      category: "FIELD EVENT",    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=800&fit=crop" },
  { id: "football",     name: "FOOTBALL",     category: "FIELD EVENT",    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=800&fit=crop" },
  { id: "basketball",   name: "BASKETBALL",   category: "COURT EVENT",    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=800&fit=crop" },
  { id: "volleyball",   name: "VOLLEYBALL",   category: "COURT EVENT",    img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=800&fit=crop" },
  { id: "tennis",       name: "TENNIS",       category: "COURT EVENT",    img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=800&fit=crop" },
  { id: "badminton",    name: "BADMINTON",    category: "COURT EVENT",    img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=800&fit=crop" },
  { id: "table_tennis", name: "TABLE TENNIS", category: "INDOOR EVENT",   img: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&h=800&fit=crop" },
  { id: "squash",       name: "SQUASH",       category: "INDOOR EVENT",   img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop" },
  { id: "snooker",      name: "SNOOKER",      category: "INDOOR EVENT",   img: "https://images.unsplash.com/photo-1615213612138-4d1195b1c0e1?w=600&h=800&fit=crop" },
  { id: "athletics",    name: "ATHLETICS",    category: "TRACK EVENT",    img: "https://images.unsplash.com/photo-1532444503650-c3b244d30a7b?w=600&h=800&fit=crop" },
  { id: "kabaddi",      name: "KABADDI",      category: "CONTACT EVENT",  img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=800&fit=crop" },
  { id: "taekwondo",    name: "TAEKWONDO",    category: "COMBAT EVENT",   img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&h=800&fit=crop" },
  { id: "powerlifting", name: "POWERLIFTING", category: "STRENGTH EVENT", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=800&fit=crop" },
  { id: "chess",        name: "CHESS",        category: "BOARD EVENT",    img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&h=800&fit=crop" },
  { id: "carrom",       name: "CARROM",       category: "BOARD EVENT",    img: "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=600&h=800&fit=crop" },
];

const SPORT_RULES = {
  general: {
    title: "RULES & POLICIES",
    general: [
      "Players must not exceed the age of 25 years, with the exception of BITS alumni teams.",
      "The exchange or interchange of players between teams is strictly prohibited.",
      "Each team must present a college photo ID, a government-issued photo ID (PAN/Aadhar via DigiLocker ONLY), and a Bonafide certificate for every player. Foreign players require a passport.",
      "Violations may result in serious consequences; the organizing committee's decision is final.",
      "In the event of any disputes or ties, decisions made by referees and the organizing committee are final.",
    ],
    cards: [
      {
        title: "CODE OF CONDUCT",
        items: [
          "Drinking, smoking, or possession of alcohol/prohibited substances is not permitted inside the campus or hostels.",
          "If a doctor has prescribed medication, carry a copy of the prescription.",
          "Severe disciplinary action and fines will be imposed against offenders violating rules or causing damage.",
        ],
      },
      {
        title: "DISPUTES & COMPLAINTS",
        items: [
          "Report issues 30 mins before/after the match to the designated committee.",
          "Step 1: Rs. 800 deposit required to register a complaint.",
          "Step 2: Submit the provided form via the team captain/representative.",
          "Step 3: If valid, strict measures are taken and deposit refunded. If invalid, deposit is retained.",
        ],
      },
    ],
  },
  football: {
    title: "FOOTBALL RULEBOOK",
    general: [
      "Standard FIFA rules apply. Arrive 20 mins prior to kickoff. Walkover awarded if 15 mins late.",
      "Tie-breakers: Goal Difference → Goals Scored → Fewer Goals Conceded → H2H → Cards.",
      "Card Points: Yellow (−1), Indirect Red (−3), Direct Red (−4). 2 yellows in different matches = 1 match suspension.",
      "Group Stage Points: Win (3), Draw (1), Loss (0). Semis/Finals draw goes straight to penalties. Max 5 substitutions.",
    ],
    cards: [
      { title: "MEN'S FORMAT", items: ["Squad: Max 18, Min 13 registered. Min 7 to start.", "Group Stage: 50 mins (25m halves)", "Semis & Finals: 90 mins (45m halves)", "Opposing team wins if a team gets 4+ red cards."] },
      { title: "WOMEN'S FORMAT", items: ["Squad: 7v7. Max 12, Min 7 registered. Min 5 to start.", "Rules: No offsides. Throw-ins only. Rolling subs allowed.", "Group Stage: 40 mins (20m halves)", "Opposing team wins if a team gets 2+ red cards."] },
    ],
  },
  cricket: {
    title: "CRICKET RULEBOOK",
    general: [
      "Matches adhere to the latest ICC T20 regulations using a White Ball. Arrive 15 mins early.",
      "Over Rate: 1 over every 4 minutes. Penalty: fielding team limited to 4 players outside the 30-yard circle.",
      "Teams must provide and maintain their own kits. Neon bibs are mandatory for benched players.",
    ],
    cards: [
      { title: "TOURNAMENT FORMAT", items: ["Squad: Max 16 players, Min 13 required.", "Points: Win (2 pts), Loss (0 pts). Ties decided by Net Run Rate.", "Group Stage & Semis: 15 Overs (5 Overs Powerplay).", "Final Match: 20 Overs (6 Overs Powerplay).", "Ties: Super over determines the winner."] },
    ],
  },
  basketball: {
    title: "BASKETBALL RULEBOOK",
    general: [
      "Adheres to standard FIBA rules. Arrive 15 mins prior. Max 12 players per team.",
      "Uniforms: Same color jerseys with printed numbers. No accessories allowed. Nails must be trimmed.",
      "Timeouts: 60 seconds each. 2 in first half, 3 in second half, 1 in overtime. Cannot carry over.",
    ],
    cards: [
      { title: "BOYS FORMAT", items: ["Stop-and-go timer method.", "4 Quarters, 10 minutes per quarter.", "5-minute overtime period in case of a draw."] },
      { title: "GIRLS FORMAT", items: ["Stop-and-go timer method.", "4 Quarters, 7 minutes per quarter.", "4-minute overtime period in case of a draw."] },
    ],
  },
  volleyball: {
    title: "VOLLEYBALL RULEBOOK",
    general: [
      "FIVB 2013 regulations applicable. Age limit is 25 years.",
      "Teams must report 15 minutes prior; failure may result in a victory awarded to the opposing team.",
      "Uniforms: Same color jerseys with printed numbers. Libero must wear a contrasting jersey.",
    ],
    cards: [
      { title: "MATCH FORMAT", items: ["Squad: Max 12 players, Min 7 players.", "Group Stage: 3 sets of 25 points; final set is 15 points.", "Semi-Finals & Finals: Best-of-five. Sets 25 pts, final set to 15 pts."] },
    ],
  },
  tennis: {
    title: "TENNIS RULEBOOK",
    general: [
      "Matches conducted as per international rules. Arrive 20 minutes prior. Walkover if 15 minutes late.",
      "Every team must assign a Point of Contact who is reachable at all times.",
    ],
    cards: [
      { title: "MATCH FORMAT", items: ["Davis Cup Format: Max 3 matches per round.", "Consists of 2 singles rubbers and 1 double rubber (the deciding rubber).", "Best of 11 games until semi-finals, then Best of 3 sets format."] },
      { title: "PARTICIPATION LIMITS", items: ["General: Max 1 team per college. BITS Pilani/Hyd max 2 teams. BITS Goa max 3 teams.", "Squad Size: Min 2, Max 4 players per team."] },
    ],
  },
  badminton: {
    title: "BADMINTON RULEBOOK",
    general: [
      "Eligibility: Max age 25. Undergraduates only. Graduate students and faculty excluded.",
      "Attire: Clean, non-marking shoes mandatory (donned only upon arrival at the court).",
      "Adheres to BWF rules. Feather shuttlecocks used.",
    ],
    cards: [
      { title: "TEAM FORMATS", items: ["Men's Team: Min 4, Max 7. Clash: S1, S2, D1, S3, D2.", "Women's Team: Min 2, Max 4. Clash: S1, D1, S2.", "Max 2 matches per player in team events (1 singles, 1 doubles)."] },
      { title: "INDIVIDUAL FORMATS", items: ["Individual Matches: 3 games of 21 points (extensions up to 25 points).", "Mixed Doubles: 1 Man + 1 Woman. Knockout. Best of 3 games."] },
    ],
  },
  kabaddi: {
    title: "KABADDI RULEBOOK",
    general: [
      "Follows International Kabaddi Federation rules. Age limit 25. Max weight limit is 85kg.",
      "Played on a Mat court. Proper playing kit is mandatory.",
      "Bonus points, Super Tackle, and All-Out points are applicable.",
    ],
    cards: [
      { title: "FORMAT & QUALIFICATION", items: ["Squad: Min 7 players, Max 12 per team. Max 2 teams per college.", "Game Duration: 2 sets of 20 minutes each, min 40 raids, 5-minute break between.", "Knockouts: If drawn, 5 additional raids. If still drawn, one golden raid on toss win."] },
    ],
  },
  table_tennis: {
    title: "TABLE TENNIS RULEBOOK",
    general: [
      "Matches conducted as per standard ITTF rules. Age limit is 25.",
      "Academy teams are allowed if at least 1 member is a BITS alumni.",
    ],
    cards: [
      { title: "TEAM FORMATS", items: ["Boys Team: Min 4, Max 5. Order: A vs X, B vs Y, CD vs WZ, A vs Y, B vs X.", "Girls Team: Min 3, Max 5. Order: A vs X, B vs Y, CA/CB vs ZX/ZY.", "Team matches: Best of 5 (11 pts each). Finals: Best of 7."] },
      { title: "INDIVIDUAL & MIXED", items: ["Singles: Knockout. Best of 5 until finals; Finals are Best of 7.", "Mixed Doubles: Knockout. Partnering across different teams is allowed."] },
    ],
  },
  athletics: {
    title: "ATHLETICS RULEBOOK",
    general: [
      "Conducted under AFI Rules. Disqualified if failing to register before final call.",
      "Max 3 athletes per event per team (except relays: 1 team of 4 + 1 reserve).",
      "Electronic gadgets/earphones are prohibited; watches are permitted.",
    ],
    cards: [
      { title: "TRACK EVENTS", items: ["Sprint/Mid: 100m, 200m, 400m, 800m.", "Relays: 4×100m, 4×400m.", "Distance: 1500m, 3000m, 5000m.", "100m on Synthetic. 200m+ on Grass. Long Distance on Central Lawns."] },
      { title: "FIELD: SHOT PUT", items: ["> 8 athletes: 3 trials each, top 8 get 3 additional.", "≤ 8 athletes: 6 trials each.", "Personal shot puts NOT permitted — supplied by organizers."] },
    ],
  },
  taekwondo: {
    title: "TAEKWONDO RULEBOOK",
    general: [
      "Bouts conducted under WT New Competition Rules. Single Elimination format.",
      "Best of 3 rounds. Each match: 3 rounds of 2 minutes, 1-minute rest between.",
      "Athletes must wear WT & TFI-approved Dobok and all mandatory protective equipment.",
      "Official weigh-in on competition day.",
    ],
    cards: [
      {
        title: "WEIGHT CATEGORIES",
        table: {
          headers: ["Category", "Men's Division", "Women's Division"],
          rows: [
            ["Finweight", "≤ 54.0 kg", "≤ 46.0 kg"],
            ["Flyweight", "54.1 – 58.0 kg", "46.1 – 49.0 kg"],
            ["Bantamweight", "58.1 – 63.0 kg", "49.1 – 53.0 kg"],
            ["Featherweight", "63.1 – 68.0 kg", "53.1 – 57.0 kg"],
            ["Lightweight", "68.1 – 74.0 kg", "57.1 – 62.0 kg"],
            ["Welterweight", "74.1 – 80.0 kg", "62.1 – 67.0 kg"],
            ["Middleweight", "80.1 – 87.0 kg", "67.1 – 74.0 kg"],
            ["Heavyweight", "> 87.1 kg", "> 74.1 kg"],
          ],
        },
      },
    ],
  },
  carrom: {
    title: "CARROM RULEBOOK",
    general: [
      "Standard Carrom rules apply. Any hand may be used. Thumb/Back-Shot is allowed.",
      "No discussion allowed between participants in a doubles game.",
      "Participants must bring their own strikers (certified by Chief Referee).",
    ],
    cards: [
      { title: "GAME FORMAT", items: ["A game shall be of 25 points or eight boards.", "Clashes: Best of 3 out of 5 matches (2 singles, 1 doubles)."] },
      { title: "PARTICIPATION", items: ["Max 2 teams per college. Min 4, Max 5 players per team.", "Individual can play max 1 singles and 1 doubles match per tie."] },
    ],
  },
  chess: {
    title: "CHESS RULEBOOK",
    general: [
      "Standard FIDE Touch and Move rules apply.",
      "Board Order must not be violated, or the player will be awarded a loss.",
      "Substitutions: A substitute may play only on the last board.",
    ],
    cards: [
      { title: "TEAM EVENT FORMAT", items: ["Swiss League Format. Min 4, Max 5 players per team.", "Points: Win (1), Draw (½), Loss (0). Higher sum gets 2 series points.", "Tiebreaker: Armageddon match. Time Control: 60 mins + 30s Inc."] },
      { title: "BLITZ FORMAT", items: ["Individual event. Max 8 players per college.", "Tiebreaker: Head-to-Head, followed by Armageddon.", "Time Control: 3 mins + 2s Inc."] },
    ],
  },
  snooker: {
    title: "SNOOKER RULEBOOK",
    general: [
      "WPBSA rules will be followed. Any discrepancies penalized accordingly.",
      "Teams must arrive 20 minutes prior. Walkover if 15 mins late.",
    ],
    cards: [
      { title: "TOURNAMENT FORMAT", items: ["Squad: Max 2 teams per college. Min 3 players, Max 5.", "A player cannot play 2 consecutive frames; max 2 frames per match.", "Frames: Best of 5 (10-ball) until semis. Semis: Best of 5 (15-ball). Finals: Best of 7.", "Points: 3-0 win (3 pts), 3-1 win (2 pts), 3-2 win (1 pt)."] },
    ],
  },
  squash: {
    title: "SQUASH RULEBOOK",
    general: [
      "All games played with Dunlop Pro Double Dot Ball (official PSA ball).",
      "Players must wear non-marking soles and approved eye protection.",
      "Scoring: Games played to 11 points. Tied at 10-10: win by 2 clear points.",
    ],
    cards: [
      { title: "TEAM EVENT FORMAT", items: ["WSF rules apply. Min 3, Max 5 players.", "Best of 3 matches in league stages, Best of 5 in knockouts.", "3rd match is played in groups even if a team wins the first two."] },
      { title: "INDIVIDUAL FORMAT", items: ["Purely Knockout. All matches up to Pre-QF are Best of 3 games.", "Quarterfinals onwards are Best of 5 games."] },
    ],
  },
  powerlifting: {
    title: "POWERLIFTING RULEBOOK",
    general: [
      "3 Main Lifts: Bench Press, Squat, Deadlift. Highest combined weight lifted wins.",
      "Gear: No knee straps, elbow sleeves, or wraps. Wrist wraps are allowed. Lift in shoes or barefoot (NO SOCKS).",
      "Plates: Metal Olympic plates for bench/squat. Rubber compound plates allowed for deadlift.",
    ],
    cards: [
      {
        title: "WEIGHT CLASSES",
        table: {
          headers: ["#", "Boys Categories", "Girls Categories"],
          rows: [
            ["1", "< 58 kg", "< 46 kg"],
            ["2", "62 – 67 kg", "46 – 56 kg"],
            ["3", "67 – 73 kg", "56 – 66 kg"],
            ["4", "73 – 78 kg", "66 – 76 kg"],
            ["5", "78 – 83 kg", "76+ kg"],
            ["6", "83 – 88 kg", "—"],
            ["7", "88+ kg", "—"],
          ],
        },
      },
    ],
  },
};

export default function SportsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeModal]);

  const rules = activeModal ? SPORT_RULES[activeModal] : null;

  return (
    <main className="relative w-full bg-[#050200]">

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to   { transform: scale(1.12); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.97) translateY(14px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1;   }
        }
        @keyframes shimmer-card {
          from { left: -70%; }
          to   { left: 160%; }
        }

        .sport-card {
          transition: transform 0.45s cubic-bezier(.22,.68,0,1.2),
                      box-shadow 0.45s ease,
                      border-color 0.3s ease,
                      opacity 0.3s ease,
                      filter 0.3s ease;
        }
        .sport-card:hover {
          transform: translateY(-10px) scale(1.025) !important;
          box-shadow: 0 32px 64px rgba(255,107,0,0.22) !important;
          border-color: rgba(255,107,0,0.4) !important;
          opacity: 1 !important;
          filter: none !important;
        }
        .sport-card:hover .card-img {
          transform: scale(1.1) translateY(-4px);
          filter: brightness(1.05) saturate(1.1);
        }
        .sport-card:hover .card-name { color: #FF6B00; }
        .sport-card:hover .card-bar  { width: 48px !important; }
        .sport-card::after {
          content: '';
          position: absolute; top: 0; left: -70%;
          width: 40%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent);
          transform: skewX(-20deg);
          opacity: 0; pointer-events: none;
        }
        .sport-card:hover::after {
          opacity: 1;
          animation: shimmer-card 0.75s ease-in-out forwards;
        }
        .sports-grid:hover .sport-card:not(:hover) {
          opacity: 0.38 !important;
          filter: grayscale(65%) brightness(0.65) !important;
          transform: scale(0.97) !important;
        }

        .rules-btn { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .rules-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 20px 56px rgba(255,107,0,0.45) !important;
        }
        .modal-close { transition: background 0.2s ease, color 0.2s ease; }
        .modal-close:hover { background: #FF6B00 !important; color: #fff !important; }
      `}} />

      {/* ── HERO ── */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* Background — same treatment as Home() */}
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2970&auto=format&fit=crop"
          alt="Sports arena"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: "center 30%",
            opacity: 0.4,
            scale: 1.05,
            animation: "slowZoom 20s infinite alternate ease-in-out",
          }}
        />
        {/* Exact same gradient stack as Home() */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0400] via-transparent to-[#0a0400]/80" />
        <div className="absolute inset-0 bg-[#FF6B00]/10 mix-blend-color" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050200_100%)] opacity-90" />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center text-center px-6 mt-16"
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          {/* Eyebrow — same mono style */}
          <div className="text-[10px] md:text-xs font-mono font-bold text-white/50 tracking-[5px] uppercase mb-6">
            Choose Your Discipline
          </div>

          {/* Title — same font + gradient as SPREE on Home() */}
          <div className="relative group cursor-default flex flex-col items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[360px] md:h-[360px] bg-[#FF6B00] rounded-full blur-[120px] opacity-30" />

            <h1
              className="relative leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30"
              style={{ fontSize: "clamp(80px, 15vw, 150px)" }}
            >
              THE
            </h1>
            <h1
              className="relative  leading-none tracking-tight -mt-2 md:-mt-4"
              style={{
                fontSize: "clamp(80px, 15vw, 150px)",
                color: "transparent",
                WebkitTextStroke: "2px rgba(255,255,255,0.65)",
              }}
            >
              ARENAS
            </h1>
          </div>

          {/* Sub — same accent style as Home() */}
          <div
            className="mt-10 flex flex-col items-center gap-3"
            style={{
              opacity: isMounted ? 1 : 0,
              transition: "opacity 1s 0.45s ease",
            }}
          >
            <div className="text-[10px] md:text-xs font-mono font-bold text-white/50 tracking-[5px] uppercase text-center">
              Bits Pilani K.K. Birla Goa Campus
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#FF6B00]" />
              <span className="font-mono text-sm tracking-[3px] text-[#FF6B00] font-bold uppercase drop-shadow-[0_0_8px_rgba(255,107,0,0.8)]">
                15 Disciplines · One Champion
              </span>
              <span className="w-8 h-px bg-[#FF6B00]" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 pointer-events-none">
          <div
            className="w-px h-10 bg-[#FF6B00]"
            style={{ animation: "pulse-glow 1.8s ease-in-out infinite" }}
          />
          <span className="font-mono text-[9px] tracking-[4px] text-[#FF6B00] uppercase">Scroll</span>
        </div>
      </section>

      {/* ── GRID SECTION ── */}
      <section className="relative bg-[#050200] px-6 md:px-12 pt-20 pb-32">

        {/* Ambient glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700]/4 rounded-full blur-[160px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">

          {/* General Rules CTA */}
          <div className="flex justify-center mb-16">
            <button
              className="rules-btn font-mono text-xs font-bold tracking-[3px] uppercase text-white px-10 py-5 rounded-full cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #FF6B00, #FFD700)",
                border: "none",
                boxShadow: "0 10px 40px rgba(255,107,0,0.28)",
              }}
              onClick={() => setActiveModal("general")}
            >
              Read General Instructions & Policies
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-5 mb-14">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#FF6B00]/20" />
            <span className="font-mono text-[10px] font-bold tracking-[4px] text-[#FF6B00] uppercase whitespace-nowrap">
              Click a Sport to View Rules
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#FF6B00]/20" />
          </div>

          {/* Grid */}
          <div
            className="sports-grid grid gap-4 md:gap-5"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(192px, 1fr))" }}
          >
            {SPORTS.map((sport, i) => (
              <div
                key={sport.id}
                className="sport-card group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  height: 288,
                  background: "#0d0804",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  opacity: isMounted ? 1 : 0,
                  animation: isMounted ? `fadeUp 0.55s ease-out both ${i * 0.04}s` : "none",
                }}
                onClick={() => setActiveModal(sport.id)}
              >
                {/* Photo */}
                <img
                  className="card-img absolute inset-0 w-full object-cover"
                  src={sport.img}
                  alt={sport.name}
                  style={{
                    height: "70%",
                    transition: "transform 0.7s cubic-bezier(.22,.68,0,1.1), filter 0.4s ease",
                  }}
                />

                {/* Dark overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(13,8,4,0) 20%, rgba(13,8,4,0.7) 55%, #0d0804 100%)",
                  }}
                />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <div className="font-mono text-[9px] font-bold tracking-[2.5px] text-[#FF6B00] uppercase mb-1">
                    {sport.category}
                  </div>
                  <h3
                    className="card-name font-['Bebas_Neue',_sans-serif] text-white leading-none"
                    style={{ fontSize: 30, letterSpacing: "0.02em", transition: "color 0.3s ease" }}
                  >
                    {sport.name}
                  </h3>
                  <div
                    className="card-bar mt-2 bg-[#FFD700] rounded-full"
                    style={{ width: 0, height: 3, transition: "width 0.45s cubic-bezier(.22,.68,0,1.2)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {activeModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
          style={{
            background: "rgba(5,2,0,0.82)",
            backdropFilter: "blur(10px)",
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-4xl flex flex-col overflow-hidden"
            style={{
              maxHeight: "90vh",
              background: "#0d0804",
              border: "1px solid rgba(255,107,0,0.18)",
              borderRadius: 28,
              boxShadow: "0 48px 120px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.04)",
              animation: "modalIn 0.3s ease-out both",
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-8 md:px-12 py-7 sticky top-0 z-10"
              style={{
                background: "#0d0804",
                borderBottom: "1px solid rgba(255,107,0,0.1)",
              }}
            >
              <h2
                className="font-['Bebas_Neue',_sans-serif] text-white leading-none mt-1"
                style={{ fontSize: "clamp(26px, 4vw, 44px)", letterSpacing: "0.04em" }}
              >
                {rules?.title ?? (SPORTS.find(s => s.id === activeModal)?.name + " RULEBOOK")}
              </h2>
              <button
                className="modal-close w-11 h-11 rounded-full flex items-center justify-center font-black text-base cursor-pointer flex-shrink-0"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.65)",
                }}
                onClick={() => setActiveModal(null)}
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto px-8 md:px-12 py-10">
              {rules ? (
                <>
                  <h3
                    className="font-['Bebas_Neue',_sans-serif] text-white mb-5 pb-4"
                    style={{ fontSize: 28, borderBottom: "1px solid rgba(255,107,0,0.12)" }}
                  >
                    General Rules
                  </h3>
                  <ul className="mb-10 space-y-3 list-none p-0">
                    {rules.general.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                        <span className="text-[#FF6B00] flex-shrink-0 mt-[3px]" style={{ fontSize: 9 }}>■</span>
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color:rgba(255,255,255,0.88)">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>

                  <div
                    className="grid gap-4"
                    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
                  >
                    {rules.cards.map((card, ci) => (
                      <div
                        key={ci}
                        style={{
                          background: "rgba(255,107,0,0.04)",
                          border: "1px solid rgba(255,107,0,0.14)",
                          borderRadius: 16,
                          padding: "24px",
                        }}
                      >
                        <div
                          className="font-mono font-bold uppercase mb-4"
                          style={{ fontSize: 10, letterSpacing: "2.5px", color: "#FF6B00" }}
                        >
                          {card.title}
                        </div>

                        {card.items && (
                          <ul className="space-y-2 list-none p-0 m-0">
                            {card.items.map((item, ii) => (
                              <li key={ii} className="flex gap-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                                <span className="flex-shrink-0 mt-[3px]" style={{ color: "#FFD700", fontSize: 9 }}>▸</span>
                                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color:rgba(255,255,255,0.85)">$1</strong>') }} />
                              </li>
                            ))}
                          </ul>
                        )}

                        {card.table && (
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                              <thead>
                                <tr>
                                  {card.table.headers.map((h, hi) => (
                                    <th
                                      key={hi}
                                      className="text-left font-mono font-bold uppercase"
                                      style={{
                                        padding: "8px 10px",
                                        fontSize: 10,
                                        letterSpacing: "1.5px",
                                        color: "#FF6B00",
                                        borderBottom: "1px solid rgba(255,107,0,0.18)",
                                      }}
                                    >
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {card.table.rows.map((row, ri) => (
                                  <tr key={ri} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                                    {row.map((cell, cii) => (
                                      <td
                                        key={cii}
                                        style={{
                                          padding: "8px 10px",
                                          color: cii === 0 ? "rgba(255,215,0,0.85)" : "rgba(255,255,255,0.5)",
                                          fontWeight: cii === 0 ? 600 : 400,
                                        }}
                                      >
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="py-20 text-center">
                  <div className="font-mono text-xs tracking-[4px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.18)" }}>
                    Transmission Pending
                  </div>
                  <h3 className="font-['Bebas_Neue',_sans-serif] text-white" style={{ fontSize: 42 }}>
                    Official Rulebook Coming Soon
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}