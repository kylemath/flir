THE HISTORY OF
FORWARD-LOOKING
INFRARED (FLIR)


Dr. James “Ralph” Teague
and David Schmieder

October 2021               DISTRIBUTION STATEMENT A
                           Approved for public release; distribution is unlimited.
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                              DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                         DISTRIBUTION STATEMENT A.
                                                                                               Approved for public release; distribution is unlimited.




                                                                                                 Form Approved
 REPORT DOCUMENTATION PAGE                                                                       OMB No. 0704-0188

  Public reporting burden for this collection of information is estimated to average 1 hour per response, including the time for reviewing
  instructions, searching existing data sources, gathering and maintaining the data needed, and completing and reviewing this collec-
  tion of information. Send comments regarding this burden estimate or any other aspect of this collection of information, including
  suggestions for reducing this burden to Department of Defense, Washington Headquarters Services, Directorate for Information
  Operations and Reports (0704-0188), 1215 Jefferson Davis Highway, Suite 1204, Arlington, VA 22202-4302. Respondents should be
  aware that notwithstanding any other provision of law, no person shall be subject to any penalty for failing to comply with a collection
  of information if it does not display a currently valid OMB control number.

  PLEASE DO NOT RETURN YOUR FORM TO THE ABOVE ADDRESS.
  1. REPORT DATE                                                2. REPORT TYPE                3. DATES COVERED
  October 2021                                                  Technical
                                                                Publication
  4. TITLE AND SUBTITLE                                                                       5a. CONTRACT NUMBER
  The History of Forward-Looking Infrared (FLIR)                                              FA8075-14-D-0001
                                                                                              5b. GRANT NUMBER
                                                                                              5c. PROGRAM ELEMENT NUMBER
  6. AUTHOR(S)                                                                                5d. PROJECT NUMBER
  Dr. James “Ralph” Teague and David Schmieder                                                5e. TASK NUMBER
                                                                                              5f. WORK UNIT NUMBER
  7. PERFORMING ORGANIZATION NAME(S) AND ADDRESS(ES) AND ADRESS(ES)                           8. PERFORMING ORGANIZATION REPORT
  Defense Systems Information Analysis Center (DSIAC)                                         NUMBER
  SURVICE Engineering Company
  4695 Millennium Drive
  Belcamp, MD 21017-1505
  9. SPONSORING/MONITORING AGENCY NAME(S) AND ADDRESS(ES)                                     10. SPONSOR/MONITOR’S ACRONYM(S)
  Defense Technical Information Center (DTIC)                                                 DTIC
  8725 John J. Kingman Rd.                                                                    11. SPONSOR/MONITOR’S REPORT
  Ft. Belvoir, VA 22060-6218                                                                  NUMBER(S)
  12. DISTRIBUTION/ AVAILABILITY STATEMENT
  Distribution A: Approved for public release; distribution is unlimited.
  13. SUPPLEMENTARY NOTES

  14. ABSTRACT
  This historical overview of the development of forward-looking infrared (FLIR) technology begins with discussions of the basic princi-
  ples of infrared (IR) radiation and early IR technology, such as the first IR detectors. Then, the early military development and uses of IR
  systems in both World Wars are explained, including the main industrial and government contributors to these early systems. Next, the
  FLIR design progression through the Vietnam War era is described including the development of common module FLIRs which led to the
  creation of both GEN1 and GEN2 FLIRs. Current trends and future projections in FLIR technology are then highlighted such as their appli-
  cation in urban warfare, persistent surveillance systems, microbolometers, passive and active fused sensors, and artificial intelligence.

  15. SUBJECT TERMS
  forward-looking infrared, FLIR, FLIR history, infrared technology, IR, World War I IR, World War II IR, common modules, Vietnam FLIR,
  Hughes Aircraft, Texas Instruments
  16. SECURITY CLASSIFICATION OF:                        17. LIMITATION         18.            19a. NAME OF RESPONSIBLE PERSON
  UNCLASSIFIED                                           OF ABSTRACT            NUMBER         Vincent “Ted” Welsh
  a. REPORT         b. ABSTRACT        c. THIS PAGE      UNCLASSIFIED           OF PAGES       19b. TELEPHONE NUMBER (include area code)
  UNCLASSIFIED      UNCLASSIFIED       UNCLASSIFIED                             127            443-360-4600

 Standard Form 298 (Rev. 8/98)                                              ON THE COVER:
 Prescribed by ANSI Std. Z39.18                                             (Source: Army National Guard, Maj. Will Cox)




Report Documentation Page // ii
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                             DISTRIBUTION STATEMENT A.
                                                                   Approved for public release; distribution is unlimited.




PREFACE
The decision to write a book on the history of forward-look-
ing infrared (FLIR) technology began at Georgia Tech Re-
search Institute (GTRI) in 2013, when the Military Sensing
Information Analysis Center (SENSIAC) program office looked
for ways to fill the continuing need to document important
defense technology information. SENSIAC was one of several
Defense Technical Information Center (DTIC)-funded Infor-
mation Analysis Centers (IACs) that were chartered to gather
and disseminate information to the defense community from
their specialty areas. SENSIAC’s specialty area was in sensors
with a focus on infrared (IR) sensors such as FLIRs, although it
was later expanded to include radar and acoustic sensors as
well as others. SENSIAC’s activity mostly consisted of con-
ducting research in vital defense sensor-related activities and
in organizing, conducting, and documenting classified sym-
posia. An important component of their work also consisted
of writing reports such as State-of-the-Art Reports (SOARs),
which kept the defense community up to date on current
sensor technologies. Thus, SENSIAC leadership, with guid-
ance and approval from Jim Howe of the Army’s Night Vision
& Electronic Sensors Directorate (NVESD), decided that doc-
umenting the history of FLIR technology could broaden the
perspective of new IR engineers by adding important histori-
cal context to the technology discovery process as well as by
providing a rudimentary explanation of the technology itself.
NVESD and SENSIAC management also believed this histori-
cal information would add valuable insight and guidance for
navigating the complex interplay of intracompany compe-
tition, intergovernmental cooperation, business marketing
decisions, and research and development resource alloca-
tion. They especially believed those insights held important
lessons for the future—far beyond IR technology itself.

Dr. James “Ralph” Teague and
David Schmieder




Preface // iii
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                 DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                            DISTRIBUTION STATEMENT A.
                                                                                  Approved for public release; distribution is unlimited.




THE AUTHORS
DR. JAMES “RALPH” TEAGUE was the FLIR history project            DAVID SCHMIEDER spent much of his career developing
program manager. Dr. Teague has over 46 years of expe-           imaging systems and performance metrics for military fire
rience in sensor and related technologies encompassing           control and targeting devices. His career began at Delco
material science to large-scale sensor system integration.       Division of GM on the Army’s Main Battle Tank replacement
He is currently a Principal Research Scientist at Georgia Tech   program. He was part of the effort to build laser pulse-
Professional Education (GTPE), providing short courses to        gated TV systems for night vision at a time when FLIRs were
the sensor community in detection and tracking systems;          not yet available. His career continued at Martin Marietta
laser systems; missile-seeker design; electro-optical (EO)/IR    Orlando, now Lockheed Martin, where he was on the team
payloads; self-defense systems; and chemical, biological, and    to qualify the company as a second-source supplier of the
explosion detection systems as well as required sensor-          groundbreaking Common Module FLIR. His team developed
related technologies such as detectors, image processing,        several FLIR enhancements, which later became standard
and optics. Dr. Teague was presented a Pioneer Award in          modules. Mr. Schmieder was also the lead author of the
space laser communications in the 1970s and received a           Common Module FLIR Design Manual. He went on to be-
Rockwell Pioneer award for his efforts within the IR counter-    come lead Electro-optical Systems Engineer on the Army’s
measures (IRCM) community in the 1990s. He was respon-           Apache TADS targeting system, which was one of the first
sible for the seeker activities at Lockheed Martin in Orlando.   high-volume FLIR applications. He also contributed to the Air
Dr. Teague has been an Associate Editor for the Institute of     Force’s LANTIRN fixed-wing targeting pod development and
Electrical and Electronics Engineers (IEEE) Aerospace and        to various reconnaissance pods. At Georgia Tech Research
Electronic Systems publications responsible for sensors, EOs,    Institute, Mr. Schmieder developed now widely used metrics
and radar content.                                               that allow FLIR designs to be optimized to enable more rapid
                                                                 acquisition of targets embedded in clutter. He developed the
                                                                 first professional education courses that taught electro-
                                                                 optical targeting, stealth, and self-protection design princi-
                                                                 ples to practicing engineers and scientists. For that effort he
                                                                 received Georgia Tech’s Outstanding Continuing Education
                                                                 Award. Mr. Schmieder has published six journal papers, over
                                                                 20 symposium papers, including three invited ones, and two
                                                                 book chapters. He was named a Fellow of the Military Sens-
                                                                 ing Symposia (MSS).




The Authors // iv
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                             DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                        DISTRIBUTION STATEMENT A.
                                                                              Approved for public release; distribution is unlimited.




ACKNOWLEDGMENTS
The authors wish to acknowledge the following individuals          Steve Jost (General Electric, later Sanders, Loral,
who were key contributors to FLIR development and to this          LMC, and BAE) facilitated key technology transfer
historical overview of this vital IR technology.                   from the French who had developed a break-
                                                                   through approach to fabricating second-gener-
      Kirby Taylor (Texas Instruments [TI], later DRS)             ation FLIR photodiode detector technology. He
      helped design, install, test, and fly the first gun-         used it to produce one of the first second-genera-
      ship FLIRs in the Vietnam War and later helped               tion scanning focal plane arrays for Navy aircraft.
      TI develop the first mass-produced “Common
      Module” FLIR.                                                Jim Wimmers (Cincinnati Electronics [CE, later
                                                                   L-3]) was a founder and principal operating officer
      Robert Sendall (Hughes Aircraft [HAC], later                 of Cincinnati Electronics. He contributed to and
      Raytheon) led efforts to design and build the first          witnessed the development of indium antimon-
      serial scan FLIRs and was most responsible for               ide, both in the form of a discrete detector materi-
      developing key FLIR optimization metrics that are            al and as a part of second-generation focal-plane
      still used to design modern FLIRs.                           arrays. This work included the development of
                                                                   key focal-plane array multiplexing technology.
      Paul Kruse (Honeywell Research Center, lat-
      er BAE) made the critical breakthroughs that           The authors would also like to thank Paul Norton (Santa
      enabled the development of mercury cadmium             Barbara Research Center [SBRC], later Raytheon) and Michael
      telluride detectors and the resulting first-gener-     Kinch (TI, later DRS) who generously provided permission
      ation FLIR. He also invented room-temperature          to use extractions from historical documents they wrote.
      microbolometer focal plane arrays. Both of these       Others provided both direct and indirect support by sharing
      contributions changed the course of FLIR history.      their knowledge over a period of many years. They include
                                                             such well-published IR engineers and scientists as Lucien
      Marion Reine (Honeywell Research Center, later
                                                             Biberman, Roger DeWames, Bill Tennant, Mark Greiner, James
      BAE) did important work in detector development
                                                             Ratches, and Ron Driggers.
      and carefully documented the many break-
      throughs and inventions of his colleague Paul
      Kruse.

      Charles Hanson (U.S. Army Night Vision Labora-
      tory [NVL], now NVESD] was a project engineer
      on the first-generation Common Module FLIR
      program and, from that vantage point, was a key
      witness to its development history.




Acknowledgments // v
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                             DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                        DISTRIBUTION STATEMENT A.
                                                                              Approved for public release; distribution is unlimited.




TABLE OF CONTENTS
REPORT DOCUMENTATION PAGE                                                                                                    ii

PREFACE 		                                                                                                                   iii

THE AUTHORS		                                                                                                                iv

ACKNOWLEDGMENTS                                                                                                              v

CHAPTER 1. BASIC PRINCIPLES OF IR TECHNOLOGY                                                                                 1-1

1.1 Background		                                                                                                             1-1

1.2 Sources of IR Radiation                                                                                                  1-2

1.3 IR Detectors		                                                                                                           1-4

1.3.1 Examples of IR Systems                                                                                                 1-5

CHAPTER 2. EARLY IR TECHNOLOGY                                                                                               2-1

2.1 Discovery of Invisible Light                                                                                             2-1

2.2 The First IR Detectors                                                                                                   2-1

2.3 Theoretical Foundations                                                                                                  2-1

CHAPTER 3. EARLY MILITARY IR USE IN WORLD WARS I AND II                                                                      3-1

3.1 Background		                                                                                                             3-1

3.2 Early Detectors                                                                                                          3-1

3.3 IR Systems in WWI                                                                                                        3-1

3.4 Lead Up to and Use of IR Systems in WWII                                                                                 3-2

3.4.1 German IR Research Program                                                                                             3-2

3.5 Summary of Developments to the End of WWII                                                                               3-4

CHAPTER 4. POST-WWII IR TECHNOLOGY                                                                                           4-1

4.1 Introduction		                                                                                                           4-1

4.2 Increased Investment in Government Laboratories and the Industrial Base                                                  4-1

4.3 Improved Radiometric Standards                                                                                           4-2

4.4 Better Communication of IR Research                                                                                      4-3

4.4.1 Conferences		                                                                                                          4-3

4.4.2 The IR Handbook and Other Publications                                                                                 4-4


Table of Contents // vi
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                             DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                        DISTRIBUTION STATEMENT A.
                                                              Approved for public release; distribution is unlimited.




4.5 Breakthroughs in Detector Development                                                                    4-5

4.5.1 PbS Detectors                                                                                          4-5

4.5.2 InSb Detectors                                                                                         4-5

4.5.3 Ge:Hg Detectors                                                                                        4-5

4.5.4 HgCdTe Detectors                                                                                       4-6

4.6 Development of IRST Systems                                                                              4-7

4.7 Development of Line Scan Mappers                                                                         4-8

4.8 Development of Performance Metrics                                                                       4-10

4.8.1 Bar Target Equivalency Criteria                                                                        4-10

4.9 Summary and Conclusions                                                                                  4-12

CHAPTER 5. VIETNAM-ERA FLIR DEVELOPMENT                                                                      5-1

5.1 Introduction		                                                                                           5-1

5.2 Vietnam War IR Imaging Problems and Solutions                                                            5-2

5.3 TI FLIR Development                                                                                      5-4

5.3.1 First FLIR System: FLIR 1                                                                              5-4

5.3.2 FLIR Design Progression                                                                                5-6

5.4 HAC FLIR Development                                                                                     5-8

5.4.1 The Advanced FLIR for the Air Force                                                                    5-9

5.4.2 EO Vision System FLIR for the Air Force B-52 Aircraft                                                  5-10

5.4.3 The Discoid Serial Scan FLIR                                                                           5-11

5.5 Summary of Vietnam-Era FLIR Developments                                                                 5-12

CHAPTER 6. GEN1 COMMON MODULE FLIR                                                                           6-1

6.1 Introduction		                                                                                           6-1

6.2 Vietnam-Era Contributions                                                                                6-1

6.3 Early NVL Development Activities                                                                         6-2

6.4 Emergence of Common Modules                                                                              6-3

6.4.1 TI Common Module Development Perspective                                                               6-3

6.4.2 NVL Common Module Development Perspective                                                              6-4

6.4.3 Common Modules Description                                                                             6-5



Table of Contents // vii
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                       DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                  DISTRIBUTION STATEMENT A.
                                                                        Approved for public release; distribution is unlimited.




6.5 Common Module Detector Evolution                                                                                   6-8

6.6 Summary of GEN1/Common Module History                                                                              6-9

CHAPTER 7. GEN2 FLIR: READ-OUT INTEGRATED CIRCUIT INVENTION AND SELF-SCANNED FPAs                                      7-1

7.1 Introduction 		                                                                                                    7-1

7.2 SPRITE Detector Invention                                                                                          7-3

7.3 Multiplexer ROIC Designs                                                                                           7-3

7.3.1 Charge Coupled Device                                                                                            7-3

7.3.2 Charge Injection Device                                                                                          7-5

7.3.3 MOSFET Switch                                                                                                    7-6

7.4 Development of GEN2 Self-Scanned FPAs                                                                              7-7

CHAPTER 8. GEN2 FLIRs WITH COOLED MCT DETECTORS                                                                        8-1

8.1 Introduction 		                                                                                                    8-1

8.2 Device Status in the Early 1980s                                                                                   8-1

8.3 Mid-1980s FPA Developments                                                                                         8-2

8.4 MCT Technology Transfer from the French                                                                            8-3

8.5 The Standard Advanced Dewar Assembly Scanning Module                                                               8-5

8.6 Summary		                                                                                                          8-8

CHAPTER 9. GEN2 FLIRs WITH INSB AND UNCOOLED FPAs, AND SYSTEM PERFORMANCE
                   MODELING ADVANCES                                                                                   9-1

9.1 Introduction 		                                                                                                    9-1

9.2 InSb FPA Development                                                                                               9-2

9.2.1 Early InSb Detector Fabrication and Applications                                                                 9-2

9.2.2 Near IR Mapping Spectrometer and Galileo                                                                         9-3

9.2.3 Spatial Noise                                                                                                    9-6

9.2.4 Multiplexer Designers and Si IC Foundries                                                                        9-7

9.2.5 CE’s Novel 2-D FPA Design                                                                                        9-8

9.3 Development of GEN2 Uncooled Detectors                                                                             9-9

9.3.1 Invention of the Microbolometer                                                                                  9-9

9.3.2 Other Significant Historical Developments in Uncooled Detectors                                                  9-10

9.4 Advancements in FLIR Modeling and Analysis                                                                         9-11
9.4.1 FLIR Modeling Developments Overview                                                                              9-11

Table of Contents // viii
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                             DISTRIBUTION STATEMENT A.
                                                                                   Approved for public release; distribution is unlimited.




9.4.2 System and Observer Noise Modeling for GEN2 FLIRs                                                                           9-11

9.4.3 Background Clutter Modeling                                                                                                 9-12

9.5 Summary		                                                                                                                     9-13

CHAPTER 10. SUMMARY, CURRENT TRENDS, AND LESSONS FOR THE FUTURE                                                                   10-1

10.1 Introduction                                                                                                                 10-1

10.2 Summary		                                                                                                                    10-1

10.3 Current Trends and Future Projections                                                                                        10-2

10.4 Conclusion		                                                                                                                 10-6

REFERENCES		                                                                                                                      R-1

APPENDIX A. 		                                                                                                                    A-1

Interview with Paul W. Kruse                                                                                                      A-1

Appendix A References                                                                                                             A-17

APPENDIX B. 		                                                                                                                    B-1

Eyewitness Account of FLIR Development                                                                                            B-1

B.1 First FLIR		                                                                                                                  B-1

B.2 AC-130 SPECTRE Fire Control Systems, AN/AAD-4, AN/AAD-6, AN/AAD-7                                                             B-2

APPENDIX C. 		                                                                                                                    C-1

First FLIR Optics and Scanner Configuration                                                                                       C-1

APPENDIX D. 		                                                                                                                    D-1

GEN 1 Common Module Description                                                                                                   D-1

BIBLIOGRAPHY		                                                                                                                    E-1

ACRONYMS AND ABBREVIATIONS                                                                                                        F-1

FIGURES

Figure 1-1. Atmospheric transmission plot.                                                                                        1-1

Figure 1-2. Planck blackbody radiation function.                                                                                  1-3
Figure 1-3. A representative jet aircraft signature illustrates the varied contributions from both skin self-emissions
            and ground emission reflections and also the dominant contributions from the plume and hot exhaust parts
           when viewed from the rear.                                                                                             1-4
Figure 1-4. Sniper targeting pod.                                                                                                 1-5

Table of Contents // ix
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.



Figure 1-5. Apache attack helicopter Modern Target Acquisition and Designation Sight targeting system.                             1-5
Figure 1-6. USAF Predator surveillance drone.                                                                                      1-5

Figure 1-7. F-35 with IRST and Missile Warning Receiver Distributed Aperture Sensor.                                               1-5

Figure 1-8. Rifle with thermal weapon sight.                                                                                       1-6

Figure 3-1. U.S. Army sniperscope used in the Pacific Theater near the end of WWII.                                                3-3

Figure 3-2. 1940s U.S. Army “snooperscope.”                                                                                        3-4

Figure 3-3. German Panzer FG 1250 searchlight and scope.                                                                           3-4

Figure 3-4. U.S. VB-6 IR guided bomb.                                                                                              3-5

Figure 4-1. 1978 IR Handbook.                                                                                                      4-4

Figure 4-2. Vought Crusader F-8E variant.                                                                                          4-8
Figure 4-3. Illustrations of an IR mapper. An image scanned by a rotating mirror is transferred to film via a
            synchronously scanning glow tube modulated by the IR detector output. Forward motion of
            the aircraft adds the second dimension to the raster scan.                                                             4-9

Figure 4-4. A visible-band aerial photograph of the TI plant and the corresponding mapper image.                                   4-9
Figure 4-5. Johnson’s Bar Target Equivalency Criteria determined resolution requirements for various target
            acquisition tasks.                                                                                                     4-11
Figure 5-1. First flyable FLIR made by TI. It was the first FLIR to be tested on an AC-47 gunship (1965). Right
            inset shows Kirby Taylor standing beside the gunship at Bien Hoa Air Base, Vietnam.                                    5-5

Figure 5-2. Image from first flyable TI FLIR.                                                                                      5-5

Figure 6-1. The HHTV, AN/PAS-7.                                                                                                    6-2

Figure 6-2. The AN/PAS-7 display.                                                                                                  6-2

Figure 6-3. TI Common Module FLIR-equipped TOW sight.                                                                              6-4

Figure 6-4. Serial-scan FLIR concept of operation.                                                                                 6-5

Figure 6-5. Parallel-scan FLIR concept of operation.                                                                               6-5

Figure 6-6. Set of common modules for man-portable FLIR configurations.                                                            6-5

Figure 6-7. Typical layout for a common module FLIR.                                                                               6-6
Figure 7-1. SPRITE Principle of Operation: Detected photoelectrons are made to drift at a velocity that
            matches the image scan rate to effectively implement TDI.                                                              7-3

Figure 7-2. CCD Operation.                                                                                                         7-4

Figure 7-3. CID Operation.                                                                                                         7-5

Figure 7-4. MOSFET switch device architecture.                                                                                     7-6
Figure 8-1. Several InSb FPA formats from Lockheed Martin Santa Barbara Focal Plane. Navy and Air Force
            staring FLIRs for targeting and navigation employed InSb FPAs in 480x640 format or larger. InSb
            dominated the large-format staring market with excellent performance at a reasonable cost.                             8-2


Table of Contents // x
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.




Figure 8-2. The F-14D IRST FPA consisted of four 64-element modules of LWIR MCT diodes and an Amber/GE
            designed readout. This was the first production LWIR diode-based FPA in a production U.S.
            sensor, circa 1991.                                                                                                    8-4
Figure 8-3. The Javelin antiarmor missile has a staring seeker 64x64 LWIR FPA from Raytheon Vision Systems in
            the missile and a scanning sensor with a linear LWIR FPA from DRS in the command launch unit.
            The target is acquired with the command launch unit FLIR, which relays that information to the
            seeker, which tracks the target and determines the point of impact.                                                    8-4
Figure 8-4. 480x640 QWIP FPA and typical “peaked” spectral response curve (right). Perhaps the lowest-cost
            LWIR technology, the QWIP had low QE and higher dark current than comparable MCTs.                                     8-5
Figure 8-5. President George Bush learning the basics of MBE MCT from Professor Jan Schetzina from North
            Carolina State University. This custom machine was an early U.S. attempt to explore this new
            technology funded by GE.                                                                                               8-6
Figure 8-6. The principal GEN2 Common Module IDCA, contained a 480x4 LWIR MCT FPA, in a sealed Dewar
            with cryocooler and drive electronics. The additional pixels on target and TDI feature provided a
            significant range advantage over GEN1 imagers.                                                                         8-6
Figure 8-7. Bradley GEN2 FLIR with 480x4 SADA II FPA. GEN2 was a significant improvement over GEN1 night
            sights and enabled engagement at longer ranges with improved probability of target identification.                     8-7
Figure 8-8. F35 Distributed Aperture Sensor employed multiple staring InSb-based FPAs. Larger-format
            arrays provided enhanced target acquisition range allowing weapons platforms to engage from
            the relative safety of higher altitudes.                                                                               8-7

Figure 9-1. Galileo satellite with IR detector array for the NIMS.                                                                 9-4

Figure 9-2. Multiplexed InSb detector array for the VIMS.                                                                          9-5

Figure 9-3. NUC Process.                                                                                                           9-7

Figure 9-4. Front side illuminated and reticulated IR detector array from L-3 CE patent 5,227,656, 13 July 1993.                   9-9

Figure 9-5. Microbolometer FPA showing microbridge design.                                                                         9-10
Figure 10-1. ARGUS-IS has 368 5-megapixel FPAs that provide 1.8 gigapixels on the ground with a resolution of
            4 in. at 15 kft in the visible/near-IR band. One planned MWIR version would provide over
            100 cooled FPAs each with 18 megapixels.                                                                               10-3
Figure 10-2. The Lepton microbolometer is an example of how small IR imaging sensors can be made. They can
            be used for covert, unattended operation in either remote or urban locations and connected to the
            battlefield network.                                                                                                   10-3
Figure 10-3. In a passive/active targeting system, the FLIR is used for passive target detection and the lidar is
            used for active identification.                                                                                        10-5
Figure 10-4. The U.S. Air Force LITENING G4 pod uses active imaging for extended-range target identification.                      10-5

Figure C-1. FLIR I Objective Lens Design–Schmidt-Cassegrain.                                                                       C-1

Figure C-2. FLIR I Three-Element Staggered Detector Array.                                                                         C-2



Table of Contents // xi
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                          DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                     DISTRIBUTION STATEMENT A.
                                                                           Approved for public release; distribution is unlimited.




Figure C-3. FLIR I Kennedy Scanner Implementation.                                                                        C-3

Figure C-4. Kennedy 2-Axis Scanner Patent Drawing.                                                                        C-4

Figure D-1. Layout of Common Module Detector Pixel.                                                                       D-1

Figure D-2. 60-Element Common Module TOW Detector Array.                                                                  D-2

Figure D-3. Common Module Detector/Dewar with cover removed.                                                              D-2

Figure D-4. Common Module One-Watt Cryocooler. (Source: U.S. Army)                                                        D-2
Figure D-5. Common Module Detector/Dewar/Cooler Assemblies for the 180-element version and the
            60-element version.                                                                                           D-3




Table of Contents // xii
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                DISTRIBUTION STATEMENT A.
                                                                                      Approved for public release; distribution is unlimited.




CHAPTER 1. BASIC                                                     Figure 1-1 shows a plot of the atmospheric transmission of
                                                                     a standard atmosphere at sea level over a 10-km path. The
PRINCIPLES OF IR                                                     transmission plot is overlaid with portions of the electromag-

TECHNOLOGY                                                           netic (EM) spectrum nominally beginning with the ultravio-
                                                                     let region and extending through the radio-frequency (RF)
1.1 BACKGROUND                                                       region.

This history of forward-looking infrared (FLIR) begins with a        The word “infrared” comes from the Latin word infra, which
brief summary of infrared (IR) technology to enable readers          means below, and the English word “red,” which refers to
new to the field to better understand and grasp the devel-           that part of the spectrum lower in frequency (and therefore
opment history. The intent of this first chapter is simply to        longer in wavelength) than the red portion of the visible
familiarize readers with the most basic principles of FLIR           region. The visible region extends from 0.4 to 0.7 µm. Since
technology and nomenclature, so they can understand                  red is the longest wavelength that can be seen in the visible,
the significance of the historical developments. The term            IR refers to a particular region of the EM spectrum beyond
“forward-looking infrared” generally refers to tactical im-          the visible. This region is divided into subregions, which have
age-forming cameras that provide fast, successive frames of          no universal definition, but the definitions given here follow
imagery based primarily on object and scene self-emissions.          current, general usage. Typically, at least four subregions can
This discussion is not a complete introduction to the field,         be found as indicated in Figure 1-1: near IR (NIR), short-wave
but it provides some understanding of both the capabilities          IR (SWIR), mid-wave IR (MWIR), and long-wave IR (LWIR).
and limitations of FLIR technology, and provides background
perspective for the reader.




Figure 1-1. Atmospheric transmission plot (Source: Schmieder [1]).



Chapter 1. Basic Principles of IR Technology // 1-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.




Generally, the subregions are defined by the existence of a       temperature also emit radiation because those objects are in
useful atmospheric transmission “window.” These windows,          radiative equilibrium with their observer, and there is no net
however, are sometimes subdivided according to detector re-       radiation transfer. If that person stood next to a cold exterior
sponse capabilities. For instance, most recent nomenclature       window inside a warm enclosure on a cold day, they would
defines NIR as nominally the 0.7–1.0-µm region in accordance      readily feel the unequal exchange. Nevertheless, radiative
with the response of silicon detectors (but without the visible   nonequilibrium is not a requirement for being able to detect
band response of silicon detectors) and night vision goggles      IR radiation. It is only required that objects have an apparent
(0.6–0.9 µm). SWIR (1.0–2.5 µm) had not been widely used          temperature difference from their background. The tempera-
before the advent of hyperspectral imaging (HSI) systems.         ture difference can be the result of either temperature and/
Early HSI favored that region for day target discrimination.      or emissivity differences. Objects need only to emit slightly
Now, night ambient light-amplifying sensors exploit that          more or less than their immediate backgrounds to be detect-
region as well and use the higher-ambient illumination avail-     able. For example, even the “first generation” of IR imagers
able from night skyglow.                                          could easily sense a 0.1°C apparent temperature difference.

The MWIR and LWIR regions dominate current tactical mili-         The principles of blackbody radiation govern how much IR
tary IR applications. The MWIR region, nominally 3.0–5.0 µm,      light is produced by an object of a given temperature. Figure
and the LWIR 8–12-µm region are defined only by windows in        1-2 from The Infrared & Electro-Optical Systems Handbook [2]
the atmosphere. Beyond 12 µm there is a large gap between         shows the classic Planck blackbody radiation function, which
where the LWIR band ends and where the near millimeter            plots radiant emittance versus wavelength. There are several
wave RF band begins. The gap is due to a severe atmospheric       significant features of this function. First, the peak shifts to
absorption “wall” region that extends out to and helps define     the left with increasing temperature such that at 6,000 K, the
the beginning of the RF band. For tactical applications within    temperature of the Sun, the peak matches the center of the
the Earth’s atmosphere, the IR community considers the “IR”       human eye response at 0.5 µm. Is it any wonder that nature
spectral region to extend roughly from 0.7 µm, where the          evolved the eye to respond there? Secondly, note that at 300 K,
visible band ends, to about 14 µm, where the atmospheric          the nominal temperature of terrestrial objects or so-called
absorption wall begins. For extraterrestrial space applica-       “room-temperature,” radiation peaks at near 10 µm. This
tions where atmospheric windows don’t apply, the definition       latter peak suggests that the 8–12-µm atmospheric window
of the IR spectral region readily extends out to almost 30 µm,    is a fruitful spectral region for detection of IR radiation, and
and the region between 14 and 30 µm is called the very long-      indeed it is, although nearby regions are also useful. Finally,
wave IR (VLWIR).                                                  note that objects at very cold temperatures, such as space
                                                                  objects at about 170 K in the Earth’s shadow, can be ex-
1.2 SOURCES OF IR RADIATION                                       pected to emit radiation that peaks near 17 µm; that is why
                                                                  many current space observation satellites exploit the VLWIR
Sources of IR radiation ultimately define the application do-
                                                                  spectral region. The much lower absolute radiation at this
main for IR technology; those sources are generally anything
                                                                  temperature is not as much of a hindrance as one might
that produces heat. Fortunately, for the usefulness of IR
                                                                  think, given that the background of space is only 4 K, so the
technology, that includes almost everything. For instance,
                                                                  contrast is very large.
most people know from personal experience that hot objects
radiate heat because they can feel it, but they can’t see that
                                                                  Note that not all objects emit radiation in accordance with
object’s self-emissions unless it is very hot like a fireplace
                                                                  the Planck function as plotted with unity emissivity. In fact,
poker. Therefore, it is less obvious that objects at room


Chapter 1. Basic Principles of IR Technology // 1-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                 DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                            DISTRIBUTION STATEMENT A.
                                                                                                  Approved for public release; distribution is unlimited.




Figure 1-2. Planck blackbody radiation function (Source: Schmieder and Walker [2]).




virtually none of them do. For instance, actual emission                        graybody emissions from the aerodynamically heated skin
spectra depend upon the shape of an object’s spectral emis-                     combined with reflections of ground emissions off the skin.
sivity characteristics and that shape is seldom that of a pure                  In higher engine power settings, the gaseous plume emis-
blackbody. In fact, an object’s emissivity is a strong func-                    sions extend sufficiently beyond the obscuration of the fu-
tion of its material properties and not only seldom reaches                     selage and can be observed even from most frontal aspects.
unity but varies considerably with wavelength. Hence, most                      The plume signature is dominated by CO2 gaseous emissions
objects are called “selective radiators” whose emissions are                    and so is confined to the MWIR band.
strongly dependent on the spectral shape of their emissivity.
If an object does happen to have a shape close to that of a                     IR signatures range from the simple to the very complex such
blackbody, it almost always has less than unity emissivity, and                 that the spectral band that might work well for one sensor
is referred to as a “graybody.” Hence, the terms blackbody and                  might not work at all for another. An example of a simpler
graybody are idealizations.                                                     signature is that of a typical ground armored vehicle, such
                                                                                as a tank. When viewed from the side opposite the engine
These spectral radiation characteristics are most important                     exhaust, the signature looks very much like a graybody. It
when dealing with gaseous emissions such as those coming                        would have a warm temperature if, for instance, the tank had
from a jet engine plume. Jet aircraft have unique signature                     been sitting in the sun or run for a long period. The signature
sources that, for instance, drive the design of missile seek-                   could have a low temperature if the tank was exposed to
ers. Figure 1-3 shows the variability and complexity of a jet                   cold air overnight because it retains a cold hull and turret for
aircraft signature. Note that from the rear, it is dominated                    a long time due to its large thermal mass. In either case, the
by the selective radiation from gaseous plume combustion                        apparent signature would be large because signature is the
products CO2 and H2O and graybody radiation from the hot                        difference between the object and its background. In con-
exhaust region. From the front, the fuselage blocks a large                     trast to the tank’s simpler signature, the jet aircraft signature
portion of the plume and engine exhaust parts, but there are                    shown in Figure 1-3 illustrates signature complexity. It took


Chapter 1. Basic Principles of IR Technology // 1-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                       DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                  DISTRIBUTION STATEMENT A.
                                                                                                        Approved for public release; distribution is unlimited.




Figure 1-3. A representative jet aircraft signature illustrates the varied contributions from both skin self-emissions and ground emission reflections and also
the dominant contributions from the plume and hot exhaust parts when viewed from the rear (Source: General Dynamics).




many decades after IR detectors were developed for design-                        thermal detector is a bolometer, which changes resistance
ers to fully appreciate the challenges facing IR technology                       with a change in temperature. That resistance change is then
due to both the variability and the complexity of signatures.                     sensed by passing a current through it. Although thermal
                                                                                  detectors are inexpensive and can be operated at room tem-
1.3 IR DETECTORS                                                                  perature, they typically have a slow response time. Quantum
                                                                                  detectors require a cryocooler to operate below 200 K but are
Of course, there would be no IR technology if it were not for
                                                                                  more sensitive and have a faster response time than thermal
the development of IR detectors. This book will describe the
                                                                                  detectors.
fascinating process of insight and luck that led to the devel-
opment of modern detectors. For now, a summary of only
                                                                                  Quantum detectors can be further divided into at least three
the most general types will provide the background needed
                                                                                  types: photoconductive (PC), photovoltaic (PV), and photo-
to appreciate the history that follows.
                                                                                  emissive. PC detectors operate by developing a change in
                                                                                  resistance in proportion to the amount of incident light. Like
There are two very broad categories of detectors: thermal
                                                                                  bolometers, the resistance change is detected by passing a
and quantum. Thermal detectors are essentially miniature
                                                                                  current through it. PV detectors, however, have a p-n junc-
thermometers that detect radiation from the heat that
                                                                                  tion like roof-top solar cells and can generate either a current
objects generate when absorbing light. Quantum detectors
                                                                                  or a voltage from their conversion of photons into photo-
are based on semiconductors, which absorb photons at
                                                                                  electrons. Photoemissive detectors operate by ejecting an
the subatomic level and cause electrons to be raised from
                                                                                  electron from their surface when a photon is absorbed. The
the valence band to the conduction band where they can
                                                                                  photons are accelerated by an electric field and are con-
be detected as a current or voltage change. Both detector
                                                                                  verted into visible light when they impinge on a phosphor
types are widely used in modern FLIRs. The main type of
                                                                                  screen.

Chapter 1. Basic Principles of IR Technology // 1-4
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                              DISTRIBUTION STATEMENT A.
                                                                                                    Approved for public release; distribution is unlimited.




Although the more common detector types are PC, PV,
photoemissive (quantum detectors), and bolometric thermal
detectors, there are other sensing mechanisms. However,
knowledge of these common types is helpful in understand-
ing the history of IR development.

1.3.1 Examples of IR Systems

IR imaging systems include targeting systems (FLIRs) (Fig-
ures 1-4 and 1-5), surveillance systems designed for either
warning or intelligence gathering (Figure 1-6), or IR search
and track (IRST) systems, used mostly on ships and aircraft
(Figure 1-7) for both detection and tracking functions. FLIRs
are most commonly used for target detection and identifica-

                                                                               Figure 1-6. USAF Predator surveillance drone (Source: U.S. Air Force).




Figure 1-4. Sniper targeting pod (Source: U.S. Air Force photo/Senior Airman
Noah Johnson).


                                                                               Figure 1-7. F-35 with IRST and Missile Warning Receiver (MWR) Distributed
                                                                               Aperture Sensor (DAS) (Source: U.S. Air Force photo/Senior Airman
                                                                               Christopher Callaway).



                                                                               tion—a process called “target acquisition.” They then serve
                                                                               as fire-control systems that keep a crosshair on the target for
                                                                               engagement with options that include gun fire, laser des-
                                                                               ignation for missile homing, or handoff to other IR homing
                                                                               seekers. Surveillance, warning, and IRST systems often form
                                                                               images like FLIRs do, but differ, albeit sometimes only slightly,
                                                                               by mission application. For instance, surveillance systems are
Figure 1-5. Apache attack helicopter Modern Target Acquisition and Des-        IR cameras used specifically for reconnaissance and intelli-
ignation Sight (MTADS) targeting system (Source: U.S. Army Photo/Brigitte      gence gathering. Warning systems are used to detect threat
Rodriguez).
                                                                               missile launches, and IRSTs are cameras with a large field-of-


Chapter 1. Basic Principles of IR Technology // 1-5
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                           DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                      DISTRIBUTION STATEMENT A.
                                                                            Approved for public release; distribution is unlimited.




view and therefore often low resolution. IRSTs typically lack
long-range target identification capability but have a wide
field-of-regard to enhance search and subsequent target
tracking. The foregoing systems are the main focus of this
history because they most heavily influenced the path of FLIR
development. However, there are other important types of
imaging systems including such equipment as night driving
devices, rifle scopes (Figure 1-8), and unattended sensors
covertly placed in hostile territory and used to observe insur-
gent movements.

There is much overlap of these latter systems in imple-
mentation, mission, and enabling technology. Accordingly,
the following FLIR history discussions reflect this overlap
when tracing key developments. This brief summary, like
the previous discussion of basic IR principles, provides the
reader with some knowledge and understanding of IR system
technology, and some nomenclature, to better understand
the significance of the historical developments discussed in
succeeding chapters.




Figure 1-8. Rifle with thermal weapon sight (Source: U.S. Army/982nd Com-
bat Camera Company).




Chapter 1. Basic Principles of IR Technology // 1-6
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.




CHAPTER 2. EARLY                                                   based on the thermoelectric effect exploited by thermocou-
                                                                   ples now most commonly used for flame detection in gas
IR TECHNOLOGY                                                      furnaces and water heaters, but also used (in reverse) for
                                                                   refrigeration in portable coolers. In the early to mid-1800s,
Sections 2.1 through 2.3 discuss early discoveries that en-        thermocouples were good enough radiation detectors to
abled the development of FLIR technology. These sections           detect heat from a person at a distance of 30 ft. Later in the
provide discussion of the early technology base to provide         1800s, bolometers were developed that could detect the
perspective on what had been known about the physics and           heat from a cow at a quarter mile.
phenomenology that enabled FLIR development to proceed.
The references and bibliography provide greater detail about       Astronomers were among the first to employ these early
earlier, relevant technology.                                      IR detection devices. They used thermocouples to detect
                                                                   IR emissions from the Moon as focused by telescopes and
2.1 DISCOVERY OF INVISIBLE LIGHT                                   learned to make filters that could block visible band light. In
Sir William Herschel was the first to officially report the        the early 1900s, astronomers could detect several hundred
discovery of IR radiation over 215 years ago when he exper-        stars in the IR. Later, astronomers used thermocouples to
imented with a thermometer. He built a crude monochro-             measure the surface temperature of planets and thereby gain
mator that used the thermometer as a detector so he could          insight into their geological characteristics. As will be seen in
measure the distribution of energy in sunlight. According          subsequent IR history discussions, thermocouples were just
to Rogalski [3], Herschel [4] wrote in April 1800 that “Ther-      the beginning of a long and arduous detector development
mometer No. 1 rose 7° in 10 minutes by an exposure to the          process that continues today.
full red coloured rays. I drew back the stand.... Thermometer
                                                                   2.3 THEORETICAL FOUNDATIONS [6]
No. 1 rose, in 16 minutes, 8 3/8° when its centre was 1/2 inch
out of the visible rays” [4]. He was surprised to observe that     The most important theoretical underpinnings of IR technol-
the thermometer still rose when exposed to a region of the         ogy were formed in the early 1900s. Physicist Wilhelm Wien
spectrum that extended beyond the visible. Rogalski’s re-          had earlier found that blackbody spectral radiation reached
search uncovered other earlier successes with the discovery        a peak at an intermediate wavelength rather than at either
of the IR region, but those efforts were never documented          extremity of the overall spectrum of emissions. He found
and so were not officially recognized. For instance, the Italian   that the wavelength dependence of radiation emission was
scientist Marsilio Ladriani in 1777 and later others, suppos-      inversely proportional to temperature. Hence, hot objects
edly discovered the region beyond the visible also using a         like the Sun’s spectral emissions peaked at a much shorter
thermometer. However, Herschel got the credit for discov-          wavelength than colder objects like the Earth. Lord Rayleigh
ering IR radiation because he documented his findings. This        attempted to predict the shape of the spectral emission
fact demonstrates the importance of documenting discover-          curve at longer wavelengths using classical physics principles
ies in recognized publications to ensure that proper credit is     and showed that the level of spectral emissions was inversely
assigned.                                                          proportional to wavelength raised to the fourth power. Sir
                                                                   James Jeans later improved on Rayleigh’s model and added
2.2 THE FIRST IR DETECTORS [5]                                     a proportionality constant. The combined function became
Historical literature reveals the fascination at the time with     known as the Rayleigh-Jeans Law. Unfortunately, the law did
the exploration of invisible light. This fascination motivat-      not match experimental data because it predicted that emis-
ed research and it first led to the development of detectors       sions would grow exponentially to infinity as the wavelength


Chapter 2. Early IR Technology // 2-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                             DISTRIBUTION STATEMENT A.
                                                                   Approved for public release; distribution is unlimited.




got shorter. Of course, the law not only failed to match mea-
surements, it was physically impossible and became known
as the UV catastrophe. The solution remained a puzzling
mystery until Max Plank found the explanation.

Plank’s breakthrough that explained the flaw in the Rayleigh-
Jeans Law was his epiphany that energy could only be emit-
ted in quantized form. As a result of this breakthrough, Plank
concluded that no energy could be emitted until its energy
was large enough to escape. Since the quanta at lower wave-
lengths contained higher energy, they could not be emitted
in larger quantities until the temperature increased. There-
fore, the number of quanta emitted at any given temperature
would be limited, and the energy dependence on wave-
length forced the blackbody spectral radiation curve lower as
wavelength decreased.

Plank’s discovery arguably helped Albert Einstein to further
conclude that light must be quantized as well. This conclu-
sion led him to explain the photoelectric effect, which posits
that light quanta (later called photons) of sufficient energy
can force electrons to be emitted from a material’s surface
into free space. Einstein proposed this explanation knowing
that it was not the rate of photons impinging on a materi-
al’s surface that made this happen but, instead, it was the
wavelength because ejection could happen even if the rate
were low. It was later seen that these quanta raise valence
electrons to the conduction band inside a material, and this
also became known as a manifestation of the photoelectric
effect. The photoelectric effect is the basic underlying princi-
ple for how modern IR quantum detectors work. Einstein was
awarded a Nobel Prize for discovering it.

The remaining chapters discuss how the application of these
fundamental discoveries led to the invention of IR sensors
and ultimately to the development of modern FLIRs.




Chapter 2. Early IR Technology // 2-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                DISTRIBUTION STATEMENT A.
                                                                                      Approved for public release; distribution is unlimited.




CHAPTER 3. EARLY                                                    junction; and bolometric thermal detectors sense a change
                                                                    in resistance to electric current when the incident photons
MILITARY IR USE IN                                                  change their temperature (as do other unintentional sources

WORLD WARS I AND II                                                 of heat). Smith reported the first discovery of photocon-
                                                                    ductivity in an 1873 paper in Nature [9], although detectors
3.1 BACKGROUND                                                      using the principle were not invented until much later [7, 9].
                                                                    Bose patented the first IR photovoltaic detector in 1904 using
Interest in IR technology prior to about 1910 was widely            naturally occurring lead sulfide (PbS) [8, 10]. Although pho-
dispersed, and development was sporadic and haphazard               toconductivity and the IR photovoltaic detector would later
until its potential military applications were recognized. Barr     be viewed as major discoveries, they were largely ignored at
and Arnquist [6, 7] found that research programs established        the time.
during World War I (WWI) focused first on covert communica-
tion devices that led to field evaluations, but apparently little   The first practical detectors began with the discovery of
deployment. However, according to Hudson [8], the period            bolometers [7, 10]. Bolometric detectors were invented by
between 1910 and 1920, thus overlapping WWI, was rich with          famed astronomer Samuel P. Langley in 1878 [6]. Langley
patent disclosures that exploited IR for object detection to        was able to detect the heat from a cow at the impressive
include aircraft, ships, personnel, artillery, and even icebergs.   distance of a quarter mile. He used his bolometer to discov-
Hudson reported that patents during that period included            er new atomic and molecular absorption lines in the IR and
communications equipment, but also disclosed other militar-         attempted to measure the temperature of the Moon with it.
ily useful devices for intrusion detection and “the guidance        All three of these detector types (photoconductive, photo-
of aerial torpedoes” or what we now call guided missiles. The       voltaic, and bolometric) now play a key role in the modern
more germane predecessor to today’s IR applications was the         application of IR technology.
IRST, which was developed by the British during WWI, though
it was not called that at the time. According to Hudson, these      The other major detector type, photoemissive, was not
early systems could detect aircraft out to about a mile. Mili-      discovered until shortly after WWI. Recall that photoemissive
tary IR research and development were firmly entrenched by          detectors directly exploit the photoelectric effect by detect-
the end of WWI. However, it was not until World War II (WWII)       ing electrons externally ejected by special photocathode
and events shortly thereafter that progress was sufficient to       materials. Their discovery was the basis for image intensifiers,
lay the groundwork for what is today’s modern IR technology.        which amplified ambient light first in the visible and, later, in
                                                                    the near IR, but only out to about 1.3 µm. The photoemissive
3.2 EARLY DETECTORS (PHOTOCONDUCTIVE,                               detector was discovered in the U.S. in the 1920s and had an
PHOTOVOLTAIC, PHOTOEMISSIVE, BOLOMETRIC)                            impact in WWII when the Germans deployed it early in the
                                                                    war. Ironically, the U.S. finally did so in the Pacific just as the
IR technology begins with the development of suitable
                                                                    war was about to end.
detectors. The principles of three of the four main detector
types were in place by WWI: photoconductive, photovoltaic,
                                                                    3.3 IR SYSTEMS IN WWI
and bolometric. (The fourth type was photoemissive.) As
discussed in Section 1.3, in response to incident photons that      The military first showed interest in IR devices during WWI
raise electrons to the conduction band in quantum detectors,        when it became apparent that invisible light from IR signal-
photoconductors sense a change of resistance; photovoltaic          ing devices could be useful. However, these devices did not
detectors sense a change in voltage or current across a p-n         appear to get much attention for what was arguably later



Chapter 3. Early Military IR Use in World Wars I and II // 3-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                DISTRIBUTION STATEMENT A.
                                                                                      Approved for public release; distribution is unlimited.




thought of as the Holy Grail of IR, i.e., seeing in the dark.       key players in the U.S. as Robert Cashman and Henry Levin-
Signal communication was the first military application of          stein, and from Germany, Edgar Kutzscher. This distinction,
IR in the U.S. according to Arnquist [7]. This application was      he observed, provided a broader understanding than would
enabled when T. W. Case invented the photoconductive de-            otherwise have been possible from merely reading the archi-
tector in 1917 from thallous sulfide (TI2S) [11]. It was used to    val literature. He also pointed out the importance of what
demonstrate a covert blinking communication device for the          was to later become a hallmark of progress in U.S. IR tech-
U.S. military that could transmit and receive at an effective       nology development, i.e., “the curious stimulus afforded by
two-way range of 18 miles [7] and later to also transmit voice      the inter-communication of results” among often competing
signals. This detector was subsequently used in the field to        interests. These communications were fostered by classified
covertly help guide planes to landing strips and to guide ship      symposia (the Infrared Information Symposium [IRIS] and
convoys.                                                            later the Military Sensing Symposium [MSS]), which would
                                                                    become key sources of IR information dissemination.
The successful use of TI2S detectors also apparently stimu-
lated foreign interest in the IR and motivated Russia, Italy,       While Lovell’s interviews were important, not to be mini-
and England to develop similar detectors from this material         mized is Arnquist’s IR history survey [7] published in a 1959
after the war. The Germans, who were to later lead the world        Institute of Radio Engineers (IRE) proceedings, which was
in photoconductive detector development, apparently only            based on papers found in the archival literature. The remain-
looked at selenium photoconductors [7] for visible commu-           der of this chapter is largely an abridged collection of obser-
nications during this period. Rogalski [12] claimed the British     vations taken from both Lovell’s and Arnquist’s research.
developed the first, what must have been fledgling, IRST in
1914 using a bolometer. While little information is available,      3.4.1 German IR Research Program
this IRST could well have been the first attempt to use IR to
                                                                    Germany resumed its military IR program in about 1932. It
see objects in the dark.
                                                                    exploited PbS first in natural crystal form and later as chemi-
                                                                    cally deposited photoconductors. Shortly thereafter, Ger-
Shortly after the war, in the U.S., General Electric (GE) report-
                                                                    man scientists discovered that lead selenide (PbSe) also had
edly [13] also built an experimental aircraft detection device
                                                                    favorable detector qualities. During this period, they found
that could locate a light bomber at a range of 22 miles. How-
                                                                    that cooling either by using solid carbon dioxide (195 K) or
ever, most IR efforts languished because radar was seen as
                                                                    liquid nitrogen (LN2) (77 K) would improve IR detection sensi-
the more promising sensor technology. Although seeming
                                                                    tivity and incorporated those cooling methods into devices.
to make little headway in WWI, the development of IR tech-
                                                                    Bolometers were also developed, which enabled Germany to
nology for military applications was firmly established.
                                                                    build ground sensors for detecting aircraft and ships. Aircraft

3.4 LEAD UP TO AND USE OF IR SYSTEMS IN WWII                        sensors were developed to direct searchlights for anti-aircraft
                                                                    fire. Airborne versions were also used to develop air-to-air
D. J. Lovell of The University of Michigan provided a notewor-      “IRSTs” for night fighters, and both air-to-air and air-to-
thy summary of U.S. IR technology development from just             ground missile seekers (although no missiles) were ultimately
prior to WWII to the postwar period [14]. The U.S. Air Force        mass produced with those capabilities. According to John-
Office of Scientific Research had the foresight to fund Lovell’s    son [15], near the end of the war, some PbS systems were also
historical account of IR technology development in 1968             used along coastlines to detect ships and aircraft.
before it was forever lost. Lovell’s account has the distinction
of resulting from numerous personal interviews with such



Chapter 3. Early Military IR Use in World Wars I and II // 3-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                      DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                 DISTRIBUTION STATEMENT A.
                                                                                       Approved for public release; distribution is unlimited.




Kiel IV and PbS Detector Development. Only a few IRSTs            for high-operating-temperature, low-cost applications such
were built, but the scanning Kiel IV night fighter system using   as for missile-launch warning receivers.
PbS almost made it into production before the war ended.
By 1944, 1,000 PbS cells were being produced annually [16].       Electro-Optical (EO) Converter Tubes. These German
The Kiel IV was developed by Kutzscher’s group at a company       efforts revealed that there was still much that remained to be
in the city of Kiel. It used PbS photoconductors perfected        understood. EO converter tubes emerged in the late 1920s,
by Kutzscher while at the University of Berlin. Unfortunately,    and practical EO devices were being made by the mid-1930s.
Kiel was in that part of Germany later occupied by Russia,        The development of EO converter tubes initially discouraged
and so the Russians were the beneficiaries of equipment,          the development of photoconductive detectors because EO
data, and reports owned by Kutzscher’s group. This situation      converter tubes seemed more promising. EO converter tubes
gave Russia a boost in IR development that benefitted them        use a semitransparent photocathode to absorb photons
throughout the Cold War that followed. However, Kutzscher         that then eject electrons and are therefore often referred
and several of his colleagues escaped to the West and             to as photoemissive devices. The electrons are accelerated,
arguably gave the U.S. an even greater windfall of expertise.     sometimes through multiple amplification stages, before
This contribution contrasts with the rather slow progress in      impinging on a phosphor screen where they are converted
U.S. photoconductor development during the war. Robert            into visible light. The U.S., Britain, Russia, and Germany were
Cashman at Northwestern University began work with TI2S           all active in their development. The discovery of a stable
films in 1941 and, in 1944, he considered PbS but did not         cathode consisting of cesium-oxygen-silver (Cs-O-Ag), which
fully embrace it until he and others found out about German       was called S-1, provided response in the NIR to about 1.3 µm.
progress after the war.                                           The Radio Corporation of America (RCA) began producing
                                                                  converter tubes in 1942 [7], and they were used in rifle sights
German PbS detector developments prior to and during              for night viewing in “sniperscopes” and “snooperscopes” (Fig-
WWII were based largely on empirical studies and fabrication      ures 3-1 and 3-2, respectively), much like the German Vampir
trial and error rather than on theoretical insight since basic    and Panzer FG 1250 (Figure 3-3). The converter tube was
semiconductor theory was not well understood. Accordingly,
recipes were developed experimentally, and key processes
became more of an art than a science. (Some would say
detector material understanding is still more art than science
as of this writing.) Many groups were involved including
university laboratories and private companies. Nevertheless,
Lovell claims that productive interchange was maintained
among all groups through organized meetings and pub-
lished proceedings. This interchange and sharing of empiri-
cal data accelerated progress, thus partly mitigating the lack
of a guiding theoretical understanding of semiconductors.
It was fortuitous for the Germans that they did not spend
much time trying to understand the physics of PbS detector
material since they are not yet well understood. Various or-
ganizations in the U.S. have only recently (circa 2010) started
                                                                  Figure 3-1. U.S. Army sniperscope used in the Pacific Theater near the end of
to reexamine PbS because of the promise the material holds        WWII (Source: Popular Science Magazine).




Chapter 3. Early Military IR Use in World Wars I and II // 3-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                              DISTRIBUTION STATEMENT A.
                                                                                                    Approved for public release; distribution is unlimited.




                                                                                   their armored vehicles [17] for night fire control as shown in
                                                                                   Figure 3-3. It was only much later that they equipped their
                                                                                   soldiers with portable weapon sights such as the Vampir. The
                                                                                   U.S. was slower to deploy similar equipment and only man-
                                                                                   aged to deploy riflescopes in the Pacific late in the war, but
                                                                                   according to Johnston [18], they were very effective.

                                                                                   A major drawback of early converter tubes was their lack of
                                                                                   EO or IR light detection sensitivity. Almost all applications
                                                                                   required the use of a covert source of active illumination
                                                                                   because they could not otherwise operate under ambient
                                                                                   starlight conditions. Accordingly, not only were the collec-
                                                                                   tion optics large, but they often had to be coupled with even
                                                                                   larger illumination lamps.


Figure 3-2. 1940s U.S. Army “snooperscope” (Source: U.S. Army).
                                                                                   GE developed an innovative system that used an argon-hy-
                                                                                   drogen flash lamp where the flash duration could be con-
                                                                                   trolled down to a microsecond. It was used to make an “IR
                                                                                   radar” that not only could illuminate the target but could
                                                                                   measure its range and was effective out to ranges exceeding
                                                                                   a mile. It never went into production but was arguably the
                                                                                   forerunner of today’s ladars (laser radars) and laser range-
                                                                                   finders. The converter tubes were the forerunners of today’s
                                                                                   microchannel plate image intensifiers, which operate on the
                                                                                   same principles as converter tubes but with much more com-
                                                                                   pact components and much more sensitive photocathodes.
                                                                                   These modern versions function well with only ambient illu-
                                                                                   mination unless used in overcast, dusty, or foggy conditions.

                                                                                   3.5 SUMMARY OF DEVELOPMENTS TO THE END OF
                                                                                   WWII
Figure 3-3. German Panzer FG 1250 searchlight and scope (Source: Williams [17]).

                                                                                   The period from WWI to the end of WWII was significant in
also used for night navigation. Note that these photoemis-                         that there were detector advances that played important
sive devices did not rely on object self-emissions but only                        roles in early night vision devices and in the development of
on amplified ambient light such as moonlight, starlight, or                        precision-guided missiles,1 despite the lack of understanding
reflections from artificial illumination sources such as search                    of semiconductor physics.
lights. Germany used these devices early in WWII to equip


1
   Note that the Germans developed and deployed the first precision-guided weapons and used them to great effect, such as with their visual com-
mand-guided, air-to-ground antiship bombs. However, it was the U.S. that made the first production IR-guided bomb, the bolometer-based VB-6 Felix
(Figure 3-4), but it was never used in combat because the war ended before that could happen.


Chapter 3. Early Military IR Use in World Wars I and II // 3-4
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                             DISTRIBUTION STATEMENT A.
                                                                                                   Approved for public release; distribution is unlimited.




First, Germany’s development of lead salt photoconduc-
tive detectors, most importantly, PbS, led the world at the
end of WWII. This leadership was not the result of a better
understanding of semiconductor physics, but rather it was
the product of laborious, empirical measurements coupled
with equally laborious trial-and and-error experimentation.
(Thomas Edison’s famous quote that “genius is 1% inspiration
and 99% perspiration” is fitting.) Though the Germans had
a significant early lead in photoconductor development,
they were not very successful in equipping their forces
with products of advanced photoconductor technology as
compared, for instance, to their photoemissive technology.
                                                                              Figure 3-4. U.S. VB-6 IR guided bomb (Source: USAF).
This situation may have been due to the fact that most of the
progress came near the end of the war, and much of Germa-
ny’s industrial base had been destroyed by Allied bombing
by that time.2

The U.S., Germany, and Russia were all able to develop and
exploit photoemissive detectors during WWII. All of the
deployed systems were based on this NIR capability includ-
ing night observation imaging systems, sniperscopes, and
driver’s aids. These devices were the most successful IR
products in WWII. It can be said that they were not true IR
sensors because they didn’t respond to object self-emissions
at room temperature. Nevertheless, while they arguably
aren’t the most tactically important devices today compared,
for instance, to FLIRs, they are still among the most widely
deployed devices in the world. Although by the end of WWII
warfighters could covertly see at night with systems that
used invisible, active illumination, these systems were still far
from the goal of passive, fast-framing sensors that could see
self-emissions from objects at room temperature.




2
 British intelligence had uncovered German advances but did not appear to take advantage of them. That decision was probably at least partly due to their
emphasis on radar development, which was an area in which both the U.S. and the British were ahead of the Germans.


Chapter 3. Early Military IR Use in World Wars I and II // 3-5
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                      DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                 DISTRIBUTION STATEMENT A.
                                                                                                       Approved for public release; distribution is unlimited.




CHAPTER 4. POST-WWII                                                             The post-WWII period is notable for at least seven significant
                                                                                 developments affecting IR technology:
IR TECHNOLOGY
                                                                                 •     Increased investment in government laboratories and
4.1 INTRODUCTION3                                                                      the industrial base.

Post-WWII IR technology was characterized by foundation                          •     Improved radiometric standards.
building and infrastructure development. It was heavily                          •     Better means to communicate knowledge and progress.
influenced by German detector discoveries and the spread-
                                                                                 •     Breakthroughs in detector development.
ing realization that IR technology offered unique advantages
in warfare. The U.S. exploited much of Germany’s knowledge                       •     Development of high-resolution IRST systems thus

after the war by offering refuge to their scientists and engi-                         enabling capabilities that contributed to the FLIR

neers. This exploitation led to the successful development                             technology base.

of at least one major IR weapon system that gave the U.S.                        •     Invention of down-looking line scan mappers that
an initial advantage in the Cold War: the Navy’s Sidewinder                            enabled viewing mid-wave and long-wave images.
air-to-air missile that used a PbS detector. However, PbS was                    •     Development of performance metrics for imaging systems.
not the dominant detector material because of its limited
spectral response and resulting inability to respond in either                   The development of cryocoolers, Dewars capable of 77 K and
the MWIR or the LWIR bands. Therefore, new materials had to                      28 K operation, and integrated circuits was also significant,
be developed, and a better understanding of semiconductor                        but those developments are beyond the scope of this book.
physics was needed.                                                              This history will focus on the former seven listed develop-
                                                                                 ments and each is described in the discussion that follows.
In addition, the beginning of the Cold War led to a new impe-
tus for national defense and greatly increased funding. De-                      4.2 INCREASED INVESTMENT IN GOVERNMENT
spite the many new developments, image-forming systems                            LABORATORIES AND THE INDUSTRIAL BASE
were still largely improved versions of WWII sniperscopes. It
                                                                                 New expertise in IR technology developed quickly in the
was not until the Vietnam War (discussed in Chapter 5) that
                                                                                 post-war years. Greater funding resulted from the emer-
passive, fast-framing imaging systems capable of viewing
                                                                                 gence of the post-war Soviet Union as a major threat to
object self-emissions were developed. Nevertheless, a key
                                                                                 the U.S. and its allies. More government laboratories were
technical base was developed including cooled indium
                                                                                 formed, but even more reliance was placed on private con-
antimonide (InSb) detectors for the MWIR band that led to a
                                                                                 tractors and university laboratories. The government and
scanning IRST. Additional important developments included
                                                                                 private laboratories in the first decades of the century were
LWIR band detectors made from mercury-doped germanium
                                                                                 joined by a new operational model in scale and practice.
(Ge:Hg) and the later breakthrough discovery of the proper-
                                                                                 The new model consisted of funding through research and
ties of mercury cadmium telluride (HgCdTe) detector material
                                                                                 development contracts that proliferated in proportion to
(referred to as “MCT” from here on). Thus, the foundation for
                                                                                 increases in military expenditures. Driven by greater funding,
fast-framing FLIRs was laid, but their invention came later.
                                                                                 many contractors, universities, and government laboratories
                                                                                 developed greater expertise.


3
  Sources used in this chapter include extensively edited and merged excerpts from Robert Sendall [19], Steve Jost [20], and Kirby Taylor [21] in addition to
the many references cited throughout the body of the text.


Chapter 4. Post-WWII IR Technology // 4-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                       DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                  DISTRIBUTION STATEMENT A.
                                                                                        Approved for public release; distribution is unlimited.




All three branches of the armed services had organizations            4.3 IMPROVED RADIOMETRIC STANDARDS
involved in IR technology development. For the Air Force,
                                                                      New infrastructure was needed to address the problem of ra-
much of the development was conducted in the Avionics
                                                                      diometric references and measurement standards. The very
Laboratory at Wright-Patterson Air Force Base (AFB). In
                                                                      notion of a reference standard was problematic due to the
the Navy, the Office of Naval Research (ONR) and the Naval
                                                                      complex nature of real-world object emissions. Similarly, the
Research Laboratory (NRL) took the lead. In the Army, the
                                                                      nature of aircraft as sources of light is complex. The leading
Army Corps of Engineers set up the Engineer Research and
                                                                      surfaces of a jet airplane or missile are heated by aerody-
Development Laboratories (ERDL) in 1954 [22], where the
                                                                      namic friction, and they emit IR light similar to a blackbody
Research and Photometric section began developing per-
                                                                      source. Jet and rocket nozzles are much hotter than the
sonalized night vision equipment for individual soldiers. This
                                                                      surfaces of jet airplanes and missiles, and the exhaust gases
unit became the Night Vision Laboratory (NVL) and was later
                                                                      themselves are often a combination of blackbody radiation
renamed the Night Vision and Electronic Sensors Directorate
                                                                      and emission lines (strong radiation of isolated wavelengths
(NVESD), most recently reporting to the U.S. Army Research,
                                                                      due to chemical species in the burning fuel). Indeed, the
Development, and Engineering Command (RDECOM) and
                                                                      spectral distribution of radiation could serve as an accurate
Communications-Electronics Research, Development and
                                                                      and unique signature of the airborne body thus identifying
Engineering Center (CERDEC) [23]. ERDL assumed much
                                                                      its type. In such circumstances, the comparison of instru-
of the responsibility for Army IR technology development.
                                                                      ments was difficult. “Traceability of instrument performance
However, their early emphasis was on NIR imagers that am-
                                                                      to the National Bureau of Standards is more and more a real
plified night ambient light such as image intensifiers and low
                                                                      question,” noted W. Wolfe, editor of the Handbook of Military
light level televisions (LLLTVs), but it also included active laser
                                                                      IR Technology [24]. The calibration of the detection equip-
pulse-gated TVs. Army emphasis later changed to the more
                                                                      ment was therefore inexact, involving a combination of crude
promising passive systems that could see self-emissions. By
                                                                      laboratory comparisons, theoretical estimates, and expensive
the mid-1970s, given the Army’s large procurement budget
                                                                      field trials.
for outfitting its many ground and air vehicles with night
vision equipment, the NVL developed considerable expertise
                                                                      The very form of the radiometry units also changed to suit
and arguably became the lead government laboratory influ-
                                                                      new circumstances. The new light sources of interest were
encing the direction of IR technology.
                                                                      not static. That is, aircraft, rockets, soldiers, and tanks change
                                                                      distance, angle, orientation, and apparent shape. Conse-
Still, most of the actual IR development was accomplished by
                                                                      quently, the old units of radiometry ceased to be adequate.
private industry. The major detector firms by the late 1960s
                                                                      Why should investigators be concerned with the total power
were the Santa Barbara Research Center (SBRC) (a subsidiary
                                                                      (the radiant flux, in watts) emitted by a light source or the
of Hughes Aircraft Corporation [HAC]), Honeywell, and Texas
                                                                      power emitted from its surface (the radiant emittance or
Instruments (TI). Thus, apart from the University of Michigan,
                                                                      exitance, watts/square meter [W/m2]), when its size and
itself a major beneficiary of military contracts, and Syracuse
                                                                      even distance might be unknown? When sources became
University, the bulk of IR research was being conducted by
                                                                      uncooperative targets, new measurement philosophies and
private firms. Previously centered in universities, IR tech-
                                                                      units gained relevance. All measurements were based on
nology had been redirected by the Cold War to become a
                                                                      what could be measured by the detector rather than on how
specialty outside the mainstream of academic science, much
                                                                      the light source could be manipulated. In a given band, the
like photometry.
                                                                      power density falling on the detector (irradiance, W/m2), the
                                                                      power radiated into a solid angle (radiant intensity, watts per


Chapter 4. Post-WWII IR Technology // 4-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                 DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                            DISTRIBUTION STATEMENT A.
                                                                                  Approved for public release; distribution is unlimited.




steradian [W/sr]) and, given the luxury of knowledge of the       formed by the Defense Technical Information Center (DTIC)
target size, the power radiated into a solid angle per area       chartered to collect and analyze specialized information to
of the source (radiance, W/sr m ) became the new values of
                                2
                                                                  support various military technology development thrusts. At
interest.                                                         that same time, the IRIS meetings were renamed to become
                                                                  the Military Sensing Symposia (MSS).
4.4 BETTER COMMUNICATION OF IR RESEARCH
                                                                  As an active participant and detector specialist who attended
4.4.1 Conferences
                                                                  many MSS meetings over his career, Steve Jost (BAE), had the
One of the most needed improvements in the IR research            following perspective on the value of the symposia [20]:
and development infrastructure was the creation of formal
avenues of information dissemination. Government-spon-                  All technologists benefit and grow from inter-
sored bodies organized new, more formal conferences that                action with others in the same field, and the
replaced informal, word-of-mouth communications at limit-               detector community was no exception. Due to
ed attendance meetings. Lovell [14] reported that the ONR               the huge military advantage in “owning the night,”
Branch Office in Pasadena, California, began sponsoring the             much of the technology beyond basic thermody-
Joint-Service Classified Symposia in 1949, which may have               namics and semiconductor physics was “secret.”
been the first of its kind. However, the first formal confer-           The DOD recognized the importance of such
ence, according to Biberman [25] was the government-in-                 technical interactions and initiated a series of
dustry cosponsored Guided Missile IR Conference formed                  secret level meetings where the non-proprietary
in 1952. Its focus was air-to-air missiles because that was             aspects of the technology could be debated and
the most promising application at that time. In 1956 it was             discussed and so the IR Information Symposium
expanded in scope to become the IR Information Symposium                (now Military Sensing Symposium) was born.
(IRIS). IRIS was run by the IR Information and Analysis (IRIA)
                                                                        These meetings provided a classified venue to
Center as part of the University of Michigan and was spon-
                                                                        share results of sensor development or produc-
sored by the ONR, but policy was determined by an executive
                                                                        tion and get the government’s perspective on
committee, which included equal representation from the
                                                                        “market” trends. While the formal presentations
three military branches and several representatives from the
                                                                        and discussions were instrumental for keeping
defense contractor community. By 1961, the IRIA charter in-
                                                                        abreast of industry and government devel-
cluded collection and dissemination of information from the
                                                                        opments, it was the informal interactions and
large number of IR development projects ongoing nation-
                                                                        recruiting activities that promoted collaboration,
wide. Starting with a small group of researchers in the early
                                                                        competition, and “technology transfer.” The inter-
1950s, IR meetings grew to between 500 and 1,000 partici-
                                                                        action [among] systems engineers, the user com-
pants by 1965, including attendance at all separate, “specialty
                                                                        munity, and detector technologists undoubtedly
group” topical meetings. Specialty group meetings would
                                                                        had a positive impact on the sensor technology
be held on topics of interest to development engineers and
                                                                        employed by U.S. forces.
scientists in such specialized areas as detectors, passive sen-
sors, active systems, target backgrounds and discrimination,
                                                                        Although the classified proceedings of the
etc. Much later in 2004, IRIA became the Military Sensing
                                                                        meeting could not be made openly available,
Information Analysis Center (SENSIAC), one of multiple “IACs”
                                                                        they were published for industry and government




Chapter 4. Post-WWII IR Technology // 4-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                        DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                   DISTRIBUTION STATEMENT A.
                                                                                         Approved for public release; distribution is unlimited.




       individuals with a “need to know.” This provided              Research Projects Agency (DARPA), written by the University
       an important historical perspective of the tech-              of Michigan (W. Wolfe, ed.) and published in 1965 by the
       nology and documented the thinking that led the               NRL. Given the military background of this work, it is not
       community to embrace a particular approach [20].              surprising that many sources of information were connect-
                                                                     ed with target analysis. Among sources of information and
With the growth of IR technology, the new catch-all subject          organizations that contributed to this publication included
of EO was becoming a more useful description. The Hand-              the Ballistic Missile Radiation Analysis Center, the Target and
book of Military IR Technology [24] mirrored this new subject        Backgrounds Signature Analysis Center, and the Background
by acknowledging publications mainly of the IEEE (Institute          Analysis Center, which were all at the Institute of Science and
of Electrical and Electronics Engineers); its predecessor, the IRE   Technology at the University of Michigan. Other contributors
(Proc. Inst. of Radio Engineers); the Optical Society of Amer-       to the handbook were the Remote Areas Conflict Information
ica, including the Journal of the Optical Society of America         Center (RACIC) at the Battelle Memorial Institute in Colum-
(JOSA) and Applied Optics (AO); and in Britain, the Institute        bus, Ohio and the Counterinsurgency Information Analysis
of Physics (J. Sci. Instr. and Physics in Technology). The editors   Center (CINFAC) at American University in Washington, D.C.
categorized IR detectors as a subcategory of modern optics           Radiometry, the central subject of the book, was extended
entwined with the contemporary field of solid-state physics.         to the meteorology of clouds, properties of the atmosphere,
                                                                     vegetation and ground covers, tracking system design, linear
The Society of Photo-Optical Instrumentation Engineers               systems engineering, thermal coatings, and optical materials.
(SPIE, renamed The International Society for Optical Engi-
neering in the 1980s), a small organization bringing together        This compendium was updated in 1978, as the ostensibly
technologists primarily in the photographic and motion-pic-          civilian IR Handbook [26] (Figure 4-1). In this version, the
ture industries in the post-war years, was transformed by an         military applications of radiometry were de-emphasized.
influx of researchers benefitting from military contracts. The       The chapters on “Targets and Backgrounds” were subsumed
initial connection was the need for specialized cameras and          into “Artificial Sources and Natural Sources.” However, IRA
tracking devices to monitor missile launches. Gradually, how-        remained the sponsor. Similar research and development
ever, these new EO engineers, versed in mechanical, optical,         programs were instituted in the Soviet Union, and produced
and electronic design to varying degrees, began to work              similar technical compendia, both overtly and covertly mili-
with IR systems. The military component was so significant           tary in origin.
that some SPIE meetings were restricted to American citizens
during the 1970s and 1980s.

4.4.2 The IR Handbook and Other Publications

In the early 1960s, the large number of firms and technol-
ogists connected with IR technology demanded wider
distribution of information to include openly available books.
Civilian applications were also sufficiently widespread to
promote popular articles and texts. The major source of in-
formation, however, was the Handbook of Military IR Technol-
ogy [24] sponsored by the ONR, contracted by the Advanced
Research Projects Agency (ARPA), now the Defense Advanced            Figure 4-1. 1978 IR Handbook (Source: SENSIAC).




Chapter 4. Post-WWII IR Technology // 4-4
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                               DISTRIBUTION STATEMENT A.
                                                                                     Approved for public release; distribution is unlimited.




The IR Handbook was updated again in 1993 and became an           4.5.2 InSb Detectors
eight-volume set called The IR & Electro Optical Systems Hand-
                                                                  Efforts to design better IRSTs and missile seekers led to the
book [27]. Several other books were written that significantly
                                                                  development of cooled photovoltaic InSb. This development
increased the distribution of IR technology and practice.
                                                                  finally resulted in MWIR detectors with sensitivity limited
One of the first, Elements of IR Technology, was written by
                                                                  only by the shot noise in background flux. When cooled,
Paul Kruse [28] in 1962 at Honeywell. However, IR Systems
                                                                  lead selenide (PbSe) offers response that extends into the
Engineering, written by Richard Hudson [22] in 1969 at HAC,
                                                                  mid-wave band, and cooling reduces internal noise due to
had the most impact. It not only became a standard educa-
                                                                  dark current. However, InSb, when cooled to 77 K, performs
tional tool in the U.S. but was widely read in the Soviet Union
                                                                  far better than PbSe. Moreover, InSb could be prepared in
as well [29], although the latter was probably not what the
                                                                  highly pure, single-crystal form with conventional growth
author had intended. This book, although written in 1969,
                                                                  techniques. This advantage eventually made it producible
is still relevant to modern IR systems, and that relevance is
                                                                  and affordable, but it took a great deal of trial and error. The
testimony to the knowledge, thoroughness, and expertise of
                                                                  Hughes Phoenix Search and Track system for the Navy F-14,
the author.
                                                                  circa 1965, was the first significant program using SBRC’s InSb

4.5 BREAKTHROUGHS IN DETECTOR DEVELOPMENT                         crystal detectors. The program started using an eight-ele-
                                                                  ment photoconductive InSb array developed by SBRC and
4.5.1 PbS Detectors                                               Honeywell Minneapolis. The early units were delineated by
                                                                  sandblasting, and both suppliers experienced a great deal
IR technology progress has always been paced by detector
                                                                  of difficulty with stability and other problems. SBRC finally
development progress. Early post-war detector availability
                                                                  developed satisfactory InSb detectors after a change to the
was mostly limited to PbS because of the successful transfer
                                                                  photovoltaic mode, and they ultimately became widely used
of that technology from Germany. However, PbS was nomi-
                                                                  in modern FLIRs.
nally only useful in the 1–3-µm band, and it was recognized
just from blackbody radiation principles that the mid-wave
                                                                  4.5.3 Ge:Hg Detectors
3–5-µm and long-wave 8–12-µm bands offered significant
potential for improvement. For instance, radiation contrast       The discovery of the transistor in 1947 also provided im-
peaks in the 8–12-µm band for room-temperature objects, so        portant impetus for advances in detectors. For instance,
because sensitivity was at a premium, there was considerable      transistor research stimulated better growth and purification
motivation to exploit the advantage of that region. Missile       techniques in semiconductors. Silicon and germanium (Ge)
seekers and IRSTs are more effective when they can sense jet      were favored semiconductor materials, so methods for impu-
engine plume emissions as well as aerodynamically heated          rity insertion became available for these materials first. It was
skins for all aspect aircraft detection and tracking. So, they    soon recognized that doping Ge with mercury (Hg) as well
work best in the 3–5-µm band, at least at short ranges or         as some other materials would provide response in the LWIR
high altitudes where there is less atmospheric attenuation        band [12]. This discovery eventually led Henry Levinstein’s
of the plume signature. Besides sensitivity, both the 3–5 and     group at Syracuse University with Air Force funding, and
the 8–12-µm bands, in general, offer a highly transmitting        eventually others, to fabricate Ge:Hg detectors that respond-
atmospheric window as well. The advantages of these bands         ed in the LWIR band. However, these detectors needed to
motivated the development of detectors that responded to          be cooled to about 28 K and thus needed large, heavy, and
the longer wavelengths of the MWIR and LWIR.                      power-hungry, two stage cryocoolers, but they significantly
                                                                  improved performance. Much later in 1969, the Air Force



Chapter 4. Post-WWII IR Technology // 4-5
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                DISTRIBUTION STATEMENT A.
                                                                                      Approved for public release; distribution is unlimited.




launched the first real production FLIR program when they         reproduced as Appendix A in this report. What is not widely
procured Ge:Hg detector-based FLIRs for B52 bombers.              known about Lawson’s MCT discovery is that when he and
                                                                  his colleagues in the U.K. RRE did not immediately succeed in
4.5.4 HgCdTe (MCT) Detectors                                      making viable detectors, they were forced to drop the effort
                                                                  for many years only to pick it up much later after hearing of
In 1959, a major breakthrough occurred when W. D. Lawson’s
                                                                  Honeywell’s success. According to U.K. researcher T. Elliott
group at the U.K. Royal Radar Establishment (RRE) [30] discov-
                                                                  [32], the RRE was required to drop its MCT research shortly af-
ered both photoconductive and photovoltaic response in the
                                                                  ter Lawson’s breakthrough in order to devote those resources
ternary alloy mercury cadmium telluride (HgCdTe, or MCT).
                                                                  to developing mid-wave InSb detectors needed for missile
Although this discovery was a breakthrough, the group was
                                                                  seekers because there was no operational requirement for
unsuccessful in its attempts to make practical detectors
                                                                  LWIR detectors. Paul Kruse and his group, on the other hand,
from MCT. However, shortly thereafter in 1962, Paul Kruse’s
                                                                  were able to fabricate reproducible MCT detectors by about
group [31] at the Honeywell Research Center in Minneapolis
                                                                  1964 and, after initial papers [31, 33] in the open literature,
developed a crystal growth technique for this alloy in the U.S.
                                                                  published most of their results in classified IRIS proceedings.
The narrow band gap and variable ratio of its components
                                                                  While they protected their proprietary techniques, their
allowed the material to be tailored to respond over a wide
                                                                  success inspired others, such as TI, HAC, and later the British,
spectrum from the near IR to beyond 12 µm. Moreover, the
                                                                  French, and Russians, to develop their own techniques, and
material was intrinsic with attendant high quantum efficien-
                                                                  the technology soon spread.
cy in thin detectors. It had a low dielectric constant, which
lowered capacitance to provide rapid temporal response and
                                                                  Robert Talley [33], president of SBRC during that period,
the wide bandwidths needed for fast-framing FLIRs. Most
                                                                  made some observations that illustrate the payoffs and
importantly, it provided background-limited noise levels at
                                                                  challenges that all the competing MCT detector developers
the much higher temperature of 77 K. The latter character-
                                                                  faced:
istic allowed using much smaller and more practical cryo-
coolers and Dewars with attendant dramatic reduction in                    SBRC got into HgCdTe development in a serious
system size, weight, power, and cost (SWaP-C). Development                 way. It was clear that this material was going to
of MCT detectors ultimately enabled the mass production                    be the key long wavelength detector material
of first-generation FLIRs. However, MCT fabrication was still              of the future.... It required many years of experi-
difficult, and widespread use of MCT detectors did not occur               mentation to develop the necessary techniques
until the early 1970s.                                                     to achieve high quality material. Although each
                                                                           laboratory bought the purest starting materials,
The importance of Paul Kruse’s HgCdTe (or MCT) discoveries
                                                                           the resulting purity was not adequate. SBRC’s
at the Honeywell Research Center in Minneapolis cannot be
                                                                           approach to purification and crystal growth was
overestimated. Kruse was a productive scientist and inven-
                                                                           to zone-refine the compounded HgCdTe many
tor. For instance, he was credited much later for inventing
                                                                           times. By mid-period some detectors showed
microbolometer focal plane arrays and they, one might
                                                                           performance equivalent to those at Honeywell,
argue, were destined to have an equally large impact on IR
                                                                           but there were serious problems with yield, stabil-
technology. Fortunately, we have the benefit of transcrip-
                                                                           ity, electrical contacting, and other related issues.
tions from Marion Reine’s taped interview with Kruse in
                                                                           By the end of this period, SBRC still lagged behind
1980. It is so insightful and revealing of the effort and luck
                                                                           Honeywell.
required to fabricate MCT detectors that the interview is


Chapter 4. Post-WWII IR Technology // 4-6
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                               DISTRIBUTION STATEMENT A.
                                                                                     Approved for public release; distribution is unlimited.




SBRC eventually did succeed in making high-quality, produc-         thus making fabrication expensive. These drawbacks caused
ible MCT detectors. In fact, HAC, through their SBRC subsidi-       many to doubt its viability as a detector candidate even after
ary, ended up being one of the largest suppliers of first-gen-      its very desirable photosensor properties were understood,
eration common module detector arrays.                              and MCT’s viability is still questioned. Clearly MCT became a
                                                                    breakthrough material because it offered ideal sensitivity in
Like many breakthroughs, successful operational MCT                 the LWIR band at 77 K temperature, but it still would not have
detectors were the result of an accident combined with the          emerged when it did if it were not for luck, knowledge, and
astute recognition of the by-product of that accident. In this      persistence together with years of government funding
case Kruse reported that, because of a failure in the furnace       and corporate management’s support of their research
used to grow MCT crystals, the molten ingot source material         laboratories.
accidentally cooled instead of remaining in the molten state
as the crystal grew. The result was unintentional annealing of      4.6 DEVELOPMENT OF IRST SYSTEMS (ADAPTED FROM
the MCT compound. That annealed boule was set aside until           ROBERT SENDALL’S SENSIAC REPORTS [19])
months later when an astute technician, Bernice Johnson,
                                                                    The development of IRSTs helped to advance a baseline of
noticed that it showed traces of the same pinkish color that
                                                                    enabling technology that soon contributed to the emer-
previously characterized the best performing MCT material.
                                                                    gence of FLIRs as well. As previously stated, IRST sets have
So, they made detectors out of it and discovered to their sur-
                                                                    been used in various forms since WWII, even though they
prise that it showed greatly increased detectivity. It was the
                                                                    were not called that before about 1960. The IRST is a passive
breakthrough that showed the way to repeatable fabrication
                                                                    sensor that uses heat emitted by the target to generate data
of highly sensitive, long-wave MCT detectors. The story also
                                                                    for the weapon system of an aircraft or other platforms such
shows how much successful fabrication depended on exper-
                                                                    as ships or anti-aircraft batteries. Passive operation of the
imentation instead of in-depth material understanding. It is
                                                                    IRST has the advantage of concealment. In addition, it can
also reminiscent of how the Germans achieved success with
                                                                    be designed with an auxiliary narrow field of view (FOV) to
PbS and PbSe detectors two decades earlier: not with great
                                                                    provide high-resolution imaging for long-range visual identi-
understanding of material science, but with persistent and
                                                                    fication when the image is presented on a display [19].
time-consuming experimentation and measurement until
success was achieved.
                                                                    Using sensors that detect heat in searching for targets from
                                                                    combat aircraft is as old as the use of these sensors for missile
Adoption of MCT for development was not only lucky from
                                                                    guidance. The first models exhibited limited performance
the standpoint that no one knew how to fabricate usable
                                                                    in that a target image was not formed. Instead they relied
detectors, even given that it had promising theoretical
                                                                    on nonimaging techniques such as a scanning reticle or a
properties, but rather MCT had many drawbacks that made
                                                                    scanned cross array in a cruciform configuration to determine
working with it very daunting as it is to this day. For instance,
                                                                    a target’s position without forming a displayed image. Other
Hg vapor pressure can be over 20 atmospheres when heated
                                                                    early IRST designs would raster scan the scene with detector
in crystal growth processes. That pressure caused many labo-
                                                                    line arrays to show target position by means of symbology
ratory explosions that not only demolished expensive crystal
                                                                    positioned on a head-up display. These early versions had
growth equipment but made whole laboratories unusable
                                                                    difficulty with high false-alarm rates due to low resolution
due to dangerous contamination by toxic Hg. Also, MCT
                                                                    and clutter such as sunlit cloud edges and ground objects.
is both soft and brittle, so cutting and polishing it during
                                                                    Much like FLIRs, current IRSTs show high-resolution imagery
fabrication of crystals into detector elements could easily
                                                                    on a monitor, so the operators can see the objects to help
damage a detector after many hours of labor were expended,


Chapter 4. Post-WWII IR Technology // 4-7
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                               DISTRIBUTION STATEMENT A.
                                                                                     Approved for public release; distribution is unlimited.




reduce false alarms. In that, there is little difference in the    reliable detection of bomber-sized targets at 100 miles. In-
way they operate compared to a FLIR.                               stallation of the AN/ASG 18 was a massive undertaking since
                                                                   it weighed 2,000 lb and took up most of the aircraft’s nose.
U.S. Air Force and Navy aircraft of the 1950s and 1960s, such      The system was planned for use with the HAC AIM-47 Falcon
as the F-101B Voodoo, F-104 Starfighter, F 106 Delta Dart,         radar guided missile, which also had a range of about 100
F-8 Crusader, and F-4B Phantom, were equipped with these           miles. It was never produced but became the forerunner of
early sensors. Air Force interceptors carried nose-mounted,        the successful Phoenix AIM-54 missile and fire-control system
nitrogen-cooled, lead selenide (PbSe) cross-array IRST sets        deployed on the Navy’s F-14 Tomcat fighter. While the later
to detect high flying Russian bombers, such as the Bear and        Phoenix IRST had a greatly improved mid-wave InSb detector
Bison. This application exploited the strength of IRSTs, which     array, it was eventually removed in favor of just using the ra-
is its ability to detect and track a target passively, and thus,   dar due, in part, to the IRST’s short range, lack of a displayed
undetectably. Such an attribute is considered a major asset        target image, and resulting high false-alarm rate. Much later,
in air defense operations because a large bomber typically         however, a new generation of LWIR detectors enabled Sand-
carries a radar warning receiver and a powerful onboard            ers/BAE to design a greatly improved F-14D IRST that was
jammer so it can receive timely warning of impending attack        effective at long ranges and widely deployed.
and defend itself by jamming the interceptor. This strategy
was also adopted by the U.S. Navy, which equipped its F-4B         4.7 DEVELOPMENT OF LINE SCAN MAPPERS (ADAPTED
fighters with chin-mounted AAA-4 IRST sensors. Moreover,           FROM KIRBY TAYLOR [21])
the IRST was also incorporated into the Navy Vought F-8 Cru-
                                                                   Line scan mapper development was the last step leading
sader (F-8E) variant, shown in Figure 4-2, where it was used to
                                                                   up to the emergence of FLIRs. Line scan mappers were the
cue targets for AIM-9B Sidewinder seekers.
                                                                   first IR sensors that provided the capability to view imag-
                                                                   es formed from room temperature object self-emissions.
                                                                   (Although IRSTs predated mappers, early IRST versions did
                                                                   not present images to operators, while much later versions
                                                                   did. Moreover, early IRSTs generally required higher object
                                                                   temperatures.) Early IR mappers used a single detector that
                                                                   was swiped one scan line at a time across the ground by a
                                                                   scan mirror. The output was fed to a glow bulb illuminating
Figure 4-2. Vought Crusader F-8E variant (Source: U.S. Navy).
                                                                   a spot on a photographic film carriage (Figure 4-3 [left]) [34,
                                                                   35]. The forward motion of the aircraft resulted in successive
Later, when airborne Doppler radar became feasible, IRSTs
                                                                   scan lines being generated on a film strip fed by a reel that
and radars were integrated together to provide the advan-
                                                                   was synchronized to the speed of the aircraft as illustrated
tages of IRST covertness with radar’s low false-alarm rate,
                                                                   in Figure 4-3 (right). These systems were very successful at
long range, and fire-control capabilities. The HAC AN/ASG-18
                                                                   reconnaissance but not at providing direct fire support. Nev-
prototype airborne radar/IRST fire-control system was the
                                                                   ertheless, they showed the utility of IR imaging and soon led
first U.S. pulse-Doppler radar system with look-down/shoot-
                                                                   to directable, real time imaging systems, now called FLIRs, as
down capability. Pulse-Doppler radars have an advantage
                                                                   described in Chapter 5.
over passive IRSTs in detecting closing aircraft against
ground clutter because Doppler signal processing effective-
                                                                   The archival literature does not provide much information
ly removes stationary objects. The radar range of the AN/
                                                                   about the origins of line scanners except that several U.S.
ASG-18 was estimated to be between 200 and 300 miles with

Chapter 4. Post-WWII IR Technology // 4-8
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                DISTRIBUTION STATEMENT A.
                                                                                                      Approved for public release; distribution is unlimited.




Figure 4-3. Illustrations of an IR mapper [34, 35]. An image scanned by a rotating mirror is transferred to film via a synchronously scanning glow tube modu-
lated by the IR detector output (left). Forward motion of the aircraft adds the second dimension to the raster scan (right) (Source: U.S. Air Force).



companies eventually made them. In 1947 Alexander Nyman                         age the ground below the airplane from horizon to horizon.
applied for a patent titled “Stabilized Automatic Mapper” [36],                 The UAS-5 marked the beginning of the IR systems business
but it wasn’t granted until 1969 perhaps because of security                    for TI and led, in 1961, to the production of the AAS-18 line
issues. His patent disclosed a system that used gyroscopic                      scanner. That line scanner was mounted on the RF-4C aircraft
stabilization and an oscillating optical system which could be                  and was used to map infiltration routes in Vietnam. Figure
used in an airplane to map the ground. Nyman worked for                         4-4 shows an image formed by the TI UAS-5 line scan mapper
several employers during his career, including Westinghouse,                    [36].
but the patent is only in his name.

TI was an early pioneer in line scan mapper development.
According to the TI website [36], company management saw
the potential of IR technology in the mid-1950s, which led to
the acquisition of the William I. Mann Company. Mann was
a California EO expert whose company inventory included
silicon detectors, missile guidance heads, fire control sights,
and light sources. Mann then became general manager of
the new TI Optics Division whose core was formed from his
company. To complement TI’s IR aspirations, their Semicon-
ductor Research and Development Labs sought and won
contract funding from many government agencies. That
funding led to a major breakthrough when TI was able to in-
tegrate a detector and preamplifier on the same chip. At the
same time, TI was pioneering long-wavelength (8–14 µm) Ge:Hg
detectors. These advanced technologies enabled TI to win
an Army contract in 1957 to develop a wide-angle IR mapper,                     Figure 4-4. A visible-band aerial photograph of the TI plant (left) and the
the UAS-5, which used a single-axis “Kennedy” scanner to im-                    corresponding mapper image (right) (Source: TI).




Chapter 4. Post-WWII IR Technology // 4-9
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                       DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                  DISTRIBUTION STATEMENT A.
                                                                                        Approved for public release; distribution is unlimited.




According to Kirby Taylor, the first version of the UAS-5 used a      4.8 DEVELOPMENT OF PERFORMANCE METRICS
single-cell InSb detector cooled by LN2 to 77 K and operated
                                                                      4.8.1 Bar Target Equivalency Criteria
in the 3–5 µm wavelength band. Then, a longer wavelength
detector, the Ge:Hg, became available, and it was easily              Arguably, one of the most important advancements that
introduced into the sensor from the standpoint of the optics          facilitated the emergence of FLIR technology, bar target
due to the fact that all the optics were reflective. However,         equivalency criteria, was not originally developed for FLIRs
the Ge:Hg had to be cooled to 25 K or less. Since there were          but drove the design of early devices and even still had an
no practical mechanical cryocoolers available that worked at          impact on FLIRs as recent as 2016 and likely will going for-
that temperature, liquid helium had to be used. Initially the         ward as well. That development was the “epiphany” Johnny
problem was solved by storing the helium in a “double” Dew-           Johnson [37] of the U.S. Army NVL, now NVESD, had when
ar designed for an inner chamber of helium surrounded by a            he recognized that bar target test patterns could be used
vacuum, surrounded by LN2, surrounded by a vacuum. This               to replace actual target images in what he called “bar target
important component was developed by a company named                  equivalency criteria.” He set up an observer test in which test
Linde. The combination of LN2 in the outer Dewar and liquid           subjects were shown actual target images filtered to varying
helium in the inner Dewar worked very well and produced               degrees of discernibility. Johnson then measured the level of
the first LWIR imagery in the 8–14 µm band.                           resolution required for the observers to accomplish various
                                                                      target acquisition tasks from the lowest level to the most dif-
When the line scan mapper was deployed in war zones,                  ficult. The tasks ranged from detection, to orientation, to rec-
mostly in Vietnam, providing the liquid helium for Ge:Hg              ognition, and finally to the most difficult, identification. He
cooling was difficult. LN2 was not much of a problem since            then substituted spatial frequency bar target patterns for the
most bases have liquid oxygen plants making LN2 as a                  real image to measure the level of resolution the observers
by-product. Helium posed a much larger problem. First,                needed for each acquisition task and probability level. Figure
liquid helium is dangerous, especially during air transport.          4-5 illustrates the method used and the results obtained.
In addition, it “boils” off rapidly at altitude, and so a long-dis-
tance supply flight yields small quantities at the destination.       Johnson used this method for image intensifier-based night
The same physics made problems for the Linde Dewar in                 vision devices, and it soon was incorporated into bar target
operational flights. The Dewar and the mapper could only              equivalency criteria for LLLTVs and FLIRs as well. The crite-
operate for approximately an hour.                                    ria enabled imaging device performance to be measured
                                                                      in terms of spatial frequency resolution, which then could
The pressure to develop mechanical cryogenic coolers suit-            be compared to predicted device performance as obtained
able for the deployed systems was intense. The North Amer-            using linear systems theory. Otto Schade [38] had earlier
ican Phillips Company provided operational units beginning            suggested that this theory could be used to perform TV
in the early 1960s. This basic design went forward to other           analysis while working at RCA in the early days of TV devel-
production systems such as the AN/AAS-18 for the RF-4C                opment. Schade made the astute observation that a tem-
aircraft and was used later with the first prototype FLIRs. The       poral frequency, i.e., a sinusoidal voltage pattern varying in
technology developed to enable these mapping systems to               time, was analogous to a spatial frequency. In fact, when
function for longer periods proved to be critical during the          a TV pickup tube scans a read beam across an image of a
development of FLIR systems.                                          sinusoidally varying intensity pattern, the output is a tempo-
                                                                      ral frequency that depends on the scan beam velocity and
                                                                      the spatial dimension of the sinusoidal pattern. With those



Chapter 4. Post-WWII IR Technology // 4-10
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                      DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                 DISTRIBUTION STATEMENT A.
                                                                                                       Approved for public release; distribution is unlimited.




Figure 4-5. Johnson’s Bar Target Equivalency Criteria determined resolution requirements for various target acquisition tasks [37] (Source: U.S. Army).



equivalents in place, Schade recognized that the same linear                     tended the basic theoretical and psychophysical framework
systems theory, including the powerful Transfer Function,                        when he studied the effects of system noise on observer
which characterized electrical system temporal frequency                         performance again using TV systems. Though the work
response, was just as applicable to characterizing optical and                   of these three pioneers provided a very important foun-
EO image-forming system response. This discovery gener-                          dation, it was still not directly applicable to FLIRs but Bob
ated the equivalent transfer function metric, later called the                   Sendall at HAC developed a similar framework for FLIRs and
Modulation Transfer Function (or MTF). The MTF was used                          later worked with Rosell [40] to merge their modeling and
by both optical and EO engineers to quantify the resolution                      empirical performance data so they applied to both FLIRs
of their respective systems. Since EO systems consist of both                    and TVs in a common methodology. In the case of FLIRs,
optics and electronics, MTF proved to be a convenient metric                     Sendall developed the Minimum Resolvable Temperature
for quantifying the resolution performance of the combined                       (MRT) metric, which combined the effects of both noise and
systems.                                                                         resolution on performance as seen by an observer viewing
                                                                                 imagery on a FLIR display. This fundamental performance
Schade’s and Johnson’s work not only helped to base FLIR                         analysis approach and criteria allowed FLIRs to be designed
design and performance analysis on sound engineering                             to meet specific user performance objectives and allowed
principles, but it also provided the measurement-based                           government procurement officials to rigorously compare
criteria they needed to meet for evaluation and comparison                       competing designs. James Ratches [41] at NVL later incorpo-
between approaches. Fred Rosell [39] at Westinghouse ex-                         rated the methodology in a FORTRAN computer code that


Chapter 4. Post-WWII IR Technology // 4-11
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                           DISTRIBUTION STATEMENT A.
                                                                 Approved for public release; distribution is unlimited.




became the first of many NVL/NVESD models that were wide-
ly disseminated to the IR community as a design tool. As of
2016, these basic criteria and models were still being used to
design current FLIRs. Both the criteria and the models have
been continuously refined to incorporate the most recent
measurement data and new modeling insights as will be dis-
cussed in Chapter 9.4. Ultimately, their work developed into
a new engineering discipline: EO systems engineering.

4.9 SUMMARY AND CONCLUSIONS

Immediately following WWII and leading up to the Vietnam
War, there was substantial development of IR infrastruc-
ture and enabling technology. Key contributions included
better communication of IR research, better detectors, new
scanning system technology, and new performance metrics.
However, a viable, fast-framing FLIR was not produced during
this period; that achievement occurred during the Vietnam
War as is described in Chapter 5.




Chapter 4. Post-WWII IR Technology // 4-12
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                             DISTRIBUTION STATEMENT A.
                                                                                   Approved for public release; distribution is unlimited.




CHAPTER 5. VIETNAM-                                               Lloyd also reported that the Army developed one of the first
                                                                  FLIRs in 1960, when it funded Perkin-Elmer Corporation to
ERA FLIR DEVELOPMENT                                              build a ground-based FLIR. It reportedly used two rotating,
                                                                  refractive prisms, which performed a spiral scan of a sin-
5.1 INTRODUCTION                                                  gle-element InSb detector over a 5° diameter circular FOV
During the Vietnam War era (1964–1973), the first practical,      with a 1-milliradian instantaneous FOV (IFOV). The FLIR had
fast-framing FLIRs were developed. Many companies and             a 5-Hz frame rate and an approximate 1.0 °C sensitivity. The
government organizations contributed to their development.        flicker problem caused by such a slow frame rate was man-
However, two companies played the largest role: HAC with          aged by using a long persistence phosphor cathode ray tube
its subsidiary SBRC (became RVS) and TI (portions of TI later     (CRT) display.
became DRS). Others such as Aerojet General, Honeywell (to
                                                                  However, the Air Force Avionics Laboratory (AFAL) at
become BAE), and AVCO (became CE, then L-3) were com-
                                                                  Wright-Patterson AFB in Dayton, Ohio had the most influence
petitors and made key contributions but had lesser overall
                                                                  of the government agencies in this era for two reasons. First,
roles at the system level during this era. The recollections in
                                                                  the Air Force needed strategic bombers to be equipped with
this chapter of key contributors Robert Sendal [19] (HAC) and
                                                                  FLIRs during the Cold War for low-altitude night navigation to
Kirby Taylor [21] (TI) provide valuable and insightful observa-
                                                                  avoid radar detection and for nuclear blast blindness protec-
tions about the struggles to perfect FLIR technology and how
                                                                  tion when flying into the Soviet Union. Second, the Vietnam
they overcame adversity. These observations can help future
                                                                  War began and the Air Force mission in Vietnam involved
developers understand what it takes to succeed in a corpo-
                                                                  heavy roles in surveillance and interdiction. Those roles led
rate/government/war-time procurement environment.
                                                                  them to have the earliest need to develop FLIR technology.
Important contributions to both FLIR development and FLIR         Captain James Krause took the initiative to promote FLIR
history documentation were also made by J. Michael Lloyd          technology development and, as a result, not only became
at Honeywell and Lucien M. Biberman at the Institute for          the Air Force’s lead combat FLIR user but was very influential
Defense Analysis (IDA). According to Lloyd [42], fast-fram-       in the IR community. His feedback and design suggestions
ing thermal imagers were not feasible before the late 1950s       from a user standpoint, including his many presentations at
because detector bandwidths had to be limited to a few            IRIS/MSS meetings, had a major impact on the direction of
hundred hertz due to poor detector time response. However,        FLIR development and use.
detector time constants got shorter with the emergence of
                                                                  In addition to the Air Force’s early pressing needs, both Navy
cooled InSb and Ge:Hg, which combined with their mid- and
                                                                  and Army agencies had urgent needs and were involved in
long-wavelength spectral response, enabled strip mappers
                                                                  FLIR development as well. For instance, the Navy at China
to become practical. He reported that the first LWIR FLIR
                                                                  Lake experimented with FLIRs for P2A and RA-5 surveillance
was built in 1956 during the Korean War at the University of
                                                                  aircraft, and the Army explored them for use on their OV-10
Chicago, with Air Force support, by modifying an AN/AAS-3
                                                                  Mohawk battlefield support aircraft. Both the Navy and the
strip mapper that was designated the XA-1. It was made by
                                                                  Army embraced FLIR technology and later became major
adding a nodding elevation mirror to the existing horizontal
                                                                  sources of development and funding.
scanner. Development was not pursued when the war end-
ed, since there was no longer a pressing need.
                                                                  The role of Lucien Biberman at IDA was central in early FLIR
                                                                  development. IDA is a quasi-governmental, nonprofit Feder-



Chapter 5. Vietnam-Era FLIR Development // 5-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                 DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                            DISTRIBUTION STATEMENT A.
                                                                                  Approved for public release; distribution is unlimited.




ally Funded Research & Development Center (FFRDC) created        also led the way in the development of performance metrics,
in 1956 to provide scientific and technical expertise to the     which were instrumental in optimizing system performance
Department of Defense (DoD). Biberman was widely respect-        by quantifying the effects of both the system design parame-
ed for his role in creating the highly successful Sidewinder     ters and the observer viewing the displayed image. All of this
missile and for his technical savvy. He was always ready to      technological improvement would have happened eventual-
voice his opinions at both formal and informal meetings if he    ly, but the incentives of the Vietnam War accelerated it during
thought programs were going in the wrong direction, even         this era.
at the risk of offending powerful program interests. Biber-
man was puzzled by the performance disparity among early         5.2 VIETNAM WAR IR IMAGING PROBLEMS AND
FLIRs and forced flight tests to compare competing systems.      SOLUTIONS
When the disparate results could not be explained, he real-
                                                                 IR systems were extremely important during the Vietnam
ized that critical design parameters such as noise equivalent
                                                                 War, which involved jungle warfare against an elusive, often
temperature (NET), frame rate, and apparent display size
                                                                 well concealed, enemy who preferred night operations.
were not understood and were potentially not even all inclu-
                                                                 This highlighted the importance of IR systems. Airborne,
sive. He headed a committee of government and industry
                                                                 down-looking line scanners, initially mounted in C-47 trans-
experts to define a performance model that would guide
                                                                 port aircraft, were the first IR systems in theater. As described
design specifications for future systems.
                                                                 in Section 4.2, these systems scanned a single, LN2-cooled,
                                                                 InSb photodiode detector back and forth across the flight
The urgent need for night viewing in Vietnam incentivized
                                                                 path using the detector output to drive a miniature arc lamp
the military and defense companies to rapidly develop IR
                                                                 that exposed a strip of photographic film. The film was de-
technology. HAC and TI were early competitors, and each
                                                                 veloped after the aircraft returned to base and was examined
took a different approach. In the end, TI equipment played
                                                                 by image analysts for signs of enemy activity. This method
the largest role and led to the development of the first-gen-
                                                                 proved to be quite unsatisfactory (except for certain fixed tar-
eration Common Module (“Mod”) FLIR after the war. TI FLIRs
                                                                 gets), since the time delay between flyover and subsequent
used a more direct and simpler optomechanical design
                                                                 attack by strike aircraft was 4–6 hr. In spite of this drawback,
than HAC FLIRs, which minimized the need for still nascent
                                                                 over 1,000 line scanner systems were deployed on RF4C,
multiplexing electronics. At first they used modified CRTs
                                                                 B57, RA5-C, and OV-1 Mohawk aircraft in waves of improving
for display, but eventually progressed to simple, standard
                                                                 technology throughout the 1960s. Improvements included
TV cameras to view and convert parallel output channels for
                                                                 replacement of single-element detectors with small arrays of
serial display on standard monitors. HAC FLIRs were more
                                                                 detectors, replacement of InSb with Ge:Hg detectors (halving
complex and more difficult to build. They incorporated
                                                                 the NET difference), and replacement of the arc lamp with
special electronics to implement detector-staggered spacing
                                                                 gallium arsenide (GaAs) diodes. In a final line-scanner ver-
for cold shielding that required unique output multiplexing
                                                                 sion, film was developed on-board in near real-time, allowing
and time delay to register the resulting output for image
                                                                 the crew to locate targets and vector in strike aircraft within
display. However, the output was still not standard TV com-
                                                                 minutes. Real-time viewers were developed to see a near re-
patible, so it required a special nonstandard CRT display. The
                                                                 al-time moving map display in the aircraft. This method was
TI approach was more producible in this early era, but many
                                                                 better than developing film, but the detected targets were
attributes of the HAC multiplexer design were eventually
                                                                 always behind the aircraft by the time the operator could
incorporated into postwar designs and second generation
                                                                 see them. So this modification was also unsatisfactory when
(GEN2) FLIRs. HAC, under the leadership of Robert Sendall,
                                                                 tracking moving targets.


Chapter 5. Vietnam-Era FLIR Development // 5-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                      DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                 DISTRIBUTION STATEMENT A.
                                                                                       Approved for public release; distribution is unlimited.




An IR system capable of fast-frame imaging was needed for a          EO multiplexer imaging light-emitting diodes (LEDs) format-
combatant to find his target, track it in real-time, and deliver     ted in the same geometry as the detectors and scanned off
a munition without ever breaking contact. He could control           a mirror assembly connected directly to the IR scanner. This
the entire kill chain and minimize latency.                          concept was a forerunner of the next-generation Common
                                                                     Module FLIR approach.
Such a system, which became known as FLIR, was devel-
oped by the Air Force and TI in 1964. It was then mounted            Another major improvement occurred in 1970 when Ge:Hg
in a C-47 transport aircraft that had been converted into a          detectors were replaced by the first production LWIR MCT
gunship and deployed to Vietnam in 1965. The FLIR and                photoconductive detectors. MCT is a nearly ideal, intrinsic,
its immediate successors made a dramatic impact on the               photodetector material, with a direct, compositionally tailor-
battlefield. For the first time, traffic along the Ho Chi Minh       able, bandgap as opposed to Ge:Hg, which has an extrinsic,
Trail was interdicted effectively, and even small units of Viet      fixed, indirect bandgap. Consequently, MCT detectors have a
Cong moving through foliated countryside were frequently             much higher photon absorption coefficient (providing better
detected.                                                            sensitivity with thinner detectors), much lower dark current
                                                                     (enabling higher operating temperatures), and a bandgap
The first FLIRs used 40-mil (i.e., approx. 1,000 µm) Ge:Hg LWIR      tuned exactly to the LWIR atmospheric window (enabling
detectors in 1x3 and, later, in 2x15 parallel/serial array config-   maximum signal-to-noise ratio). Much smaller 2-mil MCT
urations with mirrors to scan them across and down the FOV           detectors were made in 1x180 parallel configurations, cooled
every 20 milliseconds (50-Hz frame rate). Output from the            to 77 K (instead of 28 K for Ge:Hg), and interlace scanned
detectors was used to modulate the intensity of a Matricon           (for 360 lines of resolution). These higher-temperature
CRT that was directly viewed by an operator. But the FLIRs           systems with smaller detectors that allowed smaller optics as
were expensive, large, heavy (approximately 600 lb), energy          well were much less expensive to build, were one-third the
inefficient (approximately 1,000 W), and the image quality           volume of Ge:Hg detectors, weighed only 200 lb, consumed
was less than ideal. In addition, their wide FOV with relatively     much less power, and exhibited exceptionally crisp imagery.
low resolution was not practical for longer range fire control
systems.                                                             Alternative solutions to FLIRs for night vision were also
                                                                     intensely investigated during the war. LLTVs were prime
These problems were addressed with technological improve-            candidates. In their most basic form, LLTVs combined a mul-
ments between 1968 and the end of U.S. involvement in the            tistage image intensifier with a vidicon. Ambient light was
war in 1972. One improvement introduced larger, one-di-              insufficient for the poor quantum efficiency photocathodes,
mensional parallel scanners using linear arrays of up to 400         and spectral response did not extend far enough into the
channels with much smaller Ge:Hg detector sizes that were            near IR to detect significant sky glow as did later image inten-
on the order of 3 mils square. These image-plane scanned             sifiers. Covert active illumination was added by placing filters
arrays sensed the IR imagery through relatively long focal           on artificial sources such as xenon lamps. After lasers were
length refractive lenses. Twelve-inch focal lengths with 3-mil       invented in the early 1960s and practical neodymium-doped
elements produced resolutions of 1/4 milliradian. Optical            yttrium aluminum garnet (Nd:YAG) lasing media provided
switching mechanisms provided for on-command selection               invisible 1.06-µm laser light in the mid to late 1960s, active
of wide and narrow FOV. Signal processing was achieved by




Chapter 5. Vietnam-Era FLIR Development // 5-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                           DISTRIBUTION STATEMENT A.
                                                                                                 Approved for public release; distribution is unlimited.




pulse-gated LLTVs4 appeared to be a viable competitor to                     challenges of war-time technology insertion. Some of them
FLIRs. Since a major concern was seeing through battle-                      are included in Appendix B.
field smoke and dust, the systems were pulse-gated so that
discrete pulse returns were timed to correspond to ranges                    5.3.1 First FLIR System: FLIR 1
near the target. Image intensifiers on the LLTVs had rapid
                                                                             In 1963, TI engineers began to develop a real-time, two
response and could be shuttered to open at the intended
                                                                             dimensional IR viewer with $30,000 in company funding. The
pulse return time and then closed to lock out reflections from
                                                                             approach was to investigate the feasibility of adding a sec-
shorter range aerosols. This technique gated out inter-
                                                                             ond scan mirror to the single-axis line scanner, which would
mediate range returns from dust and smoke. According to
                                                                             supplant the forward motion of the aircraft as a means to
Ponomarenko and Filachev [29], the Russians experimented
                                                                             generate the second scan direction. This real-time IR imaging
with similar night vision approaches and built a prototype
                                                                             device was called FLIR–Forward-Looking Infrared. The name
device using a ruby laser in 1963.
                                                                             came from the fact that the previous devices were mappers
                                                                             that looked down, but the new, two dimensional scanner was
Pulse-gated LLTVs had several drawbacks compared to FLIRs
                                                                             now able to look forward. The study included some basic
including the poor penetration power of their shorter wave-
                                                                             scanning experiments that determined the concept’s feasi-
lengths, and the fact that they were active raised concerns
                                                                             bility. TI hurriedly prepared an unsolicited proposal to ARPA,
that they were not sufficiently covert. In that era, they were
                                                                             later renamed DARPA. DARPA’s charter was to investigate
soon replaced by FLIRs, but they later re-emerged in more
                                                                             high-risk, but high-payoff, visionary new technologies and
modern fire-control systems as complements to FLIRs. They
                                                                             was, in a sense, the “venture capital” arm of the DoD.
can complement FLIRs due to their ability to provide ex-
tra-long target identification range by exploiting their much
                                                                             DARPA said the concept was interesting but there was no
shorter wavelengths to obtain smaller optical diffraction blur
                                                                             military requirement for a FLIR because combat was not
spot sizes and thus higher resolution.
                                                                             conducted at night. While obviously disappointed by this re-
                                                                             sponse, TI persisted and approached the AFAL at Wright-Pat-
5.3 TI FLIR DEVELOPMENT [21]
                                                                             terson AFB, which had been previously involved with TI in
This subsection is a history of FLIR development at TI as                    line-scanner source selection and in detector development.
extracted, edited, and condensed from the recollections of                   The Air Force saw value in night imaging but required TI to
Kirby Taylor. Also included is historical information from TI’s              bid on the project in an open competition. TI’s idea was no
website [43] where the latter is then further expanded with                  longer considered proprietary, and eight companies compet-
inputs from Taylor for this history. However, information                    ed for one of the two $250,000 contracts. However, all com-
from other sources is also included, and those sources are                   petitors eventually dropped out and the award went to TI.
specifically cited. Taylor, an electrical engineer, was uniquely
positioned to provide historical recollections. He witnessed                 TI began work in October 1964 with a dedicated team of
first-hand the engineering and the political struggles both                  physicists and engineers. In May 1965, the first exploratory
as a contributor to the FLIR design process and as a contrac-                flight test was conducted. A major factor in this accomplish-
tor field support engineer in the Vietnam theater. Taylor’s                  ment was having access to a detector factory, cryogenics
informative stories of those struggles provide insight into the              from ongoing mapper programs, the baseline Kennedy scan-



4
  Coauthor David Schmieder was on the team under Army contract to integrate pulse-gated LLTVs into tank fire-control systems while employed by Delco
Division of General Motors in 1970.


Chapter 5. Vietnam-Era FLIR Development // 5-4
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                        DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                   DISTRIBUTION STATEMENT A.
                                                                                                         Approved for public release; distribution is unlimited.




ner design, and engineers having system experience with IR
optics, detectors, and electronics.

The basic sensor consisted of a two dimensional, all-reflective
optics scanner; a three-element Ge:Hg detector array cooled
to about 28 K by a Norelco Stirling Cycle cooler; electron-
ics; and a display. The display was customized from a color
TV tube modified to three black and white guns to match
the three element detector geometry. The technique used
on this sensor was serial scan but with the given detector                         Figure 5-2. Image from first flyable TI FLIR (Photo credit: Kirby Taylor [21]).

geometry, it should more properly have been called serial/
parallel. The optical configuration was a complex, two-axis,                       In addition, the prototype had a poor NET of about 0.7 °C,
split-aperture scanner adapted from the Kennedy single-ax-                         which is useable for clear weather, but not for high-humidity
is mapping scanner. Several illustrations of the optics are                        conditions or long ranges.
shown in Appendix C.
                                                                                   Nevertheless, the Air Force in Washington, DC was very inter-
By the end of 1965, TI delivered a crude but flyable bread-                        ested in the FLIR technology and wanted to test it in a battle
board model, as shown in Figure 5-1. It was a simple proto-                        zone. They ignored TI’s objections and installed it on a C-47
type with marginal imagery as shown in Figure 5-2 and was                          aircraft5 and scheduled an operational flight-test program
not yet ready for testing in a critical airborne application.                      over the battle zones of Southeast Asia.
The frame rate was adequate for most applications at about
24 frames per second with a 20°x40° FOV. Such a large FOV                          Bien Hoa Air Base in Vietnam during the rainy season was
was not compatible with longer range fire control systems.                         headquarters for the test. For TI, it was a bad engineering
                                                                                   situation, but Kirby Taylor flew the test missions to ensure the
                                                                                   system worked as well as possible. Early flights immediately
                                                                                   showed that the NET was not adequate for the mission. Gen-
                                                                                   erally, the system could detect rivers, roads, some vehicles,
                                                                                   buildings, and similar larger targets. The FLIR was installed
                                                                                   pointing forward, and the guns were pointed to the left side
                                                                                   of the aircraft, which was not an optimum configuration. Af-
                                                                                   ter about 6 weeks, the aircraft returned to Clark Air Base and
                                                                                   the equipment was removed for return to the U.S.

                                                                                   As would be expected, the official report was critical of the
                                                                                   FLIR’s performance. Pat Haggerty, president and board chair-
Figure 5-1. First flyable FLIR made by TI. It was the first FLIR to be tested on   man of TI, was seated on the prestigious Defense Science
an AC-47 gunship (1965). Right inset shows Kirby Taylor standing beside the        Board and heard the disheartening news as it was briefed.
gunship at Bien Hoa Air Base, Vietnam (Photo Credit: Kirby Taylor [21]).
                                                                                   Haggerty was appalled since the results obviously reflected



5
  The C-47 was the military version of a DC-3 used as transports and later used as AC-47 “Spooky” gunships also nick-named “Puff the Magic Dragon,” after the
popular song by Peter, Paul, and Mary because gunship cannon muzzles produced so much smoke and fire like dragons.


Chapter 5. Vietnam-Era FLIR Development // 5-5
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.




poorly on TI and it eroded his support for further internal        fly the next mission. Promoted to colonel, Jim Krause went
FLIR development. However, other managers, such as Ray             on to become Director of the Air Force Avionics Lab.
McCord, still strongly believed in FLIR technology. McCord
continued to press for resources to finance, for instance,         5.3.2 FLIR Design Progression
critical IR detectors even as skeptical management cut overall
                                                                   FLIR II. The experience gained in these earlier programs
research funding. He was determined to keep it a priority
                                                                   was devoted to developing an improved version of FLIR
even as many in TI were willing to either eliminate or down-
                                                                   using a 15x2 Ge:Hg detector array. In the FLIR II, the NET (per
grade the importance of the IR program.
                                                                   channel) was reduced to approximately 0.4 °C, and the sensor
                                                                   was configured as a bombsight complete with an analog
Despite the FLIR’s poor performance in Vietnam, DoD leader-
                                                                   computer to display the Continuous Computed Impact Point.
ship realized the importance of FLIR technology, particularly
                                                                   The system was installed onto a modified A-26 aircraft, the
as part of the circling gunship concept. They felt that during
                                                                   Lonesome Tiger. Early on it was determined that the sensi-
night missions, having an onboard FLIR to locate and recog-
                                                                   tivity was still lacking, and this shortcoming forced another
nize targets was critical because it would allow the aircraft to
                                                                   modification.
accomplish the mission it was intended for: to attack targets,
especially ground truck convoys, by circling at a constant
                                                                   FLIR IIA. A technically significant improvement to the FLIR
altitude and firing large-caliber guns. Whereas the gunship’s
                                                                   II was a modification often referred to as a “large top hat”
effectiveness was initially thwarted because the enemy hid
                                                                   scanner. The optical scheme provided for a reimaging imager
during the day and moved at night, FLIR technology, much
                                                                   to enable cold shield efficiency improvements, more than
more than flares or low-light-level TV, enabled these aircraft
                                                                   doubling the detector detectivity (D* ) above 2 × 1010. The
to complete missions at night. Therefore, in spite of the Air
                                                                   NET improved to approximately 0.15 °C.
Force’s disappointment with the FLIR lab model, they award-
ed TI a million dollar contract for continued FLIR develop-        Trails and Roads Interdiction Mission (TRIM). The Navy
ment. TI then successfully produced a series of gunship FLIR       was interested in determining a method to eliminate Viet
systems capable of detecting targets at increasing ranges.         Cong logistics along the lines of communication. They
                                                                   devised a weapons system for a Navy P-2V that included
Key DoD supporters backed TI’s efforts, but they also pressed
                                                                   sensors and guns. The TRIM program built four planes to be
for results. In one case, Air Force Major Jim Krause appealed
                                                                   deployed to Vietnam. Two had TI FLIRs and two had HAC
directly to McCord to urge for improved performance.
                                                                   FLIRs. Extensive, in-country testing was conducted, and
McCord, with company support, responded with a commit-
                                                                   those results eventually led to the A-6 TRIM and later A-6
ment to solve remaining problems without additional cost
                                                                   Target Recognition and Attack Multisensor (TRAM) programs.
to the customer. As a result, TI successfully produced a series
of gunship FLIR systems capable of detecting targets at ever       AC-130 Spectre Initial Development. An updated and
longer ranges. Krause, now a lieutenant colonel, went on           modified version of the FLIR II was incorporated into the early
to fly hundreds of missions including those on the newly           AC-130 gunships. Field tests in Southeast Asia demonstrated
introduced and more capable Spectre AC-130 gunships. He            the need for IR capability, but the weapons being used need-
taught new operators and observed performance character-           ed a targeting system with much longer range, narrower FOV,
istics to provide direct feedback to development engineers.        and more sensitivity.
Taylor personally saw him return from a mission on one
plane, jump off, and run to board another outbound plane to



Chapter 5. Vietnam-Era FLIR Development // 5-6
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                DISTRIBUTION STATEMENT A.
                                                                                      Approved for public release; distribution is unlimited.




FL-13. To address the performance requirements learned              Original EO multiplexers incorporated a nonvisible Ga:As LED
from field operations, TI initiated an internal R&D (IRAD or        array that required viewing with a silicon vidicon or other
IR&D) program to configure a new FLIR concept. The general-         vidicon that was sensitive to the 0.9-µm spectral emission of
ly accepted theory was that a “push broom” scanning system          that LED array. Later applications were able to take advan-
using a linear detector array of up to 400 channels was a solu-     tage of newer visible (0.66-µm) LEDs that could be viewed
tion to the issue of sensitivity. The FL-13 design set out to       either directly by an observer or viewed by the EO multiplex-
demonstrate the concept first with a 100x1 focal plane array        er to provide remote displays in standard TV formats.
(FPA) of Ge:Hg detectors cooled by an AD Little (Gifford-
McMahon cycle) cooler. The larger arrays with more mass             The development of large detector arrays and EO multiplex-
and more heat load needed the greater cooling power that            ers together greatly improved FLIR performance but also
this new cooler would provide.                                      simplified their design and improved their producibility.
                                                                    Early FLIRs had only a few detectors and were scanned at
The FL-13 explored the design concept called an “EO multi-          slow rates due to detector bandwidth limitations. Video
plexer” (electro-optical multiplexer). A multiplexer is typically   output rates were too slow for standard displays with high
an electronic circuit that takes multiple input channels and        frame rates. Accordingly, workarounds were used such as
converts them into one serial output channel. So for FLIRS          special CRTs with multiple scan beams so each detector
with multiple detectors, all producing simultaneous outputs         could drive a separate beam. Also, display phosphors with
but from different parts of the image, a multiplexer funnels        slow time constants were used to diminish flicker. Of course,
these separate channels into a single serial stream of video        these FLIRs performed poorly both because of detector and
that can be displayed on a CRT monitor while keeping the            display limitations. However, standard video output could
signal from each detector spatially registered with the scene.      be obtained by using a “scan converter,” which consists of a
The electronics for doing this were quite formidable in this        nonstandard display, as described above, but then looking at
era for many reasons. They included the fact that the band-         it with a standard TV camera. This approach is less than ideal
width of the combined channels, in a serial output, had to be       because more resolution is lost by introducing yet another
higher by a multiple equal to the number of detectors. More-        transfer function, the TV camera, in the chain.
over, the frame rate had to be high to avoid display lag and
image flicker. The sampling and switching circuitry need-           The FL-13 became the first TI FLIR with all-refractive optics,
ed to merge the many channels was also a challenge. An              multiple FOVs, and an EO multiplexed standard TV output
effective way to solve this challenge was to simply convert         signal. Special displays and recording equipment were no
the detector signal to visible light using LEDs. Then, let a TV     longer required. The breadboard system provided two FOVs:
camera look at the parallel image that was output by a scan-        15x20 and 5x7 degrees.
ning line array of detectors across the optical image. Since
                                                                    A-6 TRAM, B-57 Tropic Moon III, AC-130 Spectre Upgrade.
the TV outputs a serial video representation of the detectors’
                                                                    Three new weapon platforms were launched using FLIRs
parallel output, the output can then be viewed on a standard
                                                                    based on the FL-13 concept: the A-6, B-57, and the AC-130
TV monitor. This TV camera was effectively an EO multiplexer.
                                                                    aircraft. Detector arrays of 400x1 and 200x1 Ge:Hg detectors
In the FL-13, a detector array is shown an image reflected off      and AD Little coolers were the baseline. The FLIR systems
a scanning mirror, and a geometrically similar LED array is im-     were the A-6 TRAM, the B-57 Tropic Moon III, and the AC-130
aged off the back side of the same mirror or off a mechanical-      Spectre Gunship. Of these, the Spectre was the most suc-
ly connected mirror, to create a visible image of the IR scene.     cessful and later became a prime weapon using even more
That image, in turn, is optically relayed to the TV camera.         modern components.


Chapter 5. Vietnam-Era FLIR Development // 5-7
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                 DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                            DISTRIBUTION STATEMENT A.
                                                                                  Approved for public release; distribution is unlimited.




To gain the optimum transfer function in the AC-130              and power. The design also incorporated visible LEDs in the
Spectre, an 875-line, rather than the more standard 525-         EO multiplexer to improve reliability and enable the use of
line, closed-circuit TV system was used for EO multiplexer       smaller, simpler, lower-cost TV components.
oversampling. The higher 875-line spatial sampling of the
400-line detector array improved resolution. Eventually, the     The program was successful and more than 200 of the sys-
narrow FOV was reduced to approximately 2° and below 1/6         tems were built for the S-3A Viking. Other users adapted this
milliradian IFOV to further improve overall resolution. AC-      design into various aircraft platforms: Canadian P-3, USAF
130 FLIR (AN/AAD-4, AN/AAD-5, AN/AAD-6, and AN/AAD-7)            Pave Low helicopter, and Combat Talon, along with some
continuous improvements led to the incorporation of MCT          other special mission programs.
detector arrays of 180x1 in AC-130s by 1970/1971.
                                                                 5.4 HAC FLIR DEVELOPMENT
OR-89 AA FLIR. The OR-89 AA FLIR was the first FLIR de-
                                                                 This section is a synopsis of FLIR development at HAC as
signed specifically for an aircraft, the S-3A Viking, and
                                                                 extracted, edited, and condensed from the recollections
the S-3A was the first aircraft designed with a FLIR sensor
                                                                 of Robert Sendall [19]. Sendall, much like his contempo-
planned into the original baseline design. In what was effec-
                                                                 rary Kirby Taylor at TI, was an important participant in FLIR
tively yet another extension of the FL-13 concept, a challenge
                                                                 development. Sendall managed FLIR programs but also had
was taken in this program to reduce the weight of the system
                                                                 a major impact on modeling FLIR performance. His insights
by a factor of two compared to the earlier AC-130 Gunship
                                                                 resulted in design optimization algorithms that showed the
systems. The total package, with all electronics boxes and
                                                                 way to improved system performance including all-import-
gimbals together, had to weigh 234 lb. The steps taken to
                                                                 ant observer effects. Those insights provided the modeling
reduce system weight were significant then because new
                                                                 foundation fundamental to the design of FLIRs well into the
technology was required throughout the system: MCT detec-
                                                                 21st century.
tors, visible LEDs, and a TI-built cooler.
                                                                 In 1964, a HAC IRAD program called an “imaging scanning
The strategy was to reduce the element size of the detector
                                                                 experiment” was started to learn about real-time IR imagery.
array from approximately 75 µm square to 50 µm square.
                                                                 The effort was to put a 56-element PbSe linear array in a
This reduction allowed for reducing the optics focal length
                                                                 Phoenix IRST and use a gimbal scan to scan out four 56-ele-
and diameter to 2/3 of their original values while maintaining
                                                                 ment bars of imagery providing 224 lines of IR imaging data
performance. Reduction of the optics dimensions translated
                                                                 that could be displayed on a memo scope. The system was
to a volume reduction of approximately (2/3)3, or by about
                                                                 sensitive in the 3–5-µm region and generated imagery for
1/3. If the designers used the existing design rules where
                                                                 evaluation. The design was based on NET optimization for
the weight per volume was constant, then the weight would
                                                                 sensitivity and on minimized individual element IFOV for
have been reduced accordingly. Other components did not
                                                                 maximum resolution. It was expected to provide a high-reso-
scale in that exact manner, but they were close enough that
                                                                 lution, low-frame-rate, real-time IR image. But these parame-
the goal of half weight was achieved.
                                                                 ters were incomplete, because, in part, they did not account
                                                                 for the role of human visual processing in the perception of
The new MCT detector arrays required cooling to only 77 K,
                                                                 displayed video information. But, very importantly, this effort
compared to the 28 K required by Ge:Hg detectors. This new
                                                                 provided the beginning of an understanding of what all the
higher temperature allowed TI to design a new cooler to
                                                                 optimization parameters for a real-time IR imaging system
replace the AD Little cryogenics to reduce the size, weight,
                                                                 should be.



Chapter 5. Vietnam-Era FLIR Development // 5-8
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                       DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                  DISTRIBUTION STATEMENT A.
                                                                                                        Approved for public release; distribution is unlimited.




While this system provided cosmetically pleasing images                           committee to investigate the differences and define a new
in an observation deck “roof house” environment, it was                           set of performance parameters for future FLIR specifications.
oversold into the Red Sea flight test program at Eglin AFB                        At the time, NET was commonly used as the measure of sen-
in competition with TI. TI had built the first successful                         sitivity, and IFOV was used to define resolution. It was clear
long-wavelength FLIR by modifying a line scanner with a                           that these practices were not adequate and did not success-
scanning mirror to provide a framing system to generate a                         fully optimize the HAC system.
TV-like image. Clearly, the long-wavelength TI system was
more useful for military applications in Southeast Asia. While                    The original committee met at IDA and was chaired by Bib-
the TI system originally only had a single element of Ge:Hg                       erman, and included such well-known EO sensor experts as
and a single-gun CRT, it soon went to three elements using                        John Johnson from NVL, Richard Lagault from the University
the three-gun structure used in color displays to enable each                     of Michigan TI, Robert Sendall from HAC, and John Jameson
detector to drive a separate gun. Even with those improve-                        from Aerojet. Robert Sendall presented the concepts of Min-
ments, it was clear that more detectors were needed to get                        imum Resolvable Temperature (MRT), a major new concept
significant performance and, at least for experimentation,                        he originated, as well as existing metrics such as Amplitude
TI developed a larger array and made it compatible with a                         Transfer Function (ATF), and Modulation Transfer Function
British Matricon multigun tube displaying the image.                              (MTF) as three important parameters for FLIR optimization
                                                                                  and specification. These functions included the complete
After the Red Sea exercise, HAC applied what was learned                          system and the man-machine interface. The committee
to the development of a high-performance, 8–11.5 µm,                              changed with time but resulted in a recommended FLIR
real-time imaging system and also started on lower-perfor-                        specification document based on those originally presented
mance night sights using 3–5 µm technology.                                       parameters. Those parameters were subsequently optimized
                                                                                  in the HAC Advanced FLIR (AdFLIR), which is discussed in
Engineers assigned to this activity at HAC were well versed in                    Section 5.4.1.
theory and mathematics. Accordingly, they recognized the
importance of cold shielding6 the detectors and the compli-                       5.4.1 The Advanced FLIR (AdFLIR) for the Air Force
cation of the human observer as the interface. They became
                                                                                  In 1965, the first high-performance, two-FOV FLIR was started
familiar with the image evaluation efforts of Otto Schade, Jr.
                                                                                  on IR&D funding and then was completed for the Air Force
[38], Fred Rosell [39], Coltman and Anderson [44], and others.
                                                                                  AdFLIR 698DF contract. In this contract, HAC was competing
HAC engineering efforts led to very high-performance sys-
                                                                                  with Aerojet, which tried to build a similar system. The HAC
tems, but they were very difficult to build.
                                                                                  system used a staggered linear array of 176 Ge:Hg detectors

During one competitive procurement, such an optimized                             cooled to about 28 K. The elements in the array were stag-

HAC FLIR was engaged in a flight test versus a less optimized                     gered to provide space for individual cold shielding of each

Aerojet design, and it led to a major advance in future FLIR                      detector element in addition to a slot shield for the whole

specifications. The fact that the two systems had similar NET                     array. The elements were also spaced apart so they could

and IFOV requirements, but obviously had very different                           be interlaced to provide 352 scan lines per frame. This array

effective performance, led Lucien Biberman of IDA to form a                       was scanned in the horizontal and dithered in the vertical for



6
  The term “cold shielding” refers to placing structured barriers around the detectors so that internal heat radiation cannot fall on the detectors and therefore
reduce their sensitivity. Since all radiation exhibits quantum fluctuations, all radiation falling on the detectors increases the apparent noise output from the
detectors.



Chapter 5. Vietnam-Era FLIR Development // 5-9
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                               DISTRIBUTION STATEMENT A.
                                                                                                     Approved for public release; distribution is unlimited.




interlace at the end of each field to provide an image data                     itation was addressed, the display would appear with visible
rate of 60 fields per second for a frame rate of 30 frames per                  gaps between scan lines. Accordingly, the CRT beam used
second.                                                                         for display had to be vertically dithered at high speed to
                                                                                eliminate the line-to-line gaps and thereby minimize raster
Two different telescopes and scanning systems were used                         line structure.
to provide two different FOVs depending on the position
of a field-switching mirror. The scan was provided for each                     The electronics and special display of this theoretically ideal
telescope by object space scanning with a pair of counter-                      design were very difficult to build. When built in the original
rotating wedge, or risley, germanium (Ge) prisms. If these                      model, this design produced a very clear image, but integrat-
prisms were spun at constant speed, a sinusoidal scan with                      ing it with aircraft was also difficult.
minor distortion (called “dog bone”) resulted. To improve
this scan, elliptical gears were used to reduce the dog bone                    5.4.2 EO Vision System (EVS) FLIR for the Air Force B-52
as much as possible. Two other design challenges of this                        Aircraft
scanning approach were “Narcissus” and “ghosts.” Narcissus
                                                                                Although the EVS B-52 FLIR was the result of an Army request
was the result of the prisms presenting a parallel plate of Ge
                                                                                to equip the proposed Cheyenne attack helicopter, it sur-
to the telescopes when the system was in the center of the
                                                                                prisingly ended up being the first production FLIR and was
scan; the antireflection coatings on the prisms had to be of
                                                                                installed on the B-52 aircraft for the Air Force in 1969. The
high quality to minimize the detectors’ reflection of them-
                                                                                EVS system included both TV and FLIR systems for enhanced,
selves as a cold object in the center of the FOV. Ghosts would
                                                                                low-level penetration with improved obstacle avoidance. It
also result from imperfect antireflection lens coatings which
                                                                                also provided the pilot with a view out of the cockpit if it had
allowed emissions from internal structures and other parts to
                                                                                to be closed for flash protection because of a nuclear event.
reflect onto the detectors.
                                                                                This capability made the flight safer and more effective and
                                                                                provided for some target-area damage assessment. The EVS
The array of detectors was easier to make because of the
                                                                                FLIR was basically the FLIR designed for the Army’s Chey-
spacing and staggering of the elements with individual
                                                                                enne “PINE” FLIR, which had a scan converter to provide a
shields. This design provided effective cold shielding of these
                                                                                standard TV output. This scan converter resulted in a loss of
background limited elements, which led to almost theoret-
                                                                                performance but made the helicopter integration easier and
ical sensitivity. The array and matching preamp multiplex-
                                                                                the imagery was adequate. The FLIR design effort led to a
ing modules were designed around the Dewar and were
                                                                                producible, improved FLIR based on the fundamentals of the
mated with a cryogenic refrigerator in the sensor assembly.
                                                                                AdFLIR. It became the ultimate FLIR using Ge:Hg.
While each detector had limited bandwidth, the output of
the whole detector assembly was a very wide bandwidth,
                                                                                This FLIR had a linear array of 176 Ge:Hg elements7 with
single-video signal generated by sampling and electronically
                                                                                one-element spacing between the elements so that horizon-
multiplexing the electrical signal of each element. Finally,
                                                                                tally scanned fields could be interlaced to form a complete
the output image from two interlaced 176 scan lines only
                                                                                frame of 352 lines. Cold shielding was still paramount to the
produced 352 display lines compared to standard displays of
                                                                                design and was accomplished using reimaging optics so that
the time which presented 485 active lines. So, unless this lim-
                                                                                an optical exit pupil8 could be located inside the Dewar and


7
  Sendall reported that he may be wrong about the final number of elements in the array after iterations.
8
  Optical exit pupils allow the placement of mechanical “stops” around the pupil to intercept internal heat emissions and prevent them from falling on the
detectors. If the stops are cold, they absorb but cannot effectively re-emit.


Chapter 5. Vietnam-Era FLIR Development // 5-10
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                             DISTRIBUTION STATEMENT A.
                                                                                   Approved for public release; distribution is unlimited.




stopped with a cold stop. The optics could therefore be rath-     cooling to only 77 K instead of 28 K, offered almost any spec-
er slow (i.e., high f-number) and include a scanning mirror       tral band out to and beyond 14 µm, and had fast temporal
in the converging beam to eliminate the prisms. (Scanning         response. DARPA funding continued throughout this period
generally should be done with parallel rather than converg-       although they were skeptical of eventual success. A DARPA
ing light since the latter results in a curved image plane, but   executive said, “HgCdTe was the detector of the future and
high f-numbers mitigate the curvature.) The array was still       it always would be.” However, in the late 1960s, arrays were
electronically multiplexed as it was scanned horizontally, but    being successfully produced.
now interlace was simple and, because the exit pupil was
inside the Dewar with a cold stop, there was no need to stag-     HAC engineers now saw the possibility of building TV-com-
ger the detectors to allow space for individual cold shields.     patible systems by scanning a linear array of elements over
These characteristics simplified the system, but the EVS FLIR     the FOV with the elements in series rather than in parallel.
still required a special (nonstandard TV) display that could      The line of elements was horizontal and was scanned in
move the CRT beam quickly in the vertical since the display       the direction of a horizontal line. Since each detector was
scan was fast in that direction (to keep up with vertical mul-    looking at a different part of the scene, but all detectors
tiplexing) and slower in the horizontal scan direction. It also   were scanning in the same direction, their outputs could be
required a good broadband video amplifier to prevent loss of      merged by using time delay and integration (TDI). This merg-
vertical MTF. The resulting display looked like a normal 2-1      ing resulted in improved sensitivity since the signals would
TV raster scan but it was not. There were over 300 systems        add linearly while the independent noise would only add
originally built and, with spares, over 400.                      as the square root. Moreover, image uniformity was greatly
                                                                  improved, and there was no longer any need to balance de-
5.4.3 The Discoid Serial Scan FLIR                                tector channel outputs since all the channels were summed
                                                                  together anyway. This FLIR design approach was called a “dis-
Toward the end of the 1960s, HAC was looking ahead for
                                                                  coid” design after the type of two-mirror object-space optical
new design concepts besides those based on Ge:Hg. The
                                                                  scanner used to produce a raster scan at TV rates.
B-52 FLIR and others revealed the disadvantages of having a
nonstandard TV display format. In the mid-1960s, HAC was          Because of the strongly desired standard TV output format
impressed with the Swedish AGA Vision 3–5 µm imaging              for many applications, HAC applied the discoid concept to
system. The design was very well analyzed and built. It pro-      all FLIR applications. Unfortunately, the approach had many
vided clear and uniform images, especially for a mid wave-        limitations and inefficiencies. An important limitation was
length system. However, it was not possible to build such a       the inability to add more than a few dozen detectors to the
system sensitive in the 8–11.5 µm region because the Ge:Hg        focal plane array due to scanning geometry limitations.
detectors did not have the necessary frequency response,          Moreover, for many Army applications, a TV format provid-
and the desired performance required a significant number         ed no advantage. Indeed, the direct-viewing of scanned
of detectors. A solution was found with the development of        LEDs, as had been used in the many experimental night
new detectors.                                                    sight systems HAC built for NVL, was better suited to these
                                                                  applications. Also, the possibility of using an EO multiplexor,
The development of MCT detectors (discussed in Section
                                                                  even with the inherent loss of performance, supported the
4.5) continued throughout the 1960s. They provided a vast
                                                                  parallel-scanned common modules. Nevertheless, the serial
improvement over Ge:Hg detectors because they required




Chapter 5. Vietnam-Era FLIR Development // 5-11
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                 DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                            DISTRIBUTION STATEMENT A.
                                                                  Approved for public release; distribution is unlimited.




scan system was easier to build for moderate performance
applications and was easy to make more compact. More of
the systems would have been built except for the decision to
adopt the parallel-scan common modules as the FLIR for all
government applications. While the HAC discoid FLIR design
did not become the basis for the FLIR common modules,
the concept of using TDI was ultimately adopted for second
generation (GEN2) scanning FLIRs.

5.5 SUMMARY OF VIETNAM-ERA FLIR DEVELOPMENTS

The combined demands of the Cold War and the Vietnam
War motivated the invention of FLIRs. They were needed in
the Cold War for strategic bombers to provide night vision
for both low-altitude, under-the-radar navigation and for
navigation with shuttered windshields used to prevent flash
blindness from nuclear explosions. They were needed in the
Vietnam War for night targeting of enemy ground forces. Key
prior developments in detectors, scanning systems, cryogen-
ics, electronics, and the understanding of observer impact
on system performance provided the technology for FLIRs
to emerge. However, it was the close working relationships,
sometimes contentious, among industry engineers, their
management, government organizations, and the military
users that brought it all together. These FLIRs were fledgling
devices that were custom-made and expensive. Chapter 6
discusses the ongoing relationships that initially enabled suc-
cessful FLIR development and how they were instrumental
in creating the so-called “first generation” (GEN1) FLIR, which
it actually was not, but it was the first series of FLIRs mass
produced from standard components.




Chapter 5. Vietnam-Era FLIR Development // 5-12
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                DISTRIBUTION STATEMENT A.
                                                                                      Approved for public release; distribution is unlimited.




CHAPTER 6. GEN1                                                    or exited when they failed to capture sufficient government
                                                                   support.
COMMON MODULE FLIR
                                                                   Other major players came from DoD agencies, Federally
6.1 INTRODUCTION                                                   Funded Research and Development Centers (FFRDCs), and
                                                                   universities. DoD agencies included ARPA (later renamed
In the late 1960s and early 1970s, linear arrays of intrinsic
                                                                   DARPA), NRL, AFAL, and NVL (later renamed NVESD). FFRDCs
MCT photoconductive detectors were developed and even-
                                                                   and academic organizations included IDA and the Henry
tually became producible. These detectors allowed LWIR FLIR
                                                                   Levinstein group at Syracuse University funded by the Air
systems to operate at 80 K with a single-stage cryoengine,
                                                                   Force. Still other nonindustry groups made significant contri-
making them much more compact, lighter, and significantly
                                                                   butions as well.
lower in power consumption. As a result, in the 1970s, IR
applications greatly increased and a strategy for high-volume
                                                                   Much of this chapter comes from manuscripts provided by
production was needed for this “first generation” of IR sensor
                                                                   Kirby Taylor, whose important role in FLIR development was
systems. Many innovative approaches had been applied
                                                                   described in earlier chapters, and by Charles Hanson [45].
to FLIR designs including parallel, serial, and parallel-serial.
                                                                   Hanson was employed by the U.S. Army NVL during this era
But parallel was the most compatible with existing detector
                                                                   and was the Contracting Officer’s Technical Representative
technology and support electronics. Many essentially similar
                                                                   (COTR) for several night vision programs. In this role, he
parallel FLIR designs were built and fielded. However, stan-
                                                                   could directly observe, and in some cases influence, some
dardization was needed for affordability. Accordingly, a set
                                                                   of the important events leading to the development and
of modules evolved that did not come from new technology
                                                                   procurement of FLIR common modules. Finally, co-author
per se but, instead, largely codified the existing first gener-
                                                                   David Schmieder contributes his insights from his experience
ation of technology in the form of common building blocks
                                                                   at Martin Marietta, now Lockheed Martin, as a member of the
that became known as “generation 1” or simply “GEN1” FLIRs.
                                                                   team that developed a common module second-source sup-
                                                                   ply capability and as lead author of the FLIR Common Module
This chapter describes GEN1 FLIR emergence from suppos-
                                                                   Design Manual [46].
edly existing technology developments. However, as this
history shows, while that technology may have been largely
                                                                   6.2 VIETNAM-ERA CONTRIBUTIONS [45]
existing, the need for commonality for cost reduction still
required much innovation, especially on the part of sec-           By the mid-to-late 1960s, the Vietnam War began to show
ond-source suppliers who did not have access to the propri-        the worth of MWIR and LWIR sensors for airborne night
etary technology of earlier developers. These suppliers often      interdiction. As a result, the Army began to step up sensor
had to reinvent either the same, or come up with different         development in these devices for ground and lower-altitude
approaches, while still being compatible with rigid interface      airborne applications. They developed plans to accelerate
control specifications.                                            development of multiple night vision devices for Vietnam de-
                                                                   ployment within 2 years. The program, Southeast Asia Night
During the 1970s, the principal FLIR industry players were         Operations (SEA NITEOPS), began in mid-1967 with a budget
Honeywell, HAC, SBRC, and TI. Others that became involved          of about $6 million. By 1968 its budget had increased to $20
later included Aerojet, AVCO, Fermionics, Ford Aerospace,          million. It not only made significant military contributions
General Dynamics, GE, ITT, Martin Marietta, McDonnell              with little actual hardware, but it provided valuable informa-
Douglas, New England Research, HRB Singer, and Rockwell.           tion to guide future developments. In particular, the pro-
Few flourished in this business and either merged, spun off,       gram established the role of the FLIR.

Chapter 6. GEN1 Common Module FLIR // 6-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                        DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                   DISTRIBUTION STATEMENT A.
                                                                                         Approved for public release; distribution is unlimited.



Experimental FLIR systems were built to address the require-
ments of Army man portable and armored vehicle systems.
Most included parallel scanning schemes of up to 120 linear
detector arrays. EO multiplexers (i.e., TV cameras) were used
and electronic multiplexers were also designed. But the elec-
tronic multiplexing components of that period (1969−1975)
were marginal for the data rates, and scan converters
required to produce TV-compatible signals were relatively
large. An exception to this situation was a missile seeker
program that employed 60 channels and scanned vertically.
This development eliminated the need for a scan converter
since the 60-channel data rates were within the multiplexer
capabilities of the day. These early systems were eventually
replaced by FLIRs based on common modules.

6.3 EARLY NVL DEVELOPMENT ACTIVITIES [45]
                                                                    Figure 6-1. The HHTV, AN/PAS-7 (Source: U.S. Army).
Army FLIR involvement began with the development of
thermal-imaging sensors of modest performance for ground-
based applications. By 1971 the need for FLIRs was clearly
established because of their advantages over image intensi-
fiers and active LLTVs. While the Air Force interest was driven
by the need for remotely viewed, high-performance, airborne
FLIRs, Army interest was for larger quantities of directly
viewed, shorter-range, hand-held and vehicle-mounted
FLIRs. For example, in the early 1970s, the Phillips Broadcast
Equipment Company (later Magnavox) developed the Hand-
held Thermal Viewer (HHTV), funded by NVL. The system
used a 48-element, parallel-scanned, photoconductive PbSe
MWIR detector array with 5-mil pixels, produced by Opto-
Electronics of Petaluma, CA, later acquired by Textron. The         Figure 6-2. The AN/PAS-7 display (Source: U.S. Army).
detector was cooled with a four-stage thermoelectric (TE)
cooler developed by Marlow Industries in Garland, TX. It was        The technology developed under the HHTV program pro-
scanned at low frequency, about 15 frames per sec, with-            vided the foundation for the Dragon Thermal Sight, which
out interlace. The scanner was bidirectional, and there was         was a fire-control system for the Dragon missile. It used a
considerable flicker at the extremities owing to the low scan       64-element, parallel-scanned PbSe array, also cooled with a
frequency. The IR optics were ƒ-1.0 with a 2.5-in. aperture,        four-stage TE cooler. The Advanced Production Engineering
giving an IFOV of 2.0 milliradians. The system, officially desig-   (APE) program was funded by the U.S. Army Missile Com-
nated “Viewer, Infrared AN/PAS-7” (Figure 6-1), weighed 6.5 lb      mand at Redstone Arsenal, AL, and managed by NVL. The
without the battery and almost 12 lb with the belt-mounted          APE program was completed, but the follow-on, low-rate
battery and connecting cable. The display was a small CRT,          initial production was never begun because of the promising
and a photograph of the display imagery is shown in Figure 6-2.     technology of the Common Module program.

Chapter 6. GEN1 Common Module FLIR // 6-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                               DISTRIBUTION STATEMENT A.
                                                                                     Approved for public release; distribution is unlimited.


6.4 EMERGENCE OF COMMON MODULES                                    affecting the sensor’s mission performance. Such a common-
                                                                   ality would not only make custom design and development
The emergence of common modules is largely the result of
                                                                   unnecessary, it would also decrease the time committed from
the efforts of both TI and the U.S. Army NVL. Specifically, TI’s
                                                                   inception to availability, make volume production possible,
design approach and advocacy were key to common mod-
                                                                   and greatly reduce the cost. However, to be effective, such a
ule development. In addition, various DoD organizations,
                                                                   concept had to be endorsed by all three military services.
including the service branches, strongly pressured industry
to create lower-cost approaches. Moreover, strong gov-             Even though the Common Module FLIR required significant
ernment leadership was essential in creating an acceptable         changes to TI’s designs and caused much worry that a com-
tri-service solution so that maximum economies of scale            mon module approach would commoditize the business, the
could be achieved. As expected, the perspectives of TI and         company adopted the concept as the central theme of its
NVL witnesses about the development of common modules              IR strategy. In November 1972, TI began to build prototype
differ. Neither is an unbiased observer. Their differences are     common modules.
probably accentuated by fading memories of events, and
especially dates, from that era. Nevertheless, to provide the      In early 1973, all three military service chiefs declared sup-
best historical treatment, the history of that critical time is    port of the common module concept, and TI began to win
presented from the vantage point of a key witness inside           development programs using common module designs. The
each organization, i.e., Kirby Taylor from TI and Charles Han-     concept became an official standard in 1976. Competitive
son from NVL.                                                      technologies didn’t recede easily, and TI was also involved in
                                                                   competitive developments for a number of programs, most
6.4.1 TI Common Module Development Perspective                     notably the tube-launched, optically tracked, wire-guided
After the Vietnam War, DoD planners acknowledged the               (TOW) missile launcher sight (Figure 6-3). Pressure also grew
power of the FLIR system, but were wary of its relatively          to develop second sources for the modules even though TI
high cost. In March 1972, TI received a letter from the ARPA       developed much of the common module technology on its
director explaining that the DoD could no longer afford the        own. A second-source award was made in 1980.
FLIR system and asked why each unit cost several hundred
                                                                   TI’s determination to stick to a strategy based more on
thousand dollars. TI explained the enormous development
                                                                   economics than technical wizardry paid great dividends. The
costs required to make FLIR an integral and effective part of
                                                                   company regained businesses they originally lost. They won
each gunship mission, but the DoD still considered the cost
                                                                   production of the TOW sight, the M-60A3 Tank Thermal Sight,
of FLIRs too high.
                                                                   the Bradley Fighting Vehicle sight, the M1A2 tank gunner
TI recognized that FLIR had become a major financial success       and driver sights, and many others. The F-117 stealth fighter
for the company, and it did not want to lose a system it           fire-control system was built around a TI Common Module
invented to a growing number of competitors. After a thor-         FLIR. All of these systems were used in Operation Desert
ough analysis, TI concluded that each FLIR application had         Storm and the subsequent Gulf War. The Federal Republic of
its own unique set of requirements. Since 1964, TI produced        Germany, Taiwan, South Korea, and Denmark also adopted
385 FLIR systems with 55 different applications, and the pro-      TI Common Module FLIR systems for use on their armored
duction rates of each configuration were too low to achieve        vehicles.
any economies of scale. Therefore, TI began to develop a
                                                                   Previously, because of the FLIR’s high cost, TI had only
Common Module FLIR concept. The concept was based
                                                                   received orders for tens of the systems each year. However,
on the premise that certain functions of an IR sensor were
                                                                   after introducing the Common Module FLIR, TI marketed
not mission specific and could be made universal without

Chapter 6. GEN1 Common Module FLIR // 6-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                      DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                 DISTRIBUTION STATEMENT A.
                                                                                       Approved for public release; distribution is unlimited.


                                                                     but each pixel saw a given point at a slightly different time
                                                                     from the others. By appropriately delaying the signals from
                                                                     the pixels using analog delay lines—a process known as
                                                                     TDI—the signals could be summed to improve the signal-
                                                                     to-noise ratio. While each pixel dwelt only a very short time
                                                                     over a given scene point, summing the signals from a line
                                                                     of pixels effectively increased the dwell time. The unidirec-
                                                                     tional scan with blank retrace directly mimicked standard TV
                                                                     CRT display scanning. However, it required an exceptionally
                                                                     high mirror scan rate, approximately 60,000 rpm, to match
                                                                     the CRT’s electron-beam scan rate, and that raised reliability
                                                                     issues. However, the HAC project emphasized the elegance
Figure 6-3. TI Common Module FLIR-equipped TOW sight (Source: TI).   of the direct interface with a CRT, as a featured part of its
                                                                     cost-reduction approach.
thousands of systems a year. As the price sharply decreased,
                                                                     TI’s approach was very different from that of HAC (Figure 6-5).
orders dramatically increased, and by 1998, TI had produced
                                                                     It included a detector array with a single vertical column of
more than 30,000 FLIR systems.
                                                                     pixels. The array was scanned horizontally at relatively low
Many are convinced that the company’s commitment to IR               speed with a simple mirror, which produced a unidirection-
technology—even when the odds were less than favorable—              al scan with a rapid retrace. The mirror could be vertically
ultimately furnished the U.S. Armed Forces with a distinct           dithered on alternate scans to provide for interlace to effec-
military advantage. FLIR allowed them to see through the             tively fill the gaps between pixels. An LED array of the same
darkness and own the night.                                          configuration as the detector array produced a visual image
                                                                     using the backside of the scan mirror. The detector came
6.4.2 NVL Common Module Development Perspective                      in three configurations, 180x1, 120x1, and 60x1, to provide
                                                                     options for matching performance or cost requirements. The
NVL, like TI, also addressed the FLIR’s prohibitive costs and
                                                                     electronics module was modularized in the same way so that
formed a common module study team to find a way to sig-
                                                                     the number of electronics channels could be matched to the
nificantly reduce their cost. The NVL common module study
                                                                     number of pixels.
team developed the Universal Viewer concept to standardize
subsystems and their interfaces. TI and HAC competed to de-          Concurrently, with the development of the modules, NVL
fine modular concepts, develop the modular subsystems, and           awarded parallel contracts to TI and HAC to develop ther-
build prototypical systems to demonstrate design flexibility,        mal-imaging sights for the TOW missile. TI developed around
performance, and maintainability.                                    its modules, and HAC developed around the serial-scan ap-
                                                                     proach. The HAC system produced the more pleasing image
HAC, working more independently from NVL, adopted a
                                                                     because the process of summing all detector outputs togeth-
novel serial-scan concept they had developed earlier. The
                                                                     er eliminated detector nonuniformity effects. The elements
implementation of the HAC system was similar, conceptually,
                                                                     of the HAC TDI array were spaced far enough apart that each
to the FLIR shown in Figure 6-4. The concept used a row of
                                                                     pixel had its own cold shield, which made the elements more
detectors having approximately 26 elements in the horizon-
                                                                     sensitive than those in the TI parallel-scanned array where all
tal direction. (Only four are illustrated in the figure.) All the
                                                                     detectors shared one long cold shield.
pixels in a given row scanned the same portion of the scene,


Chapter 6. GEN1 Common Module FLIR // 6-4
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                              DISTRIBUTION STATEMENT A.
                                                                                                    Approved for public release; distribution is unlimited.



                                                                               printed circuit boards (PCBs) for packaging purposes. The
                                                                               cooler and mechanical scanner made up the two mechanical
                                                                               modules. The optical modules were the IR imager and the
                                                                               visual collimator. The detector/Dewar combination was a sin-
                                                                               gle module which converted IR light into an electrical signal.
                                                                               The LED array module converted detector electrical output
                                                                               into visible light. The five electrical modules were mounted
                                                                               on PCBs and included the DC/AC converter module to supply
                                                                               power to the cooler, the scan and interlace controller for the

Figure 6-4. Serial-scan FLIR concept of operation.
                                                                               scanner, the bias regulator for the detectors, and the detector
                                                                               signal preamplifier and postamplifier modules. Sometimes
                                                                               there was an additional PCB which drove the LED array unless
                                                                               that function was combined with the postamplifier module.
                                                                               There was also an EO multiplexer TV camera, which was not
                                                                               generally considered one of the common modules but was
                                                                               essential when remote viewing was required such as for
                                                                               aircraft cockpit mounted displays. Of course all common
                                                                               module FLIR required a power supply but that was not a
                                                                               common module because the different tailoring options had
Figure 6-5. Parallel-scan FLIR concept of operation (Source: D. Schmieder).    different power needs. A brief description of each module
                                                                               follows Figure 6-6. Figure 6-7 shows the layout of a typical
However, the larger number of detectors in the TI array cou-                   common module system.
pled with its lower noise bandwidth resulted in superior per-
formance. The greater flexibility offered by the TI approach
due to its robust, well-conceived modularity, increased its
favorability. The Army NVL led the decision process, which
probably had some bearing on the choice of the TI solution,
as that solution was more favorable to man-portable and
ground-vehicle applications, but less favorable to airborne
applications requiring CRT displays.

6.4.3 Common Modules Description [46]

The common modules pictured in Figure 6-6 consisted of
two mechanical modules, two optical modules, a detector/
Dewar array, an LED array, and at least five electrical mod-
                                                                               Figure 6-6. Set of common modules for man-portable FLIR configurations9
ules. There could have been more electrical modules if some                    [46].
electrical functions were removed and mounted on separate


9
  The item immediately below the scanner is an optical relay for the eyepiece for the TOW missile application, and it was not considered one of the com-
mon modules. The two unlabeled printed circuit boards (PCBs) were for TOW and may have been common modules at some point if some functions were
removed from the other PCBs and mounted separately.


Chapter 6. GEN1 Common Module FLIR // 6-5
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                       DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                  DISTRIBUTION STATEMENT A.
                                                                                        Approved for public release; distribution is unlimited.




a)   IR Imager. Formed an image of the scene on the detec-               module contained 20 channels, and up to a maximum
     tor array. It was almost always used with one or more               of nine modules might be needed. The module accept-
     system-specific telescopes (afocal lens assemblies) to tai-         ed inputs from the auxiliary control module to control
     lor the FLIR’s magnification and FOV to the application.            contrast, blanking, and brightness. Importantly, it also

b) Scanner. Consisted of a two-axis gimbal and housing                   provided an adjustment for changing individual chan-

     assembly. The inner gimbal was a two-sided mirror that              nel gain to achieve a uniform display. As an option, it

     simultaneously scanned the infrared image across the                sometimes was also equipped to drive the LED array as

     detector array and the corresponding LED visible output             an alternate to a separate LED driver module.

     image for display. The outer axis allowed the mirror to        h) LED Array. Converted detector electrical signal to visible
     tilt after each field to provide for interlace. A system-           light using GaAsP diodes arranged in a format match-
     specific phase shift lens was also mounted on the outer             ing the IR detector array. It was normally driven by the
     gimbal so that, when light passed through it, it would              postamplifier/ control driver module but may have had a
     shift the image slightly during field retrace to prevent            separate driver module for that purpose.
     electronic phase shift from causing a mismatch between         i)   Visual Collimator. Collimated the emitted LED light.
     the two optical fields in a frame.                                  Since rays coming from the LEDs were diverging, they
c)   Scan and Interlace Controller. Drove the scan torque                needed to be made parallel (i.e., collimated) to be
     motor by providing scan mirror frequency and position               viewed by an observer. The visual collimator was usually
     servo control. It also drove the outer gimbal tilt solenoid,        followed by system-specific relay and eyepiece optics to
     provided video gate signals, and accepted synchroniza-              properly locate the image for observer access, diopter
     tion signals when used with an EO multiplexer.                      adjustment, and exit pupil size.

d) Detector/Dewar. Contained up to 180 photoconductive              Auxiliary Control Module. Provided an interface
     MCT detectors in a linear array sensitive to the 7.5−          between the external system control panel and the
     12 µm spectral region. Detectors could be tailored in          postamplifier module for contrast, brightness, and
     groups of 60, 120, or 180 to match the application. The        blanking. It also provided regulated supply voltages
     Dewar provided an insulated enclosure with a 75° cold          to the postamplifier module.
     shield cone angle.

e)   Bias Regulator. Supplied regulated bias current to the
     detectors, which were photoconductive, so their signal
     needed to be measured by sensing the change in resis-
     tance to the bias current caused by the incident photons.

f)   Preamplifier. Amplified the low-level signals coming
     from the low-impedance photoconductive detectors.
     Each module contained 20 parallel amplifier channels.
     Modules were added in parallel to match the number of
     detectors up to a maximum of nine for 180 channels.

g) Postamplifier (sometimes called Postamplifier/Con-
     trol Driver). Amplified the signals from the preampli-         Figure 6-7. Typical layout for a common module FLIR [46].
     fiers for input to the LEDs. Like the preamplifiers, each



Chapter 6. GEN1 Common Module FLIR // 6-6
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                             DISTRIBUTION STATEMENT A.
                                                                                   Approved for public release; distribution is unlimited.




Because TI would not sell the common modules to com-              Joint Services Development Plan for thermal imaging, and it
petitors, alternative sources for the FLIR common modules         included all ongoing and planned requirements.
submitted proposals and were awarded contracts. Martin
Marietta in Orlando, FL, received a contract for most of the      Because common modules had been developed under the
modules, including the electronics, optics, cooler, and scan-     guidance of NVL (an Army entity), there were aspects of the
ner. Honeywell in Lexington, MA, received a contract for the      modules that weren’t applicable to their use by the other
detector arrays, and Spectronics in Richardson, TX, received a    services. For example, in the use of the common modules for
contract for the LED array. Later, HAC developed the detector     airborne gimbaled systems, system requirements included
modules and LED array, at least partially on their own. Also,     minimal weight on the gimbal, but the modules were not
Magnavox became an alternate source for the cooler.               designed to be separated from one another. Separation
                                                                  would have allowed some components to be removed from
The availability of common modules increased the number           the gimbal thus reducing gimbal weight and size. In addi-
of suppliers of military thermal-imaging equipment. Martin        tion, the development of the “split-cycle” Stirling cryogenic
Marietta became a supplier, as did Kollsman, winning a sub-       cooler was maturing, and that provided a better solution for
stantial portion of the AN/TAS-4 TOW Night Sight production       applications in which the sensor head had to fit into a small
business. However, TI, HAC, and Honeywell continued in the        volume. It was better because the split-cycle cooler design
thermal-imaging business.                                         removed the bulky (and vibrating) compressor stage from
                                                                  the expansion valve/cold-finger so that only the latter need-
Keeping the common modules “common” was a manage-                 ed to be next to the detector array and on the gimbal.
ment challenge. Although all the companies producing
modules began with the same data package, many of the             Even within the Army there were difficulties. One of the dif-
modules also contained information proprietary to TI. The         ficulties was the generally understood independence of the
new sources had to use their own proprietary technological        project managers (PMs) within the services. They had long
expertise to manufacture such items as the detector, Dewar,       held to the understanding that their role was to look after the
cooler, and LED array. This situation resulted in differences     best interests of their office and their service branch. The co-
among modules manufactured by the various sources.                ordination policy was in direct conflict with that long-stand-
However, at least initially, the differences were not apparent    ing practice. In addition to that, each contractor, looking for
to system developers or to end users. NVL led configuration       a competitive advantage, found ways to improve upon the
control.                                                          original designs. There was a lot of pressure from contractors
                                                                  to implement proprietary features that would secure them
A larger problem was the enforcement of the use of the            future business on a given platform.
common modules for new system developments. On
19 June 1973 the Joint Logistics Commanders (JLC) signed          An important example of the diversification in the com-
a charter to establish a Joint Technical Coordinating Group       mon modules was the XM-1 development, which led to the
(JTCG) for thermal-imaging systems. Its purpose was to study      M1, the Army’s main battle tank. It was developed under a
tri-Service coordination of R&D, procurement, and logistics.      policy that gave the prime contractor full responsibility for
As a result, the JLC agreed to a tri-Service policy to use the    all subsystems. That policy was designed for enforceable
common modules wherever possible, with NVL having re-             accountability, but it violated the tri-Services agreement
sponsibility for configuration control across the services. The   regarding use of the common modules. Up to this point, the
charter became effective 15 July 1974. The JTCG prepared a        Army Materiel Command (AMC) leadership had supported



Chapter 6. GEN1 Common Module FLIR // 6-7
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                             DISTRIBUTION STATEMENT A.
                                                                                   Approved for public release; distribution is unlimited.




NVL in its role of configuration control, but it was AMC that     As a result of all these factors, schedule and cost concerns of
chartered the XM-1 PM to procure under the “prime contrac-        major systems overrode the configuration control process.
tor responsible” policy. As a result, the M1 thermal-imaging
system differed from the common modules in regard to the          Nevertheless, the Common Module program and the mod-
detector, LED, visible collimator, bias board, and postamplifi-   ules themselves have to be considered a major success. Tens
er modules.                                                       of thousands of FLIR systems were delivered at costs and
                                                                  production rates that could not have been realized without
A Joint Operating Agreement and associated procedures             the common modules. Not only was acquisition cost re-
were drafted in 1977. The agreement designated a tri-Service      duced, but also the cost of ownership. However, the conflict
Configuration Control Board (CCB) with the Army as chair and      between innovation and commonality eventually ended the
the Director of NVL as the Thermal Imaging System Common          Common Module era.
Module PM. According to the agreement, each service would
have its own CCB to establish the position for that service       6.5 COMMON MODULE DETECTOR EVOLUTION [46]
prior to submission of any configuration change. PMs in the
                                                                  Detectors for the common modules were the most important
services were charged with developing procedures and for
                                                                  components of the FLIRs and the most difficult to fabricate.
providing representation for the tri-Service CCB. This step
                                                                  The detector modules employed photoconductive linear
required the Air Force and Navy to provide partial funding
                                                                  arrays of thin MCT sheets epoxied to sapphire carriers and
to the Army for managing configuration control, which they
                                                                  delineated into individual detector elements. After fabrica-
were reluctant to do, and which resulted in the new process
                                                                  tion, the easier step was to mount the resulting line arrays of
never being implemented. Instead, the three services con-
                                                                  60, 120, or 160 detectors onto a glass stem of a Dewar where
tinued operating under the 1974 guidelines, under which the
                                                                  leads were brought to the vacuum interface/connector on
Director of NVL served as the configuration manager, the CCB
                                                                  gold traces that were laser scribed on the stem. Laser-
was an Army-only approval authority, and the Army ultimate-
                                                                  trimmed bias resistors were located outside the Dewar to
ly provided only data and guidance to the PMs under the Air
                                                                  equalize gain on the detectors across the array. The Stirling
Force and Navy.
                                                                  cycle expander shaft of the cryocooler was inserted in the
                                                                  hollow stem to cool the detector array to LN2 temperature.
NVL personnel were specifically assigned to support each
major system PM. However, NVL was not separately funded
                                                                  As with many new technologies, MCT detectors were thrust
to support configuration management, depending instead
                                                                  into production too early, and so a crash manufacturing tech-
on funding from the PMs. NVL support was generally viewed
                                                                  nology effort was initiated to get yields to the point where
favorably by the PMs, but the independence of prime con-
                                                                  newly minted tanks and aircraft would have FLIRs to fill the
tractors conflicted with NVL’s configuration control authority.
                                                                  hole in the skin. Through this period, some stakeholders
Often change requests were submitted hurriedly because of
                                                                  continued to support extrinsic Hg technology in spite of the
program schedule requirements, and justifications were inad-
                                                                  significantly lower operating temperatures, with the rationale
equately substantiated. Delays, perceived to be bureaucratic,
                                                                  that “MCT is the technology for the future… and always will
were not tolerable to the PMs, some of whom were senior
                                                                  be” and “HCT stands for high-cost technology.” Although
military officers. There was also no preplanned product
                                                                  MCT was a dangerous and thermodynamically unstable
improvement (P3I) program in place to accommodate the
                                                                  material, it was an essential part of common module detector
progress necessary to satisfy evolving needs, although the
                                                                  development.
expanding industrial base continued to evolve the technology.



Chapter 6. GEN1 Common Module FLIR // 6-8
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                             DISTRIBUTION STATEMENT A.
                                                                                   Approved for public release; distribution is unlimited.




6.6 SUMMARY OF GEN1/COMMON MODULE HISTORY                         It is estimated that the common modules effort brought
                                                                  down the cost of scanning thermal imagers from around
The success of IR detection, first in surveillance and later in
                                                                  $250,000 to about $50,000. TI licensed the technology to
fire control, led to a widespread demand for FLIRs and an
                                                                  AIM in Germany, which continued to be a supplier well past
approach to their affordability. TI recognized from their many
                                                                  2010. As U.S. allies and non-allied forces acquired ther-
customized parallel scan designs that most of the compo-
                                                                  mal-imaging capabilities, the U.S. advantage diminished.
nents were similar and that standardization was not only
                                                                  The need to keep ahead of the threat and the emergence of
possible but desirable to maintain an advantageous business
                                                                  new microelectronics capabilities led to the development of
posture in a competitive business. The design simplicity,
                                                                  a second generation (GEN2) of FLIRs based on GEN2 detec-
manufacturability, and elegance of the TI approach as well
                                                                  tors formatted into focal-plane arrays (FPAs). Their history is
as its greater sensitivity won out in a competitive procure-
                                                                  described in Chapter 7.
ment. That procurement award decision was dominated by
field performance test results on the Army’s TOW ground-
to-ground missile guidance unit. TI was understandably
reluctant to share their technology but, in order to obtain
true cost reduction, the Army recognized there had to be
competition for the module assemblies. The Army therefore
wrote specifications for the various modules and competed
procurements. Competitors were not required to mimic TI
designs because that would have infringed on TI proprietary
information. However, they did have to meet performance,
form, and fit specifications of the TI modules in order to
qualify. The success of the Common Module program can be
attributed to both the design concept and the management
of the program.

“Mod FLIRs,” as they were sometimes called, quickly demon-
strated their worth in combat. The common module invest-
ment paid off during Operation Desert Storm, the Gulf war
fought to eject Iraqi forces from Kuwait. Mod FLIRs on front-
line weapon platforms such as the F-117 stealth bomber,
the F-15 and F-16 strike fighters, the Apache helicopter, the
M1 Abrams tank, the M2 Bradley APC, and the TOW missile
launcher played a critical role in the successful operations
against Iraq’s infrastructure and its armored and mechanized
units. The LWIR FLIRs gave U.S. pilots and gunners the edge
as they found and attacked targets not only at night, but,
because of their long wavelength obscurant penetration
capability, they also were able to attack through burning oil
clouds, battlefield smoke, and blowing sand.




Chapter 6. GEN1 Common Module FLIR // 6-9
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                               DISTRIBUTION STATEMENT A.
                                                                                                     Approved for public release; distribution is unlimited.




CHAPTER 7. GEN210                                                               essential tool on the modern battlefield and no military could
                                                                                compete without them. It was also obvious to many that, as
FLIR: READ-OUT                                                                  with any technology, the current status of FLIRs was subject

INTEGRATED CIRCUIT                                                              to the inevitable changes of technological progress.


(ROIC) INVENTION AND                                                            Accordingly, at least two motivational trends were develop-
                                                                                ing. First, the fact that other countries could see the advan-
SELF-SCANNED FPAS                                                               tage of having FLIR-enabled night operations and wanted it
                                                                                for their militaries, put pressure on the United States to main-
7.1 INTRODUCTION11
                                                                                tain its technological edge. Secondly, progress in microelec-
Chapters 7, 8, and 9 address the development of GEN2 FLIRs                      tronics was evolving rapidly and was impacting the design
as follows:                                                                     and application of existing military and civilian electronic
                                                                                devices. Moreover, they offered the possibility of introducing
•    The invention of analog multiplexers called ROICs, which                   whole new applications not yet envisioned. This progress put
     are on-focal-plane analog multiplexers of multiple detec-                  more pressure on the U.S. to exploit it to maintain its lead in
     tor outputs. (Chapter 7).                                                  FLIR technology. Thus, the incentive and the tools were there
•    The development of photovoltaic MCT detector arrays                        for the U.S. to maintain its leadership.
     (Chapter 8).
                                                                                FLIR technology had been paced by detector technology.
•    The mostly concurrent development of photovoltaic
                                                                                However, while continuing detector development was still
     InSb detector arrays and, later, uncooled microbolometer
                                                                                crucial to progress, GEN2 FLIR development was now also
     detector arrays (Chapter 9).
                                                                                paced by progress in microelectronics, especially in both

In the early 1980s, Common Module FLIRs were widely                             analog multiplexing implementations and photolithographic

adopted in U.S. ground armor, tactical aircraft, ships, and                     feature sizes. For instance, early FLIR developers understood

man-portable weapon systems. However, FLIRs were still a                        the importance of adding more detectors to the focal plane

novelty to the public. For instance, nightly news broadcasts                    to increase sensitivity and other benefits. Increasing the

would often show the “amazing” ability of FLIR-equipped                         number of detectors by a factor of two means doubling the

weapon systems to see at night without relying on moon-                         signal, but noise doesn’t double; it only increases by the

light, starlight, or any artificial source of illumination.                     square root of 2 because, since noise is uncorrelated, it adds

Schmieder was interviewed by an Atlanta TV station in 1980                      in quadrature (the square root of the sum of the squares).

and was asked to show their audience imagery from the new                       Accordingly, sensitivity increases by the square root of the

Apache attack helicopter TADS (Target Acquisition Desig-                        number of detectors, a very significant increase. So, it was

nation System) FLIR, which he helped design. Permission                         very compelling for FLIR designers to determine how to add

was obtained from the Army to do so. This kind of interest                      as many detectors as possible to the focal plane.

and visibility was not unusual either at home in the U.S. or in
                                                                                Mitigating against more detectors, however, in the days of
other countries. However, to militaries around the world, it
                                                                                GEN1 FLIRs with discrete detectors, was the need to add a
was obvious that FLIRs were not just a novelty but were an


10
   “GEN2” terminology is often used to refer specifically to the Army’s scanned linear arrays that employ GEN2 multiplexing and photovoltaic detector tech-
nology, but the more expansive definition that refers to all FPAs, scanned and staring, with such technology is used in this book.
11
   This chapter is largely based on Georgia Institute of Technology Professional Education course notes from Infrared Technology & Applications [1].


Chapter 7. GEN2 FLIR: ROIC Invention and Self-Scanned FPAs // 7-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.


preamplifier and a postamplifier together with their associ-       optics). This increase in focal lengths reduced the detector’s
ated support equipment for every detector channel added.           angular subtense and placed more detectors on a target.
Moreover, each additional detector added greater heat load         The result was improved resolution, greater stand-off range,
on the cooler because of the bias current flow required by         and improved crew survivability. These improvements
photoconductive detectors. In addition, another wire had           occurred because, after a certain sensitivity level is achieved,
to be taken out of the Dewar, and the thermal conduction           resolution becomes the dominant performance metric since
of that wire increased the cooler heat load even more. But         target acquisition range scales directly with resolution in a
just from packaging considerations, it was only practical to       clear atmosphere. GEN2 sensitivity improvements indirectly
package 20 amplifiers on a nominal 25-in. -circuit board, and
                                            2
                                                                   enabled that resolution improvement. The combination of
so nine circuit boards were required for all the preamplifiers,    multiplexing, more sensitive detectors, and smaller detector
and another nine were required for the postamplifier when          dimensions resulted in revolutionary GEN2 FLIR advances.
a GEN1 FLIR was configured to use all 180 detectors. Clear-
ly a system would quickly run out of room if many more             Detector advances were clearly still essential to GEN2 FLIR
detectors were added. Finally, the combination of additional       development. With a large increase in the number of de-
detectors, their drive electronics, and larger cooler would        tector channels now possible, FLIR designs could no longer
require more power and a larger power supply. It was no            use photoconductive detectors. Such detectors had low
wonder that GEN1 FLIRs stopped with 180 detectors.                 impedance and required a high bias current that resulted in
                                                                   large power dissipation on the focal plane with attendant
Advances in microelectronics for on-focal-plane multiplexing       increased cooler heat load. Accordingly, multiplexers moti-
provided a way to decouple the detector count from the             vated the development of photovoltaic detectors since their
channel count. That advancement, in turn, motivated the de-        high-impedance p-n junction greatly reduced the required
velopment of photovoltaic diode detectors to greatly reduce        bias current and heat generated. Moreover, photovoltaic
the heat load and provide high impedance compatibility             detectors brought the additional benefit of having greater
for easier integration with the multiplexer. Together, both        inherent sensitivity. However, given the difficulty of making
advances enabled the focal plane to handle, at first, tens of      MCT detectors at all, now the requirement to make them
thousands of detectors and eventually millions of detectors.       with notoriously finicky p-n junctions was a major challenge
                                                                   that had to be overcome. While that problem was eventually
The emerging GEN2 IR detectors provided large, 2-D FPAs in         solved in MCT, it was also responsible for maturing InSb as an
both staring and scanning formats. Sensitivity rose dra-           alternative, or for some applications, an even better detector
matically, and smaller feature sizes allowed the detector          candidate.
dimensions to be cut roughly in half to improve resolution.
While this detector size reduction reduced sensitivity by the      Even more consequential was the development of uncooled,
same amount (i.e., by the square root of the detector’s area       room-temperature detectors based on an entirely differ-
reduction), overall sensitivity still increased dramatically due   ent “thermal” detection mechanism that replaced photon
to the higher detector count. Moreover, the smaller detec-         quantum detection with temperature-change detection. The
tor dimensions allowed for shorter focal lengths, and that         latter then led to microbolometer and pyroelectric-based
both recouped the sensitivity loss imposed by the smaller          detectors. Thermal detectors had been invented many years
detectors (because the f-number went down) and reduced             before, but they had too little sensitivity to provide many
package size and weight. Alternatively, for some applica-          practical applications. Now, however, the increase in sensitiv-
tions, the focal lengths could be made longer because now          ity made possible by multiplexing hundreds of thousands of
the FLIRs could also be made with higher f-numbers (trading        detectors assembled together in a single FPA made thermal
improved detector sensitivity for less efficient collection        detectors feasible for many applications. Furthermore, their

Chapter 7. GEN2 FLIR: ROIC Invention and Self-Scanned FPAs // 7-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                      DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                 DISTRIBUTION STATEMENT A.
                                                                                       Approved for public release; distribution is unlimited.


low cost enabled applications that were not affordable with
cooled photon detector-equipped FPAs. The remaining
sections of this chapter discuss the history of the various
approaches taken to develop focal plane multiplexers, or RO-
ICs, as they were called. But these sections also describe the
advances made in detectors to both accommodate them and
take detector technology to the next level. Together they
chronicle the GEN2 FLIR development.                              Figure 7-1. SPRITE Principle of Operation: Detected photoelectrons are
                                                                  made to drift at a velocity that matches the image scan rate to effectively
                                                                  implement TDI (Source: Elliot [32] and British Defense Ministry, RRE).
7.2 SPRITE DETECTOR INVENTION

Before clock-driven analog multiplexing techniques became         they were read out with a preamplifier. Early versions made
the baseline approach to second-generation FPAs, a clever         in 1975 were 50 µm wide by 1,000 µm long and so appeared
approach was invented in the U.K. that arguably might have        to make it possible to have 20 virtual detectors contained
qualified it as one of the first GEN2 devices. Since the bene-    within its length. However, charge diffusion resulted in an ef-
fits of high detector count were widely appreciated, there        fective individual detector length of about 75 µm, or more, so
were various attempts to solve the detector access problem.       this approach did not achieve the same resolution in the scan
One of the first attempts was the use of TDI in which the         direction as was obtained by using discrete detectors. By
output of any given detector was delayed and summed with          1980, arrays were built for parallel-serial scanning with eight
the output of a following detector as described previously in     detectors each of 800 µm by 75 µm. The latter configuration
Section 5.4.3 for the HAC Discoid Serial Scan FLIR. However,      would thus effectively provide a total of about 8x10 elements
with only bulky analog electronics, delay lines, and many         in an 80-element array while using only one preamplifier and
discrete components, that task was difficult. Later, in the       one postamplifier. An equivalent 80-detector U.S. GEN1 FLIR,
mid-1970s, the U.K. was trying to come up with their own          for example, would have needed four 20-channel pream-
version of a Common Module FLIR to duplicate the successful       plifier PCBs and four 20-channel postamplifier PCBs plus a
U.S. Common Module FLIR program. Tom Elliot, while at the         much larger power supply. So the U.S. GEN1 FLIR would have
British Defense Ministry’s Royal Radar Establishment (RRE),       required a much larger package.
Malvern, later renamed QinetiQ, realized that TDI could be ac-
complished inside a single, extended, monolithic, photocon-       SPRITE detectors were the basis of U.K. GEN1 Common Mod-
ductive detector to make it appear to be many more discrete       ule FLIRs, although they might have qualified as second gen-
“virtual” detectors [32, 47]. The resulting serial output could   eration. The SPRITE-based U.K. common modules provided
then be coupled to a single amplifier circuit, thus effectively   high sensitivity and high-quality imagery in a very compact
multiplexing the virtual detectors together. Some called his      package. Various versions were built and, by 1999, over 3,500
invention TED (for Tom Elliot’s Device), although the official    FLIRs were made based on the Class II configuration alone.
name for it was Signal Processing in the Element (SPRITE).        They were used in the Falklands conflict and in the two Gulf
Figure 7-1 illustrates how it worked.                             Wars.


The detector’s bias voltage was chosen so that photoelec-         7.3 MULTIPLEXER ROIC DESIGNS
trons, formed from a scene pixel, drifted at the same rate        7.3.1 Charge Coupled Device (CCD)
the image was being scanned. Accordingly, photo charges
accumulated and remained registered with the same scene           The invention of CCDs in the late 1960s by Smith and Boyle at
pixel across the whole detector. When they reached the end,       Bell Labs [48] made it possible to envision GEN2 FLIR detector


Chapter 7. GEN2 FLIR: ROIC Invention and Self-Scanned FPAs // 7-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                           DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                      DISTRIBUTION STATEMENT A.
                                                                                            Approved for public release; distribution is unlimited.


arrays which could be coupled with on-focal-plane electronic              the insulator, which attract the photoelectrons and form
analog signal readouts. As envisioned those readouts could                charge packets. Each pixel site is defined by the driver pads;
hopefully multiplex the signal from an exceptionally large                thus, a single, three-phase CCD pixel consists of three metal
array of detectors. CCDs were easy to fabricate in silicon, and           pads. The voltage waveforms supplied by the three-phase
the high purity of silicon provided high yields. Figure 7-2               clocks result in the maximum potential occurring under
illustrates their operation.                                              only one pad, of the three, at one time. Hence, the charge
                                                                          packets form only under the pad having the highest voltage
Importantly CCDs use neither photoconductive nor photo-                   potential. This arrangement also isolates each pixel from
voltaic detectors. Instead they employ a new technique that               their adjacent pixels. However, since the clock-driven voltage
uses a metal-insulator-semiconductor (MIS) structure. The                 waveforms vary in time, the voltage under the second pad is
MIS structure, as its name implies, is a three-layer sandwich             timed to exceed that under the first pad. When this happens,
consisting of a metal layer on top of a silicon oxide insulator           the charge packet “rolls” from the first pad to under the sec-
layer, all on top of a semiconductor layer. The bottom semi-              ond pad. A repetition of this process makes the packets roll
conductor layer converts impinging photons, here incident                 together, unmixed, down the line of pads, for an indefinite
from the bottom, into electrons using the photoelectric                   length and pixel count, until they are sensed at the end of the
effect. This structure acts like a capacitor.                             line. The result is a sequential (serial) readout of the whole
                                                                          line of charge packets.
A CCD exploits the MIS structure by making the semicon-
ductor and insulator layers into a long, narrow, continuous               CCDs quickly replaced film and bulky vidicons as the pre-
detector. It then covers it with a linear array of discrete metal         ferred sensor in commercial and consumer video and snap-
pad electrodes in which each pad is sequentially connected                shot cameras. It was soon evident that CCDs could be used
to one of three time-varying, clock-driven voltages. This is              to make solid-state, “self-scanned” devices that could be
called a three-phase CCD and is the type shown in Figure 7-2.             useful for memory and other applications as well as imagers.
Two-phase CCDs are possible as well and they only use two                 However, a major impediment for FLIR application was the
clock phases connected to two pads. Clock-driven voltage                  difficulty of building these devices out of the more exotic ma-
variations on the metal pads create potential wells under                 terials required to detect longer-wavelength IR photons. A
                                                                          breakthrough occurred with the discovery that Shottky-Barri-
                                                                          er photodiodes, made from a layer of platinum deposited on
                                                                          silicon, was found to respond over the 1–5-µm region. This
                                                                          discovery resulted in one of the first production GEN2 FLIRs,
                                                                          when a Shottky-Barrier CCD made from platinum silicide
                                                                          (PtSi) was used as the FPA for B52 bombers. These devices
                                                                          were attractive because they were “monolithic,” meaning they
                                                                          could be fabricated by depositing multiple material layers
                                                                          sequentially on a single substrate. However, PtSi response to
                                                                          MWIR photons was poor and provided a quantum efficien-
                                                                          cy of only about 1%. A more exotic material would have to
                                                                          be used if higher quantum efficiencies were to be attained,
                                                                          but the microelectronics industry’s capital base and mate-
Figure 7-2. CCD Operation (Source: Georgia Tech ITA course notes [1] as
                                                                          rial handling expertise were invested in high-purity silicon.
adapted from Amelio [48], 1974).
                                                                          That capability did not easily transfer to other, lower-purity


Chapter 7. GEN2 FLIR: ROIC Invention and Self-Scanned FPAs // 7-4
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                       DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                  DISTRIBUTION STATEMENT A.
                                                                                                        Approved for public release; distribution is unlimited.



materials such as those required for IR detection. It soon                        each pad is held at a suitable negative voltage, which allows
became apparent that the detectors would have to be made                          photo-induced charge (here positively charged carriers, or
separately on one type of material, but the multiplexer would                     holes) to collect under the pads. When a pad is addressed,
have to be made from lower-cost, higher-yielding silicon.                         the negative voltage condition is canceled, and the charge
The combination would then have to be bonded together in                          collects under the other pad. If the voltage is removed from
a “hybrid” configuration to form an electronically scanned IR                     both wells, the charge is injected into the substrate where
FPA. The multiplexer half of this device became known as an                       it is sensed as a current or voltage change, usually by an
ROIC. ROIC designs were the key to GEN2 FLIR technology.                          on-chip preamplifier. Since the particular x and y address of
Eventually, CCD ROICs were replaced by other types of ROICs                       each charge is known, the detected output is a “video” signal.
with better features.                                                             This technique differs from that of a CCD in that the pixels
                                                                                  can be accessed either sequentially as is required in a CCD or
7.3.2 Charge Injection Device (CID)                                               randomly since sequential access to CID pixels is no longer
                                                                                  needed.
Another multiplexing device, the CID, was invented in the
early 1970s, shortly after the CCD. GE invented this technol-
                                                                                  One advantage of a CID is that it can be used to “window”
ogy while working to design memory chips, but it was soon
                                                                                  smaller regions of an array to use a higher frame rate or lock
adapted to imaging applications as well. Figure 7-3 illustrates
                                                                                  out undesired regions of an image. Another advantage is
its operation. Photoelectrons accumulate in capacitive wells
                                                                                  that it mitigates blooming from bright sources because the
formed under the intersection of each row and column. Con-
                                                                                  structure offers no ready path for excess charge to overflow
ventional shift registers are used to position a voltage at any
                                                                                  into adjacent pixels. A disadvantage of CIDs is that the cell
desired x and y location. The x location, for instance, places
                                                                                  capacitances are all in parallel, whereas in CCDs, the capac-
that voltage at every site on the x-column of sites. Likewise,
                                                                                  itances of each cell are isolated, so Johnson noise (propor-
the y-location places that voltage at every site on the y-row
                                                                                  tional to capacitance) is much greater in a CID. However,
of sites. Each site has an x and y pad. When not addressed,
                                                                                  background shot noise is so dominant in FLIRs that the
                                                                                  internal noise in a CID ROIC is typically small in comparison.
                                                                                  Both CCDs and CIDs have the disadvantage of not being able
                                                                                  to use all of their surface area for charge storage since both
                                                                                  require empty adjacent wells to keep the pixel charges sep-
                                                                                  arate. This requirement reduces the maximum charge they
                                                                                  can store and limits their dynamic range. That is an unfortu-
                                                                                  nate feature of both multiplexers since large storage capacity
                                                                                  is required for charge storage devices when working in the IR
                                                                                  because the high background pedestal12 of IR scenes leaves
                                                                                  little room for signal storage. This limitation was overcome
                                                                                  by the invention of a metal-oxide-semiconductor field effect
                                                                                  transistor (MOSFET) switch technology, which is described in
Figure 7-3. CID Operation (Source: Georgia Tech ITA course notes [1]).            Section 7.3.3.



12
  The term “pedestal,” sometimes just called “background,” refers to the fact that typical scene temperatures are near 300 K, but object “signal” is the differ-
ence between the object’s temperature, say 302 K, and the 300 K background. So that background temperature makes the object look like it is riding on a
pedestal. Most photoelectrons in a staring detector are obviously due to the pedestal, i.e., background flux. This pedestal flux is undesirable both because it
uses up most of a staring detector’s storage capacity and because that background contains quantum noise.

Chapter 7. GEN2 FLIR: ROIC Invention and Self-Scanned FPAs // 7-5
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                             DISTRIBUTION STATEMENT A.
                                                                                                   Approved for public release; distribution is unlimited.




7.3.3 MOSFET Switch                                                              a current amplifier in the sense that a small gate voltage can
                                                                                 control a large current flow. Likewise, it can be converted
The MOSFET switch was the third and last major multiplexer
                                                                                 into a voltage amplifier by passing the current through a
type as well as the one that became the most used of the
                                                                                 resistor since the voltage across the resistor will change with
three. These devices were often just referred to as simply
                                                                                 a change in current flow. Finally, the MOSFET can be made to
“CMOS” (complementary metal-oxide-semiconductor) multi-
                                                                                 perform AC coupling by inserting a bias voltage on the gate
plexers after the basic CMOS architecture used in integrated
                                                                                 to change the level at which current can flow. Adjusting the
circuits from which they were derived. CMOS devices were
                                                                                 bias above the DC level removes all but AC variations. The
invented in the early 1960s at Fairchild Semiconductor and
                                                                                 MOSFETs can be made to do other functions too, but those
were widely adopted for integrated circuit design because
                                                                                 described here are most helpful in understanding their roles
they offered high noise immunity and low static power con-
                                                                                 in MOSFET switch FPAs. As its name implies, the MOSFET
sumption.
                                                                                 switch multiplexer was developed from an array of MOSFETs.
                                                                                 An example arrangement is shown in Figure 7-4.
To better understand MOSFET switch FPA multiplexers, it is
helpful to understand what a MOSFET is and can do. It is a
                                                                                 The MOSFET switch multiplexer was organized much like
type of transistor with a current input node, a control gate
                                                                                 the CID shown in Figure 7-3 with each pixel accessed by a
node, and an output drain node as shown in the Figure 7-4
                                                                                 row and a column connected to a vertical and a horizontal
side breakout where the input node current comes from the
                                                                                 shift register, respectively. However, it differed from a CID in
detector’s integrating capacitor. A voltage on the gate con-
                                                                                 that each site consisted of a MOSFET switch along with the
trols the flow of current through the gate region to the drain.
                                                                                 detector. The detector formed the MOSFET’s photoelectron
The gate region is often referred to as the “pinch-off” region
                                                                                 charge storage capacitor. But instead of injecting charge, the
because selection of the proper voltage on the gate can ei-
                                                                                 MOSFET switched the charge out of the site into the column
ther pinch-off the flow of current or allow it to proceed. Thus,
                                                                                 shift register. Access to stored charge was gained only when
it can operate as a simple switch. But it can also operate as




Figure 7-4. MOSFET switch device architecture (Source: Georgia Tech ITA course notes) [1].




Chapter 7. GEN2 FLIR: ROIC Invention and Self-Scanned FPAs // 7-6
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                DISTRIBUTION STATEMENT A.
                                                                                      Approved for public release; distribution is unlimited.




the gate and drain contacts were simultaneously closed by         the ROIC. Most importantly, the challenge in FPA design
the row and column address lines. These devices shared the        included how to handle the large thermal mismatch be-
random-access feature of a CID but, unlike either CIDs or         tween the more exotic materials needed to detect IR photons
CCDs, were able to use virtually all of the cell’s surface area   with the more common materials needed to the make the
for charge storage thus doubling storage capacity. (Note          ROIC such as silicon or GaAs. The problem was the different
that the surface area required for MOSFET feature sizes was       coefficient of thermal expansion (CTE) between detector
so much smaller than the detector cell’s active area that         materials and ROIC materials, which tended to cause sepa-
they virtually had no effect on the available surface area for    ration when fabricated and stored at room temperature, but
photodetection.) Moreover, the architecture was convenient        then operated and repeatedly cycled on and off to cryogenic
for adding more functionality to a site’s MOSFET switch such      temperatures. The next two chapters describe the history of
as inserting a separate switch and access port for controlling    FPA development first for cooled MCT (Chapter 8) and then
charge integration time so that it was independent from           for cooled InSb and other types such as room-temperature
the device’s frame rate. This additional functionality was an     FPAs (Chapter 9).
important feature when, for instance, a FLIR needed to avoid
cell saturation in viewing warm backgrounds or by accom-
modating more efficient collection optics by using a shorter
integration time. It was also very useful when needing short
integration times to minimize image smearing with electron-
ic motion stabilization schemes. This flexibility, combined
with the wide adoption of basic CMOS fabrication by the
broader microelectronics industry, made the MOSFET switch
the preferred multiplexer for FLIR FPA ROICs.

7.4 DEVELOPMENT OF GEN2 SELF-SCANNED FPAs

The invention of ROICs resulted in the emergence of self-
scanned FPAs. ROICs were combined with detector arrays in
various ways to mate the detection function with the read-
out and multiplexing function to provide a serial output.
That output needed to be compatible not only with standard
displays but with various signal processors that worked best,
in that era, on serial information such as trackers and auto-
matic target recognizers. However, once ROICs were devel-
oped, their mating with detector arrays took different routes
that depended on the various ways to both mechanically
and electrically connect them. The challenge was to develop
detector designs that were able to solve read out compat-
ibility issues. These issues included charge storage limita-
tions with high background flux, interconnection strategies
for biasing the detectors, and signal access and grounding
circuit designs for inserting the detector signal charge into


Chapter 7. GEN2 FLIR: ROIC Invention and Self-Scanned FPAs // 7-7
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                DISTRIBUTION STATEMENT A.
                                                                                                      Approved for public release; distribution is unlimited.




CHAPTER 8. GEN2 FLIRS                                                           devices. This advantage resulted from the higher dynamic
                                                                                range (well capacity) of silicon as opposed to that of MIS
WITH COOLED MCT                                                                 capacitors made from the narrow-gap semiconductor de-

DETECTORS                                                                       tectors. The result of this progress was the introduction of
                                                                                the now widely used “hybridized” IRFPAs, which connected
8.1 INTRODUCTION           13                                                   silicon multiplexer arrays with dissimilar detector arrays.

Since MCT was the leading detector material for FLIR FPA ap-                    Note that at a very early stage, the Air Force approached GE
plication leading up to GEN2, it was also initially the leading                 in Syracuse, due to their proximity to Professor Henry Levin-
material candidate for GEN2 technology. However, InSb was                       stein’s IR materials group at Syracuse University, with an offer
largely developed in parallel with MCT and was used in the                      to become a center of excellence for IR detector technology.
eventual design and fabrication of the largest formats em-                      GE respectfully declined, as they could see little profitability
ployed in IRFPAs. While the application to InSb is the focus of                 in IR components, and so the Air Force chose HAC as the focal
the next chapter, many comments regarding GEN2 applica-                         point for IR development. As a result, GE lost an important
tions to InSb are also covered in this chapter.                                 opportunity to play a larger role in IRFPA development.

8.2 DEVICE STATUS IN THE EARLY 1980s                                            The first advanced IRFPAs in limited (U.S.) production were
                                                                                InSb diode hybrids from HAC SBRC. This technology was
By the early 1980s, it was possible to build an amplifier-in-
                                                                                principally developed through classified contracts from
tegrator in silicon and couple it with an IR detector: GE
                                                                                Lockheed Space in Sunnyvale, CA, and was employed in Cold
invented the CID (later adopted at Northrop and TI) and
                                                                                War surveillance sensors. These early hybrid FPAs from SBRC
applied it to FPAs. HAC and TI implemented CCDs to permit
                                                                                eventually established InSb as a detector material of choice
integration and multiplexing on detector arrays. The first 2-D
                                                                                for Air Force and Navy longer-range airborne applications.
arrays with more than 10,000 detector elements were InSb
                                                                                The InSb mid-wave response was more desirable for the Air
arrays with silicon CIDs at GE. Meanwhile, TI maintained their
                                                                                Force and the Navy because of improved diffraction-limited
totally “monolithic” MIS approach in MCT, so they fabricated
                                                                                resolution and greater atmospheric transmission. MCT’s
both the CCD multiplexer and the detector from MCT. That
                                                                                long-wave response was preferred by the Army since their
approach put them at a temporary disadvantage in the
                                                                                targets were engaged at shorter ranges but often required
development of GEN2 FLIRs due to the difficulty of working
                                                                                greater obscurant penetration to deal with battlefield smoke
with MCT.
                                                                                and dust.

Among the most significant events in FPA development were
                                                                                The difficulties associated with the development and tran-
the demonstrations of the indium bump interconnect at
                                                                                sition to production of the GEN1 Common Module family of
HAC SBRC and the via-hole interconnect at TI (also at Mullard
                                                                                detectors created the impression that MCT was a high-cost
in the U.K.). They provided a way to connect the dissimilar
                                                                                technology, and so the proposed move to second-generation
detector materials with their silicon readouts. These develop-
                                                                                FPAs, where the detectors would be photovoltaic diodes
ments moved charge integration to the silicon multiplexers
                                                                                rather than photoconductors, was viewed with skepticism.
and quickly eclipsed the capabilities of the monolithic MIS
                                                                                Ways to grow uniform, low-defect-density MCT over large



13
   This chapter is based mostly on extracts from Steve Jost’s documents written for SENSIAC by request in 2013 [20]. Jost worked for just one organization,
initially GE, during this period, but that same organization was purchased and managed in succession by Sanders, Loral, LMCO, and BAE.


Chapter 8. GEN2 FLIRs with Cooled MCT Detectors // 8-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                               DISTRIBUTION STATEMENT A.
                                                                                                     Approved for public release; distribution is unlimited.


areas, and then use it to create detector diodes, were needed
to achieve the desired performance and low cost. Solid-state
recrystallization, which had been employed for the Common
Module effort was replaced by liquid phase epitaxy (LPE).
With LPE, substrates of cadmium telluride (CdTe) or cadmium
zinc telluride (CdZnTe) were immersed in either Te-rich or Hg-
rich melts, and MCT films were precipitated out of the melt
by controlled cooling. Molecular beam epitaxy (MBE), metal
organic chemical vapor deposition (MOCVD), and isothermal
conversion were also employed. But due to the relative ma-
turity and low defect densities, LPE dominated.

8.3 MID-1980s FPA DEVELOPMENTS

As the mid-1980s approached, HAC SBRC’s double-layer
heterostructure14 diode was chosen over Honeywell’s and                         Figure 8-1. Several InSb FPA formats from Lockheed Martin Santa Barbara
                                                                                Focal Plane. Navy and Air Force staring FLIRs for targeting and navigation
Rockwell’s ion-implanted homojunction MCT diode to be-
                                                                                employed InSb FPAs in 480x640 format or larger. InSb dominated the
come the LWIR detector design of choice in the United States.                   large-format staring market with excellent performance at a reasonable cost
TI pursued an LWIR MIS technology that was initially chosen                     (Source: Lockheed Martin Santa Barbara Focal Plane).

for the Javelin seeker and Command Launch Unit. When the
Javelin seeker contract was transferred to HAC, TI took what                    acquired HAC in 1997) dominated the military production of
they had learned from MIS and developed a competitive                           these FPAs.
alternative to the double-layer heterostructure.
                                                                                Rockwell identified substrate availability and size as the
In the meantime, the Navy was looking at the MWIR band,                         principal cost drivers for MCT diode arrays and developed
as explained in Section 8.2, to provide improved resolution                     a producible alternative to CdTe epitaxy (PACE) where they
with smaller apertures and for better atmospheric trans-                        grew modest-quality, single-crystal CdTe on sapphire by
mission. MCT could be tuned to the MWIR band, but InSb                          MOCVD followed by an MWIR LPE MCT process. By going to
was used due to its level of maturity and significantly lower                   3-in. sapphire substrates, Rockwell probably held a tempo-
cost. Amber Engineering cemented InSb’s dominant role in                        rary cost advantage over their MCT competitors but failed to
staring technology by introducing an inexpensive ($49,999)                      take the market away from InSb detectors, which required no
128x128 camera engine in the mid-1980s. Prior to this                           epitaxy (matching of crystalline lattice structure) and offered
lower-cost camera, a similar format custom MWIR FPA would                       similar wafer sizes. A significant investment was made in
cost between $430,000 (GE InSb CID) and $1.2 M (HAC MCT).                       a similar technology for LWIR diodes, PACE II, where GaAs
Since that time, Amber, CE, FLIR Indigo, Santa Barbara FPA                      wafers served as the substrates, but the state of hetero-
(Figure 8-1), and HAC SBRC produced many hybrid InSb FPAs                       epitaxy (growing crystals of one material on the crystal face
on silicon MOSFET switches but HAC/Raytheon (Raytheon                           of another substrate material while maintaining the lattice



14
   A heterostructure is a combination of heterojunctions where a heterojunction is the interface between two layers of dissimilar crystalline semiconductors
that have unequal band gaps. A homojunction, in contrast, has two layers of similar material with equal band gaps but has different doping. In both hetero-
junction and homojunction types, the interface is formed between an n-type and a p-type semiconductor to form a p-n junction. In a double-layer hetero-
structure, a narrow-bandgap material is sandwiched between two wide-bandgap layers. In the case of MCT, the narrow-gap material, needed to absorb in
the LWIR, can be surrounded by wider-gap material to prevent instabilities in the weaker, narrow-gap bonds.


Chapter 8. GEN2 FLIRs with Cooled MCT Detectors // 8-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                              DISTRIBUTION STATEMENT A.
                                                                                                    Approved for public release; distribution is unlimited.




structure and orientation identical to the substrate) for LWIR                 simultaneously with both p- and n-type material depending
MCT in the United States did not equal the quality of compet-                  on the device’s configuration. Typically, detector manufac-
ing technologies. This approach was eventually abandoned,                      turers struggled to find a satisfactory working solution and,
although it was later resurrected.                                             if they did find a solution, they naturally wanted to keep it
                                                                               proprietary.
Rockwell continued extrinsic15 silicon technology develop-
ment and addressed the low quantum-efficiency issue by                         For competitive reasons and the unavailability of LWIR
developing a clever detector structure where a layer of highly                 MCT FPAs for sensor development, both GE and McDonnell
doped silicon provided enhanced absorption, and low dark                       Douglas licensed the French diffused MCT technology from
currents were maintained with an undoped silicon “blocking                     the company SAGEM. This was the first production MCT
layer.” These blocked impurity band detectors still required                   diode technology with CdTe passivation. Before CdTe gained
more cooling than their narrow-gap semiconductor coun-                         acceptance in the United States, many surface passivation
terparts but pushed the competition to better uniformities.                    materials were tried: anodic oxide, silicon oxide, zinc sulfide,
Perhaps the most expensive FPA ever built was based on                         and a range of organics such as epoxy. TI employed a biased
extrinsic silicon technology: the “Teal Ruby” FPA.                             gate, which controlled the surface potential and leakage
                                                                               currents; in spite of the extra processing required, it worked
During this period, Amber had become a merchant supplier                       better than most surface passivation materials, but the
for silicon ROICs, an increasingly important FPA component.                    French innovation prevailed.
GE, Litton, Martin Marietta, NERC, Rockwell and others all
demonstrated second-generation FPAs that incorporated                          As with any technology transition, there were aspects of
Amber designs. Once a competitive detector process was                         the diode process that were not completely understood or
established, the readout became a significant discriminator.                   appreciated. This lack of understanding, coupled with the
                                                                               language problem, complicated the transition to GE’s labora-
8.4 MCT TECHNOLOGY TRANSFER FROM THE FRENCH                                    tory in Syracuse.

Difficulties with p-n junction photovoltaic diode fabrication
                                                                               Eventually, GE succeeded in manufacturing competitive
presented an even greater challenge in MCT compared to the
                                                                               scanning arrays, and they were incorporated into the first ad-
already difficult task of even making photoconductive detec-
                                                                               vanced U.S. LWIR MCT FPA production sensor, the Navy F-14D
tors given the problems of working with MCT. A significant
                                                                               IRST (Figure 8-2). The significance of this success was the U.S.
aspect of that difficulty was the need to passivate the detec-
                                                                               validation of CdTe passivation, which is now employed by the
tor surface after the junction was made. A detector needed
                                                                               entire detector community even though McDonnell Douglas
surface passivation to be stable chemically, electrically, and
                                                                               and GE were the only U.S. companies to license this critical
thermally. Generally, this passivation required a surface
                                                                               technology from SAGEM. The GE team worked with both TI/
coating that had a high electrical resistivity to avoid leakage
                                                                               DRS and Honeywell/Loral/Lockheed-Martin/BAE Systems in
currents and provided a good lattice match to avoid strains
                                                                               the development of their own CdTe passivation formulations.
and flaw generation. Of course, the passivation material
                                                                               Without CdTe passivation, production MCT diode technology
was also required to transmit well in the detector’s spectral
                                                                               may not have been possible.
passband and potentially meet all the other requirements



15
  An extrinsic semiconductor is one that has been doped with trace elements of other materials to enhance certain properties as compared to an intrinsic
semiconductor, which uses no foreign materials.


Chapter 8. GEN2 FLIRs with Cooled MCT Detectors // 8-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                           DISTRIBUTION STATEMENT A.
                                                                                                 Approved for public release; distribution is unlimited.




Figure 8-2. The F-14D IRST FPA consisted of four 64-element modules of LWIR MCT diodes and an Amber/GE designed readout. This was the first production
LWIR diode-based FPA in a production U.S. sensor, circa 1991 (Source: General Electric).


TI pursued an LWIR MIS technology that was initially chosen
for the Javelin seeker and command launch unit (Figure 8-3).
Due to the high biases required to maintain acceptable dy-
namic range, the tunnel currents in the LWIR devices reduced
FPA yield to near zero in spite of the fact that the prototype
seekers had an excellent track record for hitting armored ve-
hicles. This result may have been a case of over specification,
but the low FPA yields caused significant concern at high
levels in the Pentagon and almost caused the entire Javelin
program to be cancelled. The Javelin seeker program was                      Figure 8-3. The Javelin antiarmor missile has a staring seeker 64x64 LWIR
the first high-volume, advanced FPA production effort in the                 FPA from Raytheon Vision Systems (RVS [HAC]) in the missile and a scanning
                                                                             sensor with a linear LWIR FPA from DRS (TI) in the command launch unit.
United States.                                                               The target is acquired with the command launch unit FLIR, which relays that
                                                                             information to the seeker, which tracks the target and determines the point
As a result of the low FPA yields, the Javelin seeker FPA                    of impact (Source: U.S. Army).

contract was transferred to HAC. But TI took what they had
learned from MCT MIS and developed a competitive, alter-                     During this development, TI purchased scanning FPAs from
native FPA design to the HAC double-layer heterostructure                    the Sofradir Group (which employed a derivative of the
design. TI developed this alternative with a mix of intrinsic                SAGEM MCT diode process) for a main battle tank FLIR they
and extrinsic doping in LPE MCT. Because of the demands                      developed for Turkey. This procurement strategy was at least
placed on material perfection to minimize tunneling in LWIR                  partially responsible for getting Sofradir on a track to com-
MIS MCT, TI had developed what was arguably the lowest                       mercial success, because the “Turkey FLIR” was effectively the
dislocation density MCT. This development translated into                    pathfinder second-generation production sensor.
high diode yields with excellent uniformity.



Chapter 8. GEN2 FLIRs with Cooled MCT Detectors // 8-4
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                         DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                    DISTRIBUTION STATEMENT A.
                                                                                                          Approved for public release; distribution is unlimited.




To develop its own staring sensors, Martin Marietta (later to                       merchant supplier for second-generation FPA technology, it
become Lockheed Martin) made a significant investment in                            was no longer a competitor. This refusal was the HAC sensor
quantum well IR photodetectors (QWIPs), which were based                            operation’s attempt to employ its proprietary FPA technology
on a superlattice of GaAs and aluminum GaAs (AlGaAs). First                         as a system discriminator.
developed at Bell Telephone Laboratories, the QWIP (Figure
8-4) leveraged existing microwave integrated circuit tech-                          8.5 THE STANDARD ADVANCED DEWAR ASSEMBLY
nology and fabrication facilities. The QWIP was inexpensive                         (SADA) SCANNING MODULE
but required more cooling than LWIR MCT and exhibited low
                                                                                    The Army NVESD saw the potential of maturing second-gen-
external16 quantum efficiency (QE). Had InSb staring FPAs not
                                                                                    eration LWIR scanning technology and initiated control of
been developed when they were, QWIPs might have been
                                                                                    the industry by standardizing critical system components.
used by the United States at least as mid-wave detectors. As
                                                                                    This standardization led to the SADA modules, which were
of 2014, only the Europeans employed QWIP FPAs in a hand-
                                                                                    intended as an upgrade to the existing common module
ful of operational, mid-wave military sensors, although QWIP
                                                                                    systems and, like the common modules, could be used across
FPAs were used in some LWIR commercial products.
                                                                                    the battlefield. The program became known as Horizontal
                                                                                    Technology Integration (HTI) where the term “horizontal”
Before the Army’s GEN2 FLIR technology made the transition
                                                                                    meant introduction to existing platforms without waiting for
to production, DARPA invested more than $100 million into
                                                                                    the introduction of new platforms to incorporate the new
LWIR MCT manufacturing technology to avoid the manufac-
                                                                                    sensor. A family of TV-compatible SADA scanning modules
turing issues associated with the original common module
                                                                                    were defined including 288x2 or 4, 480x4 or 6, and 960x4 or 6
effort. Honeywell had adopted the double-layer hetero-
                                                                                    (anticipating high-definition TV) but the latter was dropped,
structure approach, and TI bid a newly developed via hole
                                                                                    and a noninterlaced 480x4 or 6 emerged as the principal
interconnected diode technology that was manufactured
                                                                                    assembly.
on 6-in. silicon wafers. Because HAC refused to sign on as a




Figure 8-4. 480x640 QWIP FPA (left) and typical “peaked” spectral response curve (right). Perhaps the lowest-cost LWIR technology, the QWIP had low QE
(< 10% external QE) and higher dark current (requiring an operating temperature usually less than 70 K) than comparable MCTs (Source: Lockheed Martin).



16
     External quantum efficiency includes the effect of optical losses such as transmission and reflection.


Chapter 8. GEN2 FLIRs with Cooled MCT Detectors // 8-5
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                             DISTRIBUTION STATEMENT A.
                                                                                                   Approved for public release; distribution is unlimited.




Although GEN2 MCT was based on LPE MCT, DARPA also                            TI and HAC SBRC (in spite of the DARPA investment at
funded GE, HAC, Rockwell, and TI to develop MBE, which was                    Honeywell) emerged as the two sources for second-gener-
initially developed at LETI-LIR in France in the late 1970s. This             ation scanning FPA technology. Their 480x4 FPAs formed
funding was one of the government’s first attempts to get                     the basis for tank FLIRs and an upgraded fire control FLIR for
competing companies to work closely together during the                       Army rotary-wing platforms (Figure 8-6). A smaller version
precompetitive phase of an emerging technology (Figure                        developed at TI was employed in the Javelin command
8-5). GE, Rockwell, and TI complied with the government’s                     launch unit. The GEN2 technology was more expensive than
intent and, as a result, several key technical hurdles were                   original estimates (some due to manufacturing cost and
overcome. But it would still take many years after this effort                some to over-specification by the Army) and to encourage
before MBE MCT would emerge as a production technology.                       competitive cost cutting, the Army paid Sofradir (France) to
                                                                              become a qualified supplier [49]. Costs came down, but by




Figure 8-5. President George Bush learning the basics of MBE MCT from Professor Jan Schetzina from North Carolina State University (NCSU). This custom
machine was an early U.S. attempt to explore this new technology funded by GE (later by DARPA) (Source: NCSU and BAE Systems ).




Figure 8-6. The principal GEN2 Common Module IDCA (Integrated Detector Dewar Assembly), (left), contained a 480x4 LWIR MCT FPA, (right), in a sealed
Dewar with cryocooler and drive electronics. The additional pixels on target and TDI feature provided a significant range advantage over GEN1 imagers
(Source: Laser Focus World [left photo] and Opto-Electronics Review [right photo]) [50].




Chapter 8. GEN2 FLIRs with Cooled MCT Detectors // 8-6
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                              DISTRIBUTION STATEMENT A.
                                                                                                    Approved for public release; distribution is unlimited.




now there was a French sensor technology with comparable                        and launchers were equipped with LWIR MCT 64x64 FPAs and
performance and fewer export restrictions. Any U.S. thermal                     LWIR 240x2 FPAs, respectively. The FLIRs on the M1 and M2s
imaging technology advantage of GEN2 was lost before it                         performed especially well, enabling U.S. forces to operate
was fully deployed. However, GEN2’s improved recognition                        under very severe sandstorm conditions and black smoke
range was a significant advance for U.S. forces.                                from burning oil wells. However, few sensors were fielded
                                                                                due to their higher-than-expected manufacturing cost. It
By the second Gulf War, a variety of U.S. platforms had been                    is noteworthy that the InSb FPAs in the Air National Guard’s
outfitted with FLIRs based on LWIR photovoltaic FPAs. Many                      F-16 targeting pods had been produced in Israel, which was
of these FLIRs were used in combat, including the M1A2                          a strong signal that the U.S. dominance in IR technology was
Abrams tanks and M2A3 Bradley Armored Personnel Carriers                        eroding.
(APCs) equipped with GEN2 480x4 LWIR MCT FPAs (Figure
8-7). In addition, F-16 and F-18 strike fighters were equipped                  The principal InSb imaging sensors included targeting pods
with 480x640 MWIR InSb FPAs, and C-130 Spectre gunships                         for the Navy (Raytheon, formerly HAC) and the Air Force/
were equipped with 240x4 LWIR MCT FPAs. Javelin missiles                        Air National Guard (Martin Marietta/Lockheed-Martin and
                                                                                Northrop Grumman). They included missile seekers, such
                                                                                as the Aim 9-X and others, by Raytheon/HAC and the Ter-
                                                                                minal High-Altitude Area Defense (THAAD) by FLIR Indigo.
                                                                                In addition, Raytheon provided the imaging tracker for the
                                                                                BAE Systems’ Advanced Threat Infrared Countermeasures
                                                                                (ATIRCM) directed countermeasure. L-3’s Cincinnati Elec-
                                                                                tronics division provided large-format InSb FPAs for proto-
                                                                                type surveillance sensors (Air Force and Navy) and the Joint
                                                                                Strike Fighter distributed-aperture sensor (DAS) for Northrop
                                                                                Grumman (Figure 8-8). A disadvantage of MWIR InSb was the
                                                                                requirement to operate at LN2 temperature, the same as for
                                                                                LWIR Common Module. MWIR MCT can achieve equivalent




Figure 8-7. Bradley GEN2 FLIR with 480x4 SADA II FPA. GEN2 was a signif-        Figure 8-8. F35 Distributed Aperture Sensor (DAS) employed multiple
icant improvement over GEN1 night sights and enabled engagement at              staring InSb-based FPAs. Larger-format arrays provided enhanced target
longer ranges with improved probability of target identification (Source: DRS   acquisition range allowing weapons platforms to engage from the relative
Technologies, Inc.).                                                            safety of higher altitudes (Source: U.S. Air Force).



Chapter 8. GEN2 FLIRs with Cooled MCT Detectors // 8-7
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                             DISTRIBUTION STATEMENT A.
                                                                   Approved for public release; distribution is unlimited.




performance at 120 K to 150 K, but as of 2014, the perceived
cost differential favored InSb, and most U.S. production MWIR
imagers and seekers remained InSb based.

8.6 SUMMARY

By the early 1980s, ROIC technology, including its hybrid mat-
ing with photovoltaic detectors, was advancing rapidly. This
fertile period began with a focus on MCT as the preferred
detector material and, by the mid-1990s, successful 2-D
scanning arrays of MCT were being manufactured. However,
MCT was still a challenging material to work with, and greater
success was being achieved in the design and manufacture
of InSb staring arrays. The next chapter describes GEN2 FPA
development with focus on the latter material, but it also
describes the development of uncooled FPAs that used other
materials including an entirely different detection mecha-
nism. The result was the availability of several FPA types. This
was a good outcome for the IR world since the various ma-
terials and detector types all had application domains where
their particular advantages were needed.




Chapter 8. GEN2 FLIRs with Cooled MCT Detectors // 8-8
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                               DISTRIBUTION STATEMENT A.
                                                                                                     Approved for public release; distribution is unlimited.




CHAPTER 9. GEN2                                                                 ing work with InSb that led to its development by SBRC
                                                                                for application in the F-14 IRST. SBRC also developed InSb
FLIRS WITH INSB AND                                                             detectors for space-based sensors that, because of security,

UNCOOLED FPAS, AND                                                              are still largely kept from public view. Presumably, spaced-
                                                                                based sensor development played a major role in maturing
SYSTEM PERFORMANCE                                                              InSb technology. Nevertheless, there were other major

MODELING ADVANCES                                                               contributors as well. Jim Wimmers, a principal founder of CE,
                                                                                which later merged with L-3, lived through the period of InSb
9.1 INTRODUCTION17                                                              advancement and chronicled many of the advancements
                                                                                made by CE and other companies for this history. His inside
The availability of indium antimonide (InSb) for detectors                      perspective, provided in this chapter, offers valuable histori-
enabled FLIR designs that were better optimized for airborne                    cal insights into the emergence of InSb.
ground-targeting applications. InSb enabled smaller and
lighter systems, lower costs, longer ranges in certain atmo-                    The development of uncooled FPAs is discussed following
spheres, and larger format FPAs. Likewise, the emergence                        the Wimmers-based InSb history, and the discussion re-
of uncooled, room-temperature18 FPAs had a major impact                         lies heavily on inputs from Marion Reine who was a close
in opening ground applications such as driver aids and rifle                    colleague of Paul Kruse, the inventor of microbolometric
scopes, but these FPAs also were well suited for small drones                   FPAs. Chapter 4 described Kruse’s key contributions to FLIR
and unattended sensors. Their development was remarkable                        development made possible by his MCT discoveries. Howev-
given the difficult struggle to accommodate cryocoolers in                      er, his uncooled FPAs were another breakthrough with a vast
FLIRs. But uncooled devices were ultimately the product                         impact on military uses but it also had civilian night vision
of GEN2 emergence since these devices would not have                            applications as well.
achieved practical sensitivity without the invention of the
focal plane multiplexer, the key enabling technology for all                    Finally, the last section describes the efforts made in FLIR
GEN2 FLIRs.                                                                     performance modeling and analysis. Many of the perfor-
                                                                                mance improvements promised by GEN2 FLIR technology
GEN2 systems also required extensive improvement to                             were not realized when they were first invented because of
existing models to make key design tradeoffs unique to                          the poor understanding of how human observers process
GEN2 FLIR characteristics. Those improvements, gained from                      fixed-pattern noise and by the failure of performance models
insights into human visual perception, allowed GEN2 FLIRs to                    to incorporate noise traceable to the human observer’s eyes.
realize their full potential.                                                   These model improvements were needed to fully under-
                                                                                stand, exploit, and optimize the performance made possible
The development of InSb detectors was much easier than                          by GEN2 FLIR technology.
that of MCT detectors. Section 4.5.2 described the pioneer-


17
  This chapter draws from the following sources as well as other references cited in the text. Content from these sources has been heavily edited and
merged by the authors.
 • Excerpts from Jim Wimmers (AVCO/CE/L-3): “Document Written for SENSIAC by Request” (with photos, edits, and release approval obtained with the
   assistance of Mark Greiner) [51].
 • Excerpts from Marion Reine (Honeywell/BAE/Infrared Detectors) with permission, “Paul W. Kruse (1927–2012), In Memoriam” [52].

18
   Use of the words “uncooled” and “room-temperature” are often used interchangeably but often “uncooled” FPAs were actually cooled with small, low-pow-
er thermo-electric (TE) coolers attached to the focal plane to keep them at room temperature.


Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                               DISTRIBUTION STATEMENT A.
                                                                                     Approved for public release; distribution is unlimited.




9.2 INSB FPA DEVELOPMENT [51]                                       zontally from a Czochralski-grown boule, then polished) were
                                                                    sealed in a glass ampoule with a small amount of high-purity
9.2.1 Early InSb Detector Fabrication and Applications
                                                                    cadmium. Elevated temperatures would evaporate the cad-
Cincinnati Electronics (CE) had been involved in defense-re-        mium, creating a partial pressure of cadmium vapor in the
lated IR detector technology since the 1960s. At the time, it       sealed ampoule, resulting in a highly compensated p-type
was part of the AVCO Corporation and had a systems group            layer on top of the n-type substrate. Chemical etch-resistant
that dealt primarily in radar systems. The group’s experience       photo-resist was applied to the surface to create the desired
in radar sensors probably enabled it to receive a develop-          detector shape and size. Similarly, photolithographic tech-
ment contract from the U.S. Air Force to investigate the feasi-     niques were used to apply metal contacts to the individual
bility of using IR detectors as part of a Tail Warning System for   elements.
the F-111 Fighter/Bomber. The program eventually became
known as the Counter Measures Receiver Set and later was            Detectors from that late 1960s era did not have a well-
given the nomenclature AAR-34. It is believed to be one of          defined active area. IR radiation could be absorbed
the first major systems to use InSb detectors. It consisted of      10–20 µm laterally displaced from the p-n junction itself,
several InSb high aspect ratio detector elements placed end-        and the minority carrier that was created could diffuse to the
to-end.                                                             junction and still create a photocurrent. This design gave the
                                                                    appearance of a wider, lower QE detector and limited how
InSb detector fabrication was first developed in the 1960s          close detectors could be placed in an array without crosstalk
by Ford-Philco, but the fabrication method was considered           issues. The early solution to this problem was to expand the
crude by almost any standard. An InSb boule was pulled              contact pads to cover most of the semiconductor surface.
using the Czochralski growth method from a molten mass              This solution created other problems in that the contact pads
of indium and antimony, with a small amount of tellurium            could not be continuous for obvious reasons, and the gaps
to make it n-type. As the boule was being pulled from the           between them still allowed photons to enter the detector
melt, cadmium was added to the melt to make it p-type, so           material. The area under the metal contact created a deple-
that the final boule had a hemispherical dome in the middle         tion zone with very high diffusion length. Consequently,
where the transition from n- to p-type occurred. The boule          minority carriers that previously would diffuse only
was cut lengthwise into planks, polished and electrochemi-          10–20 µm could move 100s of micrometers, creating signal
cally stained to identify the p-n boundary. The plank was cut       spurs further away than the ones the design was trying to
into bars so that each had a p-n junction near the center, and      eliminate. Also, the added capacitance of the enlarged con-
five bars were mounted side by side to produce a five-ele-          tact pad added to the thermal (kTC, or Boltzmann’s constant
ment array.                                                         x temperature x capacitance) noise of the signal chain. Later,
                                                                    another solution was devised that would benefit large-for-
After initially purchasing the devices from Ford-Philco, CE         mat arrays. A grounded metal layer was constructed that
brought the process in house. Then in the late 1960s, a CE          covered the whole of the array, exposing only the top surface
research team developed a more reliable, less labor-intensive       of the p-layers, thus creating well-defined, active areas with
method of fabricating arrays using closed-ampoule gaseous           extremely uniform response. This was known at CE as the
diffusion and photolithography techniques. The process was          buried metallization technique.
developed by a CE research team headed by Dr. Norrn Gri,
who later worked at SBRC. Many of the processes devel-              Missile Applications. A later version of the original Side-
oped are still used today in the manufacture of InSb FPAs. In       winder Air-to-Air Missile (AIM9-L) replaced lead salt detectors
closed-ampoule gaseous diffusion, n-type wafers (cut hori-          with InSb in the early 1970s. These were single-element


Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                      DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                 DISTRIBUTION STATEMENT A.
                                                                                                       Approved for public release; distribution is unlimited.




detectors used in a reticle scan seeker head. The detector                        phenomenon, whereby when operated at 4 K for prolonged
was in a small, evacuated Dewar assembly, cooled by a                             periods, the detectors’ resistance-area (RoA) product would
Joule-Thompson cryostat. As of 2012, AIM9-L Sidewinder                            gradually degrade, which would lead to higher output noise.
missiles were still used by the U.S. Navy.
                                                                                  Keith Matthews, an astronomer at Cal Tech, developed a
Another large-volume program started in the late 1970s                            procedure of exposing the detector to 1.25-µm radiation be-
when General Dynamics Missile Division in Pomona (and                             fore initiating measurements; this process was referred to as
later Rancho Cucamonga) began the Stinger Missile (FIM-92)                        “J-lashing.” He observed that this process increased the RoA
program. In this program the detector was mounted on an                           product of the detector by more than an order of magnitude.
unevacuated stem and cooled with a J-T cryostat. The seeker                       He speculated that the surface states at the termination of
head was sealed and back-filled with dry nitrogen, so the                         the p-n junction were causing a low impedance path around
detector could be cooled for short periods of time without                        the main active area of the diode. Exposing the detectors
moisture condensing on the detector surface. The earliest                         to J-band radiation apparently emptied these surface states
version of this missile seeker used a large-diameter InSb sin-                    and improved the detector impedance. He also noted that
gle-element detector and a reticle scan, although later ver-                      over time the RoA product would gradually decrease as the
sions would use a smaller-diameter InSb element combined                          surface states filled up again.
with a UV detector and employed a rosette scanning tech-
nique. This program had detector assemblies built by both                         However, CE InSb detectors did not exhibit this phenomenon
CE and Raytheon. Over 70,000 Stinger missiles were built.                         of gradually lower impedance during operation. Moreover,
Programs such as Sidewinder and Stinger and the AAR-34                            they did not respond to J-flashing and had extremely high
were responsible for expanding the industrial base for InSb                       impedance without it and not only at zero bias. The detec-
detectors in the 1970s and 1980s, allowing more reliable,                         tors functioned well even in reverse bias, with low leakage
repeatable fabrication processes, and increasing the starting                     currents for several hundred millivolts. It was concluded that
wafer size from less than 1 in. in diameter to several inches.                    because the grounded metal layer was being applied over
                                                                                  the edge of the mesa where the p-n junction terminated, the
9.2.2 Near IR Mapping Spectrometer (NIMS) and Galileo                             nature of the surface states changed enough that they were
                                                                                  either unoccupied or nonexistent. Further studies showed
CE became involved in the IR astronomy community when
                                                                                  that biasing the metal layer rather than grounding it im-
the Jet Propulsion Laboratory (JPL) awarded CE a contract to
                                                                                  proved the reverse bias characteristics, although this would
build the NIMS Detector Assembly, an instrument that would
                                                                                  prove to be difficult to implement in large, multi-element
fly on the Galileo spacecraft to Jupiter. Impressed with the
                                                                                  arrays.
stability and high RoA 19 of CE’s detectors, astronomers at
Cal Tech began using them for Earth-based instruments as                          CE’s contact at JPL, Gary Bailey, was interested to know how
well. At the time, InSb detectors were used for radiometry,                       uniform the characteristics of linear InSb arrays would be as
measuring the irradiance of stars at various wavelengths in                       opposed to just single elements. He then commissioned a
the 1–5 µm range. With no need for small size or portability,                     program to build an array of 0.008 x 0.008-in. elements as
astronomers could cool the detectors using liquid helium to                       long as the existing wafer technology would allow, which
4 K. Prior to this time, InSb detectors exhibited an unusual


19
   R-naught x A [or detector resistance (Ro) x area product (A)] is a performance metric wherein a high RoA is desirable in photovoltaic detectors to provide
high impedance.


Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                              DISTRIBUTION STATEMENT A.
                                                                                                    Approved for public release; distribution is unlimited.



was only about an inch. The resulting arrays demonstrated                          new nomenclature (reset voltage, integration time, leakage
that 64-element arrays could be fabricated that had respon-                        current, etc.) quickly developed that is commonly used today.
sivity uniformity of a few percent and uniformly low leakage                       Of course, nearly all modern commercial cameras for visible
current in reverse biases of as much as 500 mV.                                    light use this switched capacitor technology in their FPAs.

About the same time, Bailey became aware of a company                              Bailey quickly made the connection that this linear array
named Spiricon that offered a product with 32 and 64-ele-                          readout device could be used with InSb linear arrays. A few
ment multiplexed linear arrays of silicon photodiodes. The                         test devices were made by wire bonding the InSb detector to
device was sold as a method to profile laser spots. Unlike                         an exposed contact near the silicon diode. The silicon diodes
more complex CCDs that were common at the time, these                              were small in comparison and had negligible leakage current
devices were “switched capacitor arrays” (capacitive dis-                          in comparison to the InSb diode but, so long as the assembly
charge arrays). They relied on a single MOSFET switch to                           was filtered to pass only IR radiation, the only photocurrent
connect a single silicon photodiode (fabricated on the same                        generated was from the InSb detector. This multiplexer that
substrate) to a common readout line, and a clocking circuit                        Spiricon sold was actually manufactured by another compa-
allowed each sequential MOSFET to connect its associated                           ny, Reticon. CE and JPL approached Reticon and had a multi-
photodiode, or detector, to the common output. For each                            plexer made, eliminating the silicon photodiode and adding
sequential connection, the detector was biased to a specific                       a bond pad to facilitate connection to the InSb array. The
negative voltage, and then disconnected. For the period of                         resulting hybrid structure demonstrated the efficacy of the
time until the detector would be reconnected to the com-                           switched-capacitor readout technique for uniform, high-im-
mon output, incoming radiation generated a photocurrent                            pedance InSb detectors. Until this time, readout circuits were
that reduced the negative bias of the silicon photodiode.                          almost always discrete, transimpedance amplifiers. Each
When the detector was again connected to the common                                amplifier had individual junction gate field-effect transistors
output, the new voltage would be read and the voltage                              and feedback resistors for each detector channel, as in the
difference from the original voltage was almost linear with                        17-channel sensor package built for the NIMS instrument
the incoming radiation. It is interesting to note that a whole                     (Figure 9-1) on Galileo. CE sold several of these multiplexed




Figure 9-1. Galileo satellite with IR detector array for the NIMS (Source: L-3).




Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-4
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                           DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                      DISTRIBUTION STATEMENT A.
                                                                                            Approved for public release; distribution is unlimited.




linear array devices as a standard product primarily for as-              Of course, each company had a detector capability as well,
tronomy applications, and used the nomenclature integrated                primarily MCT, since most military FLIRS were made of long
multiplexed hybrid (IMH) array or IMH-32, IMH 64, and IMH-                wave MCT. Bump bonders were commercially available
128. JPL also contracted CE to build a 512-element switched               since they were being used in flip chip ICs, but they cost
capacitor array as the sensor package for the visible/IR map-             several hundred thousand dollars each. Similarly, arrays,
ping spectrometer (VIMS) instrument (Figure 9-2) that flew                once bump bonded, had to be thinned to a thickness on the
on the Cassini spacecraft that went into orbit around Saturn.             order of 10 µm, so photons would not create carriers too far
                                                                          away from the p-n junction area, lest they recombine before
                                                                          being swept across the junction. The only available thinning
                                                                          technique at the time was diamond turning, and diamond
                                                                          turning systems cost between $500,000 and $1 million. The
                                                                          combined cost of those two systems alone was three to four
                                                                          times more than the annual capital budget of CE’s detector
                                                                          group (CE’s main line of business at the time was still military
                                                                          communications). CE had made inquiries to several of the
                                                                          major defense companies, but for obvious reasons they were
                                                                          unwilling to sell multiplexers to companies they viewed as
                                                                          competitors. CE did not see a pathway to participating in this
                                                                          new technology.

                                                                          For several years, these companies dominated the 2-D IR
                                                                          industry. For the most part, the devices being developed
                                                                          were mid-wave and long-wave MCT arrays, since the fund-
Figure 9-2. Multiplexed InSb detector array for the VIMS (Source: L-3).
                                                                          ing source was primarily the U.S. Army. The conventional
                                                                          wisdom at the time was that mid-wave MCT could eventually
The commercial viability of these linear array devices was                be made to operate at high enough temperatures so that a
short-lived, as the age of 2-D staring arrays was now begin-              cryocooler would not be required. SBRC made an InSb array,
ning. Nevertheless, the demonstration of a direct input,                  but its intended market for that device was IR astronomy
switched capacitor technique would prove critical to CE’s                 and was operated at liquid helium temperatures (4 K). Then
later successes.                                                          several events led to CE’s entrance into the market:

By the late 1980s, a few of the larger companies (Rockwell,               1.   The understanding of the importance of spatial noise.
HAC SBRC, TI) began producing the first 2-D arrays. Several               2.   The growth of a “cottage industry” of self-employed IC
key technologies were required to build an array, and only                     multiplexer designers.
this small group had the internal sources for these tech-
                                                                          3.   The establishment of stand-alone silicon foundries.
nologies. The capital equipment requirements were also
                                                                          4.   The development of a novel front side illuminated array
prohibitive to small companies or small groups within larger
                                                                               that did not require diamond turning as a thinning
companies. The most important element was a source for
                                                                               technique.
2-D silicon multiplexers. Each of these three companies had
                                                                          5.   The availability of miniature, low-power cryocoolers.
internal silicon integrated circuit (IC) foundries (and in-house
IC designers) that could develop and build the multiplexer.


Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-5
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                DISTRIBUTION STATEMENT A.
                                                                                      Approved for public release; distribution is unlimited.




9.2.3 Spatial Noise                                                 temperature variations as well. Clearly objects could be
                                                                    detected with the low-sensitivity PtSi array that could not be
Most of the technical conferences at the time were dominat-
                                                                    seen in MCT arrays with sensitivities sometimes two orders
ed by the major companies (Rockwell, HAC SBRC, TI), and the
                                                                    of magnitude greater. Normally the variation in signal of a
focus was primarily on improved sensitivity, measured by
                                                                    single detector due to its electrical noise could be expressed
detectivity, or D-star (D*). This was the common method of
                                                                    as how much of a temperature difference in the scene would
determining the quality of single-element and linear arrays.
                                                                    be required to produce the same signal amplitude. That
For at least a year, the performance of 2-D FPAs was shown
                                                                    metric became the standard noise equivalent temperature
at these conferences as a histogram of the individual D* of
                                                                    difference (NETD). Now it quickly became understood that a
each element. The quality of an array was represented by
                                                                    new method of determining the quality of an imaging array
measurements such as the average D* and the minimum
                                                                    would be necessary. The “spatial noise” or variation in gain
D* of 99% of all the elements. A few static images might be
                                                                    or offset between each element of an array was as important
shown, but it would be a few years before real-time video
                                                                    to consider as the electrical noise of each individual element.
processing would make video possible. For unlike silicon im-
                                                                    The new metric that would be used would be the “spatial
aging arrays whose signal variation from element to element
                                                                    noise equivalent temperature difference” or spatial NETD.
was less than a percent, the responsivity and offset values of
                                                                    Consequently, NETD due to individual detector/readout
each individual element in an IR array varied significantly and
                                                                    circuit noise was added in quadrature to the nonuniformi-
required each element to be corrected with a unique gain
                                                                    ty-based spatial NETD to result in a total NETD of the FPA.
and unique offset value. There were no processors that could
                                                                    It was then easy to understand why the PtSi FPA imagery
do this in real-time.
                                                                    looked better than its MCT-based counterparts of the time.
                                                                    While the early MCT FPAs had very low detector-based NETD,
A group from Hanscom AFB, led by Dr. Freeman Shepard,
                                                                    that NETD was overwhelmed by the high spatial NETD due
had been working on an alternative technology—platinum
                                                                    to nonlinear gain and gain drift with operating temperature.
silicide (PtSi). Their approach was to fabricate a PtSi Schottky
                                                                    On the other hand, PtSi arrays had very low spatial NETD, and
barrier diode directly on the surface of the silicon multiplexer.
                                                                    were limited instead by their detector NETD, which was lower
The resulting structure produced an array with high opera-
                                                                    than the spatial NETD of the MCT FPAs.
bility and excellent uniformity, but with only ~1% quantum
efficiency. It also eliminated the need for bump bonding
                                                                    After array nonuniformity effects started to be understood,
and hybrid structures. So, while the MCT companies were
                                                                    nonuniformity “correction” techniques began to be applied.
reporting D* values of 10E10 and 10E11, Shepard’s group
                                                                    One of the first techniques used to correct arrays was to place
was showing only 10E8 and 10E9. Many competing groups
                                                                    a uniform, low-signal source in front of the array, record the
did not consider the work competitive, and in some cases, it
                                                                    signal of each element, and repeat using a uniform, high-sig-
was derided. It was not until real-time imagery of higher D*
                                                                    nal source. (In some cases, it was as rudimentary as using
arrays was available and began to be reported that the real
                                                                    white and black pieces of cardboard.) The measured values
value of Shepard’s approach was understood.
                                                                    for slope and offset were the equivalent of gain and bright-
                                                                    ness, and two corresponding constants for each element
Wimmers [51] remembered the stunned silence in the room
                                                                    could be stored in memory and used to correct the output
when the first PtSi video images were shown at an IRIS
                                                                    as each element was read out of the array. This process was
conference. Because of the purity of Si available for Si-based
                                                                    referred to as a “two-point correction,” as illustrated in Figure
Schottky diodes, responsivity and dark current were excep-
                                                                    9-3. While it eliminated the vast majority of the nonunifor-
tionally uniform and remained uniform over FPA operating
                                                                    mities in the images, it had several limitations. Most impor-

Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-6
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                       DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                  DISTRIBUTION STATEMENT A.
                                                                                                        Approved for public release; distribution is unlimited.




Figure 9-3. NUC Process (Source: Georgia Tech ITA course notes [1] as adapted from Metschuleit et al., Amber Engineering).



tantly, the actual gain (or slope) for most ternary and binary                    However, the PtSi FPA technology was short lived. Only one
devices was not linear, so while an image might be corrected                      major program used a PtSi FPA, the B-52 FLIR. Mitsubishi
for a given scene, a slight increase or decrease in the tem-                      developed an imager using PtSi, which was an early commer-
perature of the scene would immediately create very notice-                       cial success. But the approximately 1% quantum efficiency in
able nonuniformities in the image. Also, slight variations in                     the mid-IR range was the limiting factor for PtSi-based FPAs,
the operating temperature of the array would change the                           and they were overtaken in performance by other detector
characteristics of the individual diodes and lead to the same                     technologies once the spatial NETD issues were understood
result. The first video images of MCT arrays exhibited many                       and solved. Nevertheless, the PtSi FPA performance showed
of these limitations, with grainy images being the result, even                   the IR community that they needed to focus more attention
with high D* values. It was not until later, when calibration                     on a heretofore never measured parameter, namely spatial
sources were mounted inside the FLIR and used for in-field                        NETD. And because InSb detectors were binary compounds
nonuniformity correction (NUC) implementation and up-                             and more well behaved than their ternary equivalent in the
dates, did systems finally begin to control and limit fixed-pat-                  mid-IR (MCT), these merits would pave the way for InSb FPAs.
tern noise to levels reliably below detector temporal noise.
                                                                                  9.2.4 Multiplexer Designers and Si IC Foundries
PtSi FPAs had another significant advantage at the time. Be-
                                                                                  As stated in Section 9.2.2, only a few defense companies
cause they were monolithic devices, they were not affected
                                                                                  had the internal resources to design and fabricate their
by problems caused by the differential coefficient of expan-
                                                                                  own readout devices. But that situation began to change
sion of silicon and the material from which the detector was
                                                                                  as companies such as Orbit Semiconductor, Inc. began to
made, whether MCT or InSb. As a result, PtSi FPAs were being
                                                                                  process designs for outside customers. At the same time, the
made that were as large as 512x512, when the largest hybrid
                                                                                  Pentium microprocessor was making the custom, IC-design
arrays were still 128x128.
                                                                                  workstation obsolete. A single, high-end PC was capable of
                                                                                  generating a circuit and mask set design for very complex

Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-7
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                               DISTRIBUTION STATEMENT A.
                                                                                     Approved for public release; distribution is unlimited.




ICs. As a result, multiplexer designers that had been em-           polishing systems through their involvement with the Stinger
ployed by larger, vertically integrated companies were no           program that used a UV detector that was thinned to a few
longer constrained by the significant capital investment of         hundred micrometers. CE personnel had tried unsuccessfully
a design workstation. And, with the rise of semiconductor           to use this equipment to thin InSb to the required thickness;
foundries, there was a demand for multiplexer designers’            uniformity across a single device could not be achieved. (The
services outside of their present employer. Several multi-          polishing process had only approximately 10-µm uniformity,
plexer designers struck out on their own, formed companies,         and that was the required thickness of the end structure.)
and a cottage industry for IC design developed. Several of
the early companies included Walmsley Microelectronics,             Then one of CE’s process engineers (Al Timlin) conceived of
Augustine Engineering, Black Forest Engineering, and Valley         an approach, circa 1993, to resolve the polishing problem.
Oak Semiconductor.                                                  He suggested epoxying a whole InSb wafer of 2-D arrays
                                                                    to a sapphire substrate, with the detector side facing the
As CE was developing the design described in Section 9.2.5,         sapphire. Since both the epoxy and sapphire were transpar-
they also contacted Charles Walmsley of Walmsley Micro-             ent to most of the MWIR, the other side could be thinned to
electronics in Scotland and commissioned him to design              40 µm using the lapping/polishing equipment. Then, the
and build a multiplexer based on the switched capacitor             remaining material between the active elements could be
circuit that CE used in its linear multiplexed arrays (the design   selectively chemically etched, until all that remained were
was based on the processing design rules for a foundry in a         individual InSb p-n junctions each held to the host substrate
Marconi facility in England, but the identical design would         by epoxy. (This meant that the InSb array would not have
later be fabricated by Orbit Engineering in the United States).     the thermal expansion/contraction properties of InSb at
The design and fabrication of the original batch run of these       all, since the diodes were now mechanically isolated, but
64x64-cell multiplexers would cost very little and were com-        rather would have the properties of the host substrate, a fact
pleted in a few months from the time of the initial contract        that would be exploited in later years for very large arrays.)
award.                                                              Another grid of “grounding lines” was applied using standard
                                                                    photolithographic techniques to electrically reconnect all the
9.2.5 CE’s Novel 2-D FPA Design                                     diodes. Figure 9-4 illustrates the overall configuration. So
                                                                    now instead of a p-on-common-n structure, the new device
Although multiplexed readout structures were becoming
                                                                    was n-on-common-p. The original attempt to implement
more available, CE’s detector group still lacked the capital
                                                                    this structure was performed on a 64x64 array of elements
equipment necessary to fabricate the 2-D InSb detector array.
                                                                    on 100-µm centers. It worked the first time. This first device
The standard process then (still in wide use as of 2012) was to
                                                                    was fabricated by Chuck Martin, a CE process technician. Mr.
fabricate a 2-D array of photosensitive junctions, then indium
                                                                    Martin would continue to develop 2-D array processes for CE
bump bond them to the corresponding multiplexer device.
                                                                    over the next 25 years.
The remaining space between the two materials (silicon
multiplexer and InSb or MCT array) that was not filled with
                                                                    These first devices were built on sapphire substrates, not only
the indium bumps was backfilled with a rigid epoxy mate-
                                                                    because they were transparent in the MWIR, but also because
rial to add mechanical rigidity and support. Then the InSb
                                                                    it was necessary to be able to see the front side of the array
array was thinned to approximately 15 µm using a diamond
                                                                    for alignment during processing and bump bonding. This
turning machine. CE’s detector group did not own and could
                                                                    worked well enough for the original devices, but after 100
not afford a diamond turning system. However, CE at the
                                                                    cryo cooling cycles, the arrays would begin to delaminate
time had extensive experience with Logitech lapping and
                                                                    in the corners. This of course was due to the difference in


Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-8
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                           DISTRIBUTION STATEMENT A.
                                                                                                 Approved for public release; distribution is unlimited.



                                                                                were notorious for developing their own custom drive and
                                                                                readout circuitry to minimize noise in low-background appli-
                                                                                cations, so no market was envisioned for drive and readout
                                                                                electronics). At the same time, Diversified Optics (DIOP) was
                                                                                beginning to sell a low-cost, 50-mm IR lens (approximately
                                                                                $2,000). CE found that it could mount the array in a relatively
                                                                                small LN2 test Dewar, attach the DIOP lens and the elec-
                                                                                tronics it had designed for its own test and evaluation, and
                                                                                sell the resulting package as a low-cost IR camera. The first
                                                                                product was the IRC-64 and sold for less than $17,000. CE
                                                                                sold enough of these cameras to demonstrate that there was
                                                                                a commercial market for 2-D IR cameras. The experience pro-
                                                                                vided enough interest to convince CE to continue develop-
                                                                                ment of larger arrays that were introduced as the IRC-160 and
                                                                                the IRC-256. Note that the commercial market was important
                                                                                in the early days of InSb IR cameras, as the DoD had not yet
                                                                                shown an interest in this product.
Figure 9-4. Front side illuminated and reticulated IR detector array from L-3
CE patent 5,227,656, 13 July 1993 (Source: L-3).
                                                                                9.3 DEVELOPMENT OF GEN2 UNCOOLED DETECTORS

coefficients of expansion between sapphire and silicon.                         9.3.1 Invention of the Microbolometer [52]
While it was a lifetime-limiting feature for the 64x64 arrays,
it caused delamination immediately in the next-generation                       The development of MCT was not the only revolutionary
160x120 element devices. It was clear to CE engineers that if                   development pioneered by Paul Kruse during his distin-
the “Frontside Illuminated Array” process was going to work,                    guished career at Honeywell Corporate Research Center. The
the host substrate that the InSb was built on would have                        second of Kruse’s two revolutionary developments was the
to have a much closer CTE match to silicon. The only real                       silicon-based microbolometer array. In the early 1980s, Kruse
alternative was to use silicon as the host substrates. After                    and his Honeywell colleagues pioneered the integration of
finding a work-around for the alignment issues, CE began                        silicon microbridge bolometer detectors with CMOS ICs to
building all of its 2 D arrays with silicon substrates. Because                 develop the first uncooled IR FPAs. The Honeywell Solid State
there was now an exact match between the two materials on                       Electronics Division, Honeywell’s in-house silicon foundry,
both sides of the indium bumps, CE’s design was uniquely                        had developed silicon microbridge devices originally for gas
suited to extremely large arrays and would provide a strate-                    flow sensors. In the early 1980s, Kruse recognized that the
gic advantage in this market niche.                                             high thermal isolation of the microbridge architecture was
                                                                                exactly what was needed for a high-performance, uncooled
The original target market for the 64x64 array was IR astron-                   bolometer IR detector. The early development of the un-
omy, and the product was introduced as the IMH-64 and sold                      cooled microbridge IR detector is described in a book chap-
as an array only. It was not well received, as CE was too late                  ter by Kruse’s Honeywell colleague and collaborator, Andrew
to the market (SBRC had already developed and sold a 64x64                      Wood. The following quote from Wood’s chapter, “Monolithic
array to the astronomy community). Fortunately, around the                      Silicon Microbolometer Arrays,” describes the role that Kruse
same time, CE had developed a compact set of electronics                        played in initiating the uncooled microbridge array technolo-
with which to conduct its own imaging tests (IR astronomers                     gy in Honeywell [53]:


Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-9
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                 DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                            DISTRIBUTION STATEMENT A.
                                                                                                  Approved for public release; distribution is unlimited.




       Kruse (1982) showed by calculation that Si micro-                      and the underlying multiplexer circuit. That gap established
       machined microbolometers could have a perfor-                          the desired conduction barrier. Figure 9-5 illustrates the
       mance approaching the ideal performance for a                          geometry including the legs that both support the detection
       room temperature IR sensor, and proposed their                         layer and provide circuit access.
       construction as two-dimensional staring focal
       planes for low-cost uncooled IR imaging.                               However, in addition to the Honeywell bolometer approach,
                                                                              a ferroelectric approach was also developed for uncooled
Kruse and his Honeywell colleagues Wood, Bob Higashi, Bob                     thermal detector FPA design. It too exploited GEN2 multi-
Johnson, C. J. Han, and others pioneered the integration of                   plexer and mechanical isolation technology. So at least two
silicon microbridge bolometer detectors with CMOS ICs to                      uncooled thermal detector types were used: ferroelectric
develop the first uncooled IR FPAs. Uncooled microbolome-                     and bolometric. Ferroelectric detection used barium stron-
ter FPA technology advanced rapidly, and eventually mi-                       tium titanate, which was developed in the 1970s at TI. It
crobolometer FPAs entered high-volume production as the                       worked on the principle that a temperature change caused
premier technology for low-cost thermal imaging sensors for                   realignment of unbalanced charges in the material’s structure
a wide variety of both commercial and military applications.                  and subsequently caused current flow. Bolometric detection,
                                                                              on the other hand, measured a resistance change caused
9.3.2 Other Significant Historical Developments in                            by the temperature change. Bolometric designs ultimately
Uncooled Detectors                                                            provided better performance. In bolometer detectors (now
                                                                              called microbolometers) a layer of material that exhibits high
For uncooled detectors, the key enabler for GEN2 devices was
                                                                              resistance change with temperature (i.e., high temperature
again the multiplexer, but there was also one very important
                                                                              coefficient of resistance) was used for the detector layer.
breakthrough in detector design: the ability to isolate the
                                                                              Temperature change was then sensed by pulsing a current
detector from its surroundings. To work at their highest ef-
                                                                              through that layer to measure the resistance change. Most
ficiency, the detectors needed to be thermally isolated from
                                                                              microbolometers used vanadium oxide, but many also used
their immediate surroundings. The Honeywell microbridge
                                                                              amorphous silicon as the temperature-sensitive layer.
approach discussed in Section 9.3.1, accomplished that iso-
lation by micromachining a gap between the detection layer




Figure 9-5. Microbolometer FPA showing microbridge design (Source: Georgia Tech ITA course notes [1] as adapted from R. A. Wood [53]).



Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-10
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                               DISTRIBUTION STATEMENT A.
                                                                                     Approved for public release; distribution is unlimited.




Uncooled detector FPAs did not perform as well as cooled           system psychophysical factors involved in viewing fast fram-
FPAs, but they offered lower cost in smaller, lighter packages     ing video information display. Their work was captured in an
and still provided performance comparable, or better than,         NVL computer modeling code by James Ratches [41] and his
GEN1 FLIRs with cooled detectors. Those features opened            colleagues at NVL [25]. It was used extensively for optimizing
up a wide range of applications that would not have been           GEN1 FLIRs including the writing of design manuals [46].
as viable had cooled devices been the only option. Such
applications ranged from man-portable rifle sights to night        However, early models were not adequate for predicting
driver aids to missile seekers. Automobile manufacturers           the performance of GEN2 FLIRs. One problem was that
found them compelling enough that General Motors, circa            GEN1 models were largely optimized for one-dimensional,
2000, offered them as a $5,000 extra cost option on Cadillacs.     horizontal-scanning, linear arrays, and not for 2-D, staring,
Others followed, and commercial applications soon opened           FPA-equipped imagers. Moreover, the GEN2 FLIRs were so
up ranging from security cameras to night vision devices for       much more sensitive that their temporal noise levels were
law enforcement.                                                   now comparable to those found in the human eye. Therefore,
                                                                   human eye noise levels had to be understood and included
9.4 ADVANCEMENTS IN FLIR MODELING AND ANALYSIS [1]                 in the noise models. In addition, temporal noise was at first
                                                                   smaller than spatial noise until techniques were developed
9.4.1 FLIR Modeling Developments Overview
                                                                   to suppress the latter and until criteria were developed to
The development of analytical tools to predict the perfor-         determine how much suppression was required.
mance of FLIRs played a significant role in both optimizing
FLIR system parameters (focal length, aperture size, video         Spatial noise was noticeable in scanned GEN1 FLIRs as well,
bandwidth, display design, etc.) and focusing attention on         but it was only in the vertical direction since each horizontal
key component technologies where improvement would                 scan line was generated by a different detector. Even then
provide the most system performance. This section address-         detector/amplifier/LED response differences were largely
es recent advances such as in optimizing GEN2 designs by           compensated for by factory-set, field-maintainable, potenti-
understanding the important effects of fixed-pattern noise         ometers that reduced channel imbalances. But residual im-
(FPN, also called spatial noise, as previously discussed in        balances still existed in the vertically arrayed raster lines due
Section 9.2.3) display size/viewing distance, observer filtering   to drift over time, temperature changes, etc. More important-
of FPN, and the effects of observer eye noise. Without this        ly, the pixel dwell time of the scanning detectors was much
understanding , as captured in FLIR performance prediction         shorter than in GEN2 staring detectors so the former had less
models, GEN2 FLIRs could not have reached their full poten-        exposure to the background flux and thus correspondingly
tial. Finally, new FLIR designs and optimal utilization of past    lower FPN. While the GEN1 vertical FPN was smaller, it was
FLIR generations still in-service have benefitted from ongo-       also less noticeable due to both the much higher apparent
ing studies of the significant impact that background clutter      temporal noise of the GEN1 FLIR and the scan line raster
plays in observer target acquisition. Those studies, with their    structure itself. Finally, models only addressed GEN1 perfor-
findings and conclusions, are also addressed in this section.      mance in the horizontal scanning direction so vertical FPN
                                                                   was not even accounted for.
9.4.2 System and Observer Noise Modeling for GEN2
FLIRs                                                              Surprisingly, when early GEN2 FLIR performance was first
                                                                   measured in the field, it was found to be substantially less
As mentioned in previous chapters, Fred Rosell, Bob Sendall,       than what was predicted by existing models. The main
and others pioneered the understanding of human visual             reason was the poor understanding of the effect of FPN


Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-11
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                               DISTRIBUTION STATEMENT A.
                                                                                     Approved for public release; distribution is unlimited.




on overall observer noise perception [54] and subsequent           required pilots to fly at high altitudes so they had a clear
underestimation of its impact. That impact included the            line-of-sight to their targets, i.e., one not obscured by tree
debilitating effect of amplifier boost or aperture correction,     lines and hills or other masking obstacles. But then enemy
i.e., the process of preferentially increasing amplifier gain at   radar and optical air defense systems could more easily spot
higher frequencies to mitigate resolution roll-off due to such     and shoot them down. It was critical that pilots be able to
effects as optical diffraction and detector size. GEN1 FLIRs       quickly locate their targets to minimize their exposure to
used high levels of boost but only applied it in the horizon-      enemy defenses. Hence, it was important to not only know
tal scan direction since that was all they could effectively       where to look, but to know what characteristics of the target
do with horizontally scanned discrete detectors and analog         to look for. For instance, was it positive or negative contrast?
electronics. So, there was no amplification of the FPN. Now,       Would it have a strong, positive contrast signature, such as
since GEN2 FPAs had nonuniform detector response in the            an armored air defense unit that had been exposed to solar
horizontal direction as well, high-frequency gain also prefer-     heating all day? In the latter case, its heavy armor would
entially increased the FPN which, in turn, imposed a limit on      retain heat long after a lighter foliage background cooled
how much gain was useful.                                          off at night. Or would it have a strong negative contrast,
                                                                   after the sun came up in the morning? In this case, it would
Human factors research conducted at the Army NVESD                 take much longer for heavy armor to heat up than would
(formerly NVL) by John D’Agostino and Curtis Webb [54]             the much lighter background foliage. Such information was
provided the scientific basis for model improvements with          even more critical for the mission planner because it would
assistance from Richard Vollmerhausen [private communica-          allow them, with the benefit of TDA software, to predict the
tion, circa 2006], Barbara O’Kane, Mel Friedman, and others.       range at which the pilot could detect the target so they could
Ronald Driggers et al. [55] and many others at NVESD, ONR,         “popup” at that range and thus minimize the time they would
and U.S. Army Training and Doctrine Command [25] captured          spend exposed to enemy fire. Many phenomena had to be
and extended these later findings in greatly improved com-         included in the TDA software such as weather predictions
puter codes that allowed GEN2 FLIR designs to be further           and their effect on signature generation and propagation. Of
optimized and thus come closer to realizing their potential.       course, FLIR performance characteristics would be critical.

9.4.3 Background Clutter Modeling                                  The Avionics Laboratory at Wright-Patterson AFB asked
                                                                   co-author David Schmieder if he and his employer, Georgia
A key gap in FLIR performance prediction analysis and mod-
                                                                   Tech Research Institute, could provide FLIR modeling help
eling was recognized in the early 1980s when the Air Force
                                                                   based on his industry experience modeling and designing
initiated a program called the Tactical Decision Aid (TDA).
                                                                   FLIRs while employed at Martin Marietta, now Lockheed Mar-
While the program started in that period, it initiated a long
                                                                   tin. Schmieder accepted the assignment but realized that
series of research programs that were greatly expanded over
                                                                   then-current performance prediction models were missing
the ensuing decades and were still ongoing at the time of
                                                                   critical FLIR performance criteria necessary for the TDA. That
this book writing. The goal of the TDA program was to pro-
                                                                   missing criteria included the resolution required by a FLIR
vide mission planners with a prediction tool that would allow
                                                                   to allow the operator to perform target detection in varying
them to prebrief pilots on critical aspects of their targeting
                                                                   degrees of background clutter. The venerable Johnson bar
process. With the proliferation of airborne FLIR targeting
                                                                   target equivalency resolution criteria for target detection
systems, it soon became apparent that pilots and/or their
                                                                   did not control for background clutter, nor was there even a
weapons system operators (WSOs) needed help because
                                                                   metric that could characterize and quantify clutter.
their survival depended on it. The targeting process often


Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-12
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.




The Air Force Avionics Lab accepted a proposal from Schmie-        and signal as progress in image understanding science pro-
der and his colleagues to perform a human factors study            gressed. Moreover, the initial study only applied to natural
using Georgia Tech students after target detection training        backgrounds. A later study by Cathcart, Doll, and Schmieder
to repeat Johnson’s bar target equivalency measurements            extended the results to urban backgrounds [57]. Many stud-
for target detection. The goal was to measure detection            ies subsequently followed as other researchers took up the
probability as a function of resolution for targets embedded       quest. The result was ongoing continuous evolution in crite-
in varying, but controlled, amounts of background clutter.         ria for the resolution required for FLIRs when used for target
To conduct the study, they had to first determine a clutter        detection as described in a 2015 Sandia report [58]. The Navy
metric. Kowalczyk and Rotman described the outcome in              and Army soon also adopted TDAs as mission planning tools
Chapter 28 of Biberman’s 2000 book, Electro-Optical Imaging:       for their air crew mission planning needs.
System Performance and Modeling [25] this way:
                                                                   9.5 SUMMARY
      In the early 1980s a method based on the “av-
                                                                   This chapter described the evolution and development of
      erage” scene radiance (or equivalent) standard
                                                                   GEN2 FLIR technology up to approximately the mid-2000s to
      deviation was proposed by Schmieder and his
                                                                   2010. It focused on InSb as the material that resulted in the
      coworkers at Georgia Institute of Technology
                                                                   emergence of affordable 2-D staring arrays and their role in
      [56]. This method partitioned the image into
                                                                   the development of large FPA formats. While MCT was the
      square blocks (approximately twice the size of
                                                                   material of choice for ground-to-ground combat for various
      the target), calculated the variance of the pixel
                                                                   reasons including its better penetration through battlefield
      intensities within each block, then root mean
                                                                   smoke and dust and its greater sensitivity in cold climates,
      square averaged the result over all the blocks.
                                                                   InSb was better suited for airborne applications. This suitabil-
      The authors called this the “rms clutter variance.”
                                                                   ity for airborne applications was due to its shorter wave-
      Since that time others have referred to this as the
                                                                   length operating band which allowed for smaller apertures,
      “Schmieder Statistical Variance” (or SV).
                                                                   with attendant reduction in SWaP-C, without sacrificing

      …A combined measure called the signal to clutter             range. Moreover, aircraft could fly above the battlefield fray

      ratio (SCR) was defined as the maximum (or, if               and did not need the better smoke and dust penetration as

      negative, absolute) difference between the target            much as ground units. In addition, the emergence of FLIRs

      and background mean radiance divided by the                  with uncooled FPAs opened a whole new realm of applica-

      rms clutter radiance.                                        tions that were now practical because of their much lower
                                                                   cost and size. By the mid-2000s to 2010, FLIR technology had
      …The approach … was a major advance since for                evolved to where it provided a robust solution to the histor-
      the first time, it was possible to calculate a target        ical demands of the battlefield, but this period was dynamic
      transfer probability Function (TTPF) curve for a             and was by no means nearing its full potential.
      specific level of clutter in an image.
                                                                   The optimization of GEN2 FLIRs demanded better modeling
While the study results were immediately incorporated into         and analysis capabilities for their promise to be realized.
Air Force TDA software, the study authors regarded their           Fixed pattern noise severely limited their performance until it
definition of both signal and clutter as merely an embryonic       was recognized and suppressed. Greater GEN2 sensitivity re-
start on a long journey to refine the definition of both clutter   sulted in so much lower display noise that it rivaled the noise




Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-13
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                            DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                       DISTRIBUTION STATEMENT A.
                                                                             Approved for public release; distribution is unlimited.



inherent in observers. Thus, models had to now take observ-
er eye noise into account to correctly predict “system-observ-
er” performance.

Finally, the practical military need to plan missions for opti-
mum air crew survivability led to factoring in the complexi-
ties of background clutter into the design of FLIR targeting
systems. The variety and complexity of backgrounds led to
new definitions of both clutter and target signature. These
background considerations brought new insights into the
psychophysics of the human vision system that is ongoing
and likely to continue yielding new insights into FLIR design
optimization.




Chapter 9. Gen2 FLIRs with InSb and Uncooled FPAs, and System Performance Modeling Advances // 9-14
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                          DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                     DISTRIBUTION STATEMENT A.
                                                                                                           Approved for public release; distribution is unlimited.




CHAPTER 10. SUMMARY,                                                                 With the above caveats in mind and for the purpose of a
                                                                                     broad overview summary, the following chronology lists sig-
CURRENT TRENDS,                                                                      nificant events leading to or directly addressing the history of

AND LESSONS FOR THE                                                                  U.S. FLIR technology development up to the early 2000s:


FUTURE                                                                               •     1800: Astronomer Sir William Herschel discovered the IR
                                                                                           region of the electromagnetic spectrum.
10.1 INTRODUCTION 20                                                                 •     Mid-1930s: PbS photoconductive detectors were invent-
                                                                                           ed and used in early search systems.
IR technology has undergone a remarkable transformation
over the last 50-plus years. As of 2016, it has played a critical                    •     1950–1960: Single-element detectors produced line
role in U.S. defense capability by providing the day and night                             scan images of scenes that enabled finding and tracking
vision that gives U.S. forces a major advantage. Of course, the                            enemy dismount forces.

real value of any history is the lessons it holds for the path                       •     1954: Otto Schade introduced the concept of Modula-
forward. To speculate on that path, this chapter first provides                            tion Transfer Function (MTF) as a metric for quantifying
a summary of FLIR military history and then discusses current                              the resolution of image-forming systems.
trends and apparent direction. The goal is to discuss FLIR                           •     1958: John Johnson introduced the concept of “bar tar-
technology as of the date of this book and to set a baseline                               get equivalency” as a metric for quantifying the resolu-
for speculating on the path forward. Final conclusions offer                               tion needed for varying levels of target acquisition.
thoughts on the path forward and on the lessons for guiding                          •     Late 1950s: William Lawson discovered MCT IR detector
military FLIR technology on that path.                                                     properties.
                                                                                     •     Early 1960s: Paul Kruse and his colleagues at Honeywell
10.2 SUMMARY
                                                                                           discovered methods to fabricate MCT detectors.
The history of military FLIRs discussed in this book has                             •     1968: Robert Sendall introduced the aggregate FLIR
focused on the key enabling technologies that contributed                                  metric Minimum Resolvable Temperature (MRT) that
to their development. However, many more supporting                                        made it possible to optimize FLIR performance.
technologies were required for FLIR development than were                            •     Early 1970s: Common module building blocks for FLIRs
discussed in this book. Examples are advances in optical                                   were developed, thus enabling affordable, mass-pro-
lens and coating materials, digital microelectronic integrat-                              duced, GEN1 FLIRs that were made from discrete-ele-
ed circuits, cryocoolers, and Dewars. Also important were                                  ment, photoconductive MCT detector technology.
phenomenology studies such as atmospheric absorption and                             •     1970s–1980s: Analog multiplexers were developed that
scattering as well as scene and target signature studies that                              led to the fabrication of large-detector-count GEN2 ar-
helped analysts predict FLIR performance. Those technol-                                   rays; MCT and InSb detector technology efforts focused
ogies and studies, with their impact on FLIR development,                                  on photovoltaic design and producibility.
should not be minimized but their history is either left to                          •     Mid-1980s: Paul Kruse and his colleagues at Honeywell
others to write or have already been written and published in                              invented microbolometer FPA technology and devel-
various books and journals.                                                                oped uncooled IR FPAs.


20
     The discussion of current trends and future projections includes excerpts from Teague and Schmieder’s paper in the fall 2015 issue of the DSIAC Journal [59].




Chapter 10. Summary, Current Trends, and Lessons for the Future // 10-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                               DISTRIBUTION STATEMENT A.
                                                                                     Approved for public release; distribution is unlimited.



•   1980s–1990s: Significant progress was made on large,           Success in urban warfare largely depends upon the ability to
    2-D InSb FPAs and uncooled device technologies. MCT            accomplish the following (adapted from Carson [60]):
    technology efforts focused on GEN2 scanning devices.
                                                                   •   Find and track enemy dismounted forces, even when
•   1990s–2000s: Initial technology development began on
                                                                       their appearance is brief or mixed with the civilian pop-
    MCT dual-band devices; MCT, InSb, and uncooled 2-D
                                                                       ulation.
    staring devices were used widely in applications includ-
    ing targeting and surveillance systems, missile seekers,       •   Locate their centers of strength (e.g., leadership, weap-
    driver aids, and weapon sights.                                    ons caches, fortified positions, communication nodes,
                                                                       etc.), even when camouflaged or hidden in buildings.
Substantial government funds were expended to insert these         •   Attack both light and heavy targets with precision, with
now-proven IR devices into military payloads and missile               only seconds of latency and little risk to civilian popula-
seekers and later into commercial products. As a result of             tions and infrastructure.
the success of military research and development programs,
                                                                   •   Protect U.S. forces from individual and crew-served
new applications were identified, and products were moved              weapons, mines, and booby traps.
into production. Thermal imaging technology provided the
                                                                   •   Employ robots in the form of drones such as unmanned
ability to see and target opposing forces at night and across
                                                                       air vehicles and unmanned ground vehicles as well as
smoke- and dust-covered battlegrounds. These capabilities
                                                                       unattended sensors.
backed the Army’s claim that “we own the night.”
                                                                   •   Protect our own forces and homeland infrastructure
10.3 CURRENT TRENDS AND FUTURE PROJECTIONS                             from these same drones, which in miniature, can fly in
                                                                       undetected while carrying miniature IR sensors that
Urban Warfare Requirements. As a key military technology,              allow for precise day/night delivery of explosives.
FLIR development has always been driven by the evolution of
the threat. A major concern has been threats that come from        Persistent Surveillance Systems. To meet these require-
adversaries that employ unconventional tactics (i.e., terrorists   ments imaging systems must provide persistent surveil-
and insurgents), but that does not mean adversaries that           lance from platforms located almost directly overhead and
employ conventional tactics can be ignored. Traditionally,         from small, stationary, and maneuverable platforms on the
the U.S. military has chosen to avoid close combat in cities       ground. Also needed are imaging systems that perform
in preference to using its superiority in long range standoff      targeting and fire control through haze, smoke, and dust.
weapons to defeat conventional forces. Yet, evolving world         Overhead systems must have the resolution to recognize dif-
demographics coupled with political turmoil have drawn             ferences between civilian and military dismounts, and some
conflict into urban areas. That fact is especially true in those   of them must perform change detection based on shape and
parts of the world that are becoming increasingly unstable         spectral features. Others must quickly detect and locate ene-
due to the combination of terrorism and hordes of refugees         my weapons by their gun flash and missile-launch signatures.
attempting to escape violence and avoid starvation. These
urban areas provide a hiding place for radical extremists          Near-ground systems must have the resolution and sensi-

where it is hard to deploy conventional weapons and tactics.       tivity to identify individuals, at relatively short ranges, from

This situation has led to warfare that is increasingly fought      their facial and clothing features and from what they are

in urban environments. New kinds of high-performance IR            carrying. They must also be able to do it through windows

imaging systems already play a critical role in this warfare,      and under all weather and lighting conditions. Some must

and the more advanced systems in development will likely           be able to see through obscurations, such as foliage and

play an even larger role.                                          camouflage netting. In most cases, collected imagery will be


Chapter 10. Summary, Current Trends, and Lessons for the Future // 10-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                       DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                  DISTRIBUTION STATEMENT A.
                                                                                        Approved for public release; distribution is unlimited.



transmitted to humans who are under pressure to examine it
and make quick, accurate decisions. As such, it is important
that imagery be highly intuitive and easily interpretable. This
persistent, up-close, and personal sensing strategy requires
many and varied platform types. Cost is an important factor
due to ongoing budget constraints. Not only the sensors, but
the platforms that carry them, must be affordable; but some
must also be man portable. Accordingly, many sensors must
be small and light.

Solutions to some of the surveillance requirements are being
addressed with current persistent surveillance systems
such as ARGUS-IS and ARGUS-IR (Figure 10-1). ARGUS-IS
has an enormous array of 368 optically butted FPAs using
four co-boresighted cameras. They combine for a total of
1.8 gigapixels that can provide separate images of 640x480
pixels to as many as 65 operators. The operators can then
independently track separate ground objects or persons of
interest within the ground footprint of the combined sensors
with a ground resolution of approximately 4 in. at a 15-kilo-
foot (kft) platform altitude. ARGUS-IS operates in the visible/
                                                                  Figure 10-1. ARGUS-IS has 368 5-megapixel FPAs that provide 1.8 gigapixels
NIR band and requires daylight, but the DoD is developing         on the ground with a resolution of 4 in. at 15 kft in the visible/near-IR band.
the more advanced ARGUS-IR to field comparable capability         One planned MWIR version (ARGUS-IR) would provide over 100 cooled FPAs
                                                                  each with 18 megapixels [61−63].
at night.

Microbolometers. Other IR surveillance technologies
involve unattended sensors that can be covertly deployed in
either urban or rugged country terrain. Figure 10-2 shows an
example of how tiny uncooled LWIR microbolometers can be.
When triggered in the field, for instance, by a change detec-
tion software, they can snap a picture of passing insurgents
and feed that to the battlefield network for targeting. They
have low SWaP-C, are expendable, and can run for a long
time on batteries and solar power.

While the emergence of small surveillance drones has driven
the need for lower-weight and lower volume payloads, often
performance cannot be sacrificed, and microbolometers can-
not always meet these payload requirements. For these re-         Figure 10-2. The Lepton microbolometer is an example of how small IR
                                                                  imaging sensors can be made. They can be used for covert, unattended op-
quirements, there is on an ongoing drive for small-pitch FPAs     eration in either remote or urban locations and connected to the battlefield
that operate at higher temperatures, often above 150 K. Overall   network (Source: FLIR Inc.).




Chapter 10. Summary, Current Trends, and Lessons for the Future // 10-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                               DISTRIBUTION STATEMENT A.
                                                                                     Approved for public release; distribution is unlimited.




sensor size, for equal performance, scales with detector pitch     they have many favorable characteristics such as strength,
as long as the aperture size is maintained. Smaller pixels         stability, and low cost. However, they have wide band gaps.
allow for a reduction in the Dewar and cooler size and weight      To detect low-energy MWIR and LWIR photons, they have
and for reduction of the optical focal length. Accordingly,        to be fabricated in thin, alternating layers to form quantum
package size and, to a large degree, package weight can be         wells. Superlattices have the additional benefit of being
reduced in proportion to detector pitch. The current trend         compatible with another breakthrough in detector design
appears to be moving to 10–8-µm pitch for MWIR sensors,            called negative-barrier-negative junctions. The latter have an
but some LWIR FPAs are being made with the pitch as small          advantage over traditional positive-negative junctions (such
as 5 µm.                                                           as are commonly used in commercial solar cells) in that they
                                                                   can better suppress the dark current that arises from latent
Emerging systems are being designed to counter the prolif-         heat in the material. This characteristic, in turn, offers the
eration of IR imagers in the hands of the insurgents as well.      potential for higher-temperature operation. Current success
Readily available commercial microbolometers are poten-            is so far largely in the MWIR region, but success is expected
tially a major threat. Although these imagers typically have       in the LWIR region as well. It remains to be seen if it will be a
lower resolution and sensitivity than what advanced technol-       better solution than MCT.
ogy can provide, adversaries can effectively use these cheap,
low-resolution sensors and still fire at U.S. forces at long       The dual-band GEN3 approach is actually a subset of multi-
ranges. To counter this threat, the Army’s desire for increased    spectral and hyperspectral imaging. The latter offers ad-
standoff range resulted in development of a third generation       ditional modalities and is often best exploited with sensor
(GEN3) of staring sensors with both MWIR and LWIR capa-            fusion techniques. But it faces challenges and is still in
bility. The shorter MWIR wavelength offers nearly twice the        development. Multispectral images must be displayed or
range of the LWIR band in good weather, but the LWIR band          processed simultaneously in each band to extract target
excels in battlefield smoke and dust and provides greater          information. In addition, for operator viewing, they must be
range in cold climates.                                            combined into a single, composite image using a color vision
                                                                   fusion approach. The best way to accomplish that fusion and
GEN3 Technology. Currently, GEN3 technology is expensive.          display it to an operator is still being investigated. However,
The high cost is associated with both low detector yield and       results have shown impressive reductions in false-alarm rate
complex optics. Detector cost is being addressed on two            and probability of missed detections when, for instance,
fronts: alternate substrates and new detector materials. A         searching for targets hidden in deep tree canopies and/or
GEN3 detector is made by placing MWIR detector material            under camouflaged nets.
behind LWIR material so the two bands occupy the same
space in the focal plane. Currently, only two materials offer      Passive/Active Fused Sensors. Airborne and Naval plat-
this potential: MCT and superlattices. MCT is most easily          forms have taken an entirely different approach to gaining
made on CdZnTe substrates because the lattices match well,         extended-range target identification. Their approach can, in
thus providing higher yield. However, lower-cost GaAs and          principle, triple the range of existing targeting FLIRs. They
Si substrates are being explored with considerable success.        are adopting passive/active hybrid systems consisting of pas-
The other front exploits the potential for a radically different   sive IR imaging for target detection in combination with ac-
material type called a superlattice. Superlattices exploit         tive lidar (light detection and ranging, analogous to radar as
nanotechnology to engineer materials from the III-V columns        “radio detection and ranging”) for high-resolution identifica-
of the periodic table to make alloys such as indium arsenide       tion. Figure 10-3 shows an example of this imagery provided
antimonide (InAsSb) and indium arsenide (InAs). In principle,      by BAE. The principle is that lidars can image with much


Chapter 10. Summary, Current Trends, and Lessons for the Future // 10-4
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                       DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                  DISTRIBUTION STATEMENT A.
                                                                                                        Approved for public release; distribution is unlimited.




                                                                                      However, perhaps the biggest breakthrough is about to be
                                                                                      achieved: It has long been the Holy Grail of imaging systems
                                                                                      to provide their own ability to not only see, but to under-
                                                                                      stand what they are seeing. For instance, drones are merely
                                                                                      flying platforms that are useless without their data link to a
                                                                                      remote operator who pilots it, views its imagery, and selects
                                                                                      targets. In future combat, data link survival is not assured. In
                                                                                      the near future, lidars are expected to help solve the chal-
Figure 10-3. In a passive/active targeting system, the FLIR is used for passive       lenge of image understanding in autonomous systems by
target detection and the lidar is used for active identification [64] (Source: BAE,
                                                                                      advancing to 3-D shape-profiling of targets. Current 2-D “au-
UK).
                                                                                      tomatic target recognition” technology has yet to accomplish
                                                                                      that [65] despite millions of dollars and over three decades of
shorter wavelengths, near 1.54–1.57 µm, to greatly reduce
                                                                                      research. But if targets can be profiled in 3-D and then com-
the diffraction blur diameter of the optics with a correspond-
                                                                                      pared to a stored library of 3-D wire-frame target models, the
ing increase in range. Moreover, this choice of wavelengths
                                                                                      goal might finally be achieved. It would be highly unlikely to
is eye safe. These systems have just recently been fielded on
                                                                                      mistake an object for a false target when it is accurately com-
aircraft and ships (Figure 10-4).
                                                                                      pared in 3-D and when it is presented with an appropriate
                                                                                      FLIR thermal signature as well. Ultimately, hybrid 3-D lidar/
                                                                                      FLIRs, together with advancements in artificial intelligence
                                                                                      (AI) (discussed in the next subsection), will likely open up the
                                                                                      battlefield to a portentous and controversial transformation:
                                                                                      the replacement of human warriors on the battlefield with
                                                                                      autonomous robot warriors.

                                                                                      AI. AI advancements are starting to come at a pace in the
                                                                                      software world that is complementary to and synergistic with
                                                                                      advancements in microelectronics. This pace in AI advance-
                                                                                      ments is due to the fact that AI requires enormous amounts
                                                                                      of computational power and data storage. A major AI area
                                                                                      that is particularly promising for battlefield application is
                                                                                      “deep learning” with artificial neural networks (ANNs). ANNs
                                                                                      mimic biological networks by providing layers of cross-con-
                                                                                      nected parallel connections. Recent advances in graphical
                                                                                      processing units (GPUs) have resulted in parallel structures
                                                                                      that have been found to be adaptable as artificial ANNs.
                                                                                      When ANN processors are exposed to large amounts of
                                                                                      data, they can “learn” to detect patterns that exceed that of
                                                                                      human analysts. For military application, AI processors can
                                                                                      be exposed to a wide range of scenes with target-like images
Figure 10-4. The U.S. Air Force LITENING G4 pod uses active imaging for
extended-range target identification (Source: USAF).                                  and can then classify objects by feature association without
                                                                                      human intervention. When programmed to detect particular

Chapter 10. Summary, Current Trends, and Lessons for the Future // 10-5
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                             DISTRIBUTION STATEMENT A.
                                                                                                   Approved for public release; distribution is unlimited.




targets, they can eventually learn to recognize subtle differ-                ing power embedded in each IR pixel, it will be possible to
ences that reduce their false-alarm rate to acceptable levels,                implement such space- and power-consuming off-chip tasks
given learning databases that are sufficiently large. This                    as image stabilization, change detection, passive ranging
process has the advantage of being adaptive, i.e., amenable                   from optical flow 21 calculations, super resolution, 22 and
to continuous learning, as target features change with con-                   time delay and integration. Lidars will be able to perform
tinuing exposure to the evolving battlefield. Such capability,                range measurements within each pixel to high accuracy.
when coupled with both passive and active IR sensors, prom-                   That capability will enable them to measure the shape of
ises to reduce false target identification rates to acceptable                even very small objects, which would improve their ability to
levels. This advancement has the potential to allow armed,                    identify hand-held threats such as handguns. It is apparent
autonomous battlefield robots to function alongside friendly                  that these capabilities are on the verge of yielding still more
forces and civilians without fear of unacceptable collateral                  transformative changes in IR technology.
damage.
                                                                              10.4 CONCLUSION
Digital ROICs (DROICs). Finally, there is at least one more
                                                                              IR technology has produced sensors that have become an
transformative, emerging IR technology, DROICs, and they
                                                                              essential component of U.S. defense systems. It is hard to
are already being tested [66]. Recall that all GEN2 and GEN3
                                                                              imagine how the United States would defend itself without
FLIRs as well as many lidars are enabled by analog ROICs.
                                                                              the benefit of IR surveillance and targeting systems. Howev-
These devices provide the critical capability required to mul-
                                                                              er, like all technologies, it is diffusing throughout the world.
tiplex millions of parallel detector signals into a serial output
                                                                              Clearly the ability to sustain the rate of technical advance-
signal placed onto a single wire. A major problem they have
                                                                              ment in military FLIR technology is critically important. That
is the lack of charge storage capacity. IR scenes produce
                                                                              rate should be sustainable if the U.S. retains the policies that
enormous “background” flux, and the desired signal is only
                                                                              have enabled these advances. They include the obvious
a very small percentage of that flux. Existing ROICs cannot
                                                                              need for adequate DoD funding, but funds are always limited
store the resulting charge in their pixels and must instead
                                                                              and must be wisely leveraged. In the past, that leverage has
shorten their integration time to throw that charge away. Of
                                                                              been obtained through a close working relationship among
course, the signal then gets thrown out too at the expense of
                                                                              government laboratories, industry, and academia.
sensitivity.

                                                                              Particularly important have been the roles of IRIS and its
However, DROICs are changing all that because they “count”
                                                                              later replacement, MSS, in sponsoring regular meetings.
the photoelectrons as they are being generated before they
                                                                              Those meetings promote technical exchanges at a level that
throw them away. This breakthrough capability is the result
                                                                              helps all participants but does not undermine the benefits
of Moore’s Law in microelectronics. It is projected that an
                                                                              of healthy competition. Leverage has also been successfully
entire Intel 8086 microprocessor will fit within a single, 30
                                                                              applied through large, collaborative programs such as the
µm2 pixel by 2018 when 7-µm feature sizes are expected to
                                                                              DoD-funded Vital Infrared Sensor Technology Accelera-
become available. In addition, both sensitivity and signal
                                                                              tion (VISTA) program, which seeks to develop a baseline of
processing are expected to improve. With so much process-



21
   Optical flow refers to the capability to compute range based on the phenomenon that objects closer to an imaging sensor move outward from the image
center faster than do more distant objects.
22
   Super resolution refers to the capability to improve image resolution by computationally deconvolving sources of optical resolution loss such as lens
diffraction and detector pixel size.



Chapter 10. Summary, Current Trends, and Lessons for the Future // 10-6
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                         DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                    DISTRIBUTION STATEMENT A.
                                                                          Approved for public release; distribution is unlimited.




shared technical knowledge and fabrication infrastructure.
Thus, each participating company does not have to make a
separate, redundant investment in those critical underpin-
ning capabilities. Yet those companies can add value by the
way they manage the products and innovate beyond that
framework.

So far, advances in IR technology have been driven by ad-
vances in materials, in microelectronics, and in understand-
ing human visual perception. However, also important, have
been the intangible benefits of the close working relation-
ships among government laboratories, industry, and aca-
demia. Microelectronics feature sizes have been shrinking
exponentially by Moore’s Law. But even if this pace slows,
advancement can be expected to be rapid going forward giv-
en the synergy between microelectronics and software such
as AI. Moreover, microelectronics has room to advance in
ways that do not necessarily depend on ever-smaller feature
sizes. Examples are structural improvements in chip design
such as those in GPUs and in 3-D chip configurations down
to the transistor level. While such advances are inexorable, it
can be argued that building upon the lessons of the past will
lower the cost, help sustain, and may even speed up the rap-
id pace of transformative changes in military FLIR technology
that brought it to where it is today.




Chapter 10. Summary, Current Trends, and Lessons for the Future // 10-7
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                              DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                         DISTRIBUTION STATEMENT A.
                                                                                               Approved for public release; distribution is unlimited.




REFERENCES                                                                  20. Jost, S. “Documents Written for SENSIAC by Request.” General
                                                                                Electric (GE), Sanders, Loral, Lockheed Martin Corporation
                                                                                (LMCO), BAE, 2013.
1.   Schmieder, D. E. “Infrared Technology and Applications.” Course
     Notes, Georgia Institute of Technology, 2015.                          21. Taylor, K. “Documents Written for SENSIAC by Request.” Texas
                                                                                Instruments (TI), DRS Technologies, Inc., 2014.
2.   Schmieder, D. E., and G. Walker. The Infrared & Electro-Optical
     Systems Handbook. Vol. 7, Chapter 2, 1993.                             22. Hudson, R. IR Systems Engineering. Wiley, 1969.

3.   Rogalski, A. “Infrared Detectors: An Overview.” Infrared Physics       23. Communications-Electronics Research, Development, and
     & Technology, vol. 43, pp. 187–210, 2002.                                  Engineering Center (CERDEC). “History of Army Night Vision.”
                                                                                https://www.cerdec.army.mil/inside_cerdec/nvesd/history/,
4.   Herschel, W. “Experiments on the Refrangibility of the Invisible           accessed 19 August 2015.
     Rays of the Sun.” Philos. Trans. Roy. Soc. London, vol. 90, pg. 284,
     1800.                                                                  24. Wolfe, W. L. (editor). Handbook of Military IR Technology. Naval
                                                                                Research Laboratory (NRL), 1965.
5.   Wikipedia, “Thermographic Camera.” https://en.wikipedia.org/
     wiki/Thermographic_camera, accessed 16 June 2016.                      25. Biberman, L. M. (editor). Electro-Optical Imaging: System Perfor-
                                                                                mance and Modeling. SPIE Press, ONTAR Corp., 2000.
6.   Barr, E., and E. Scott. “Historical Survey of the Early Develop-
     ment of the Infrared Spectral Region.” American Journal of             26. Wolfe, W. L., and G. J. Zissis (editors). The IR Handbook. NRL,
     Physics, vol. 28, pp. 42–54, 1960.                                         Environmental Research Institute of Michigan (ERIM), Infrared
                                                                                Information Analysis Center (IRIA), 1978.
7.   Arnquist, W. N. “Survey of Early Infrared Developments.” Pro-
     ceedings of the IRE, September 1959.                                   27. Accetta, J. S., and D. L. Shumaker (editors). The IR & Electro-Opti-
                                                                                cal Systems Handbook. ERIM/SPIE, 1993.
8.   Hudson, R. D. Infrared System Engineering. John Wiley & Sons,
     Inc., 1969.                                                            28. Kruse, P. W., L. D. McGlauchlin, and R. B. McQuistan. Elements of
                                                                                IR Technology. Wiley, 1962.
9.   Smith, W. “Effect of Light on Selenium During the Passage of an
     Electric Current.” Nature, vol. 7, pg. 303, 1873.                      29. Ponomarenko, V. P., and A. M. Filachev. Infrared Techniques and
                                                                                Electro-Optics in Russia: A History 1946–2006. SPIE Press, 2007.
10. Bose, J. C. “Detector for Electrical Disturbances.” U.S. Patent No.
    755,840 A, filed 30 September 1901, issued 29 March 1904.               30. Lawson, W. D., S. Nielson, E. H. Putley, and A. S. Young. “Prepara-
                                                                                tion and Properties of HgTe and Mixed Crystals of HgTe-CdTe.”
11. Case, T. W. “Infrared Telegraphy and Telephony.” Journal of the             J. Phys. Chem. Solids, vol. 9, pp. 325–329, 1959.
    Optical Society of America, vol. 6, pp. 39–406, 1922.
                                                                            31. Kruse, P. W., M. D. Blue, J. H. Garfunkel, and W. D. Saur. “Long
12. Rogalski, A. “History of Infrared Detectors.” Opto-Electronics              Wavelength Photoeffects in Mercury Cadmium Telluride.” IR
    Review, vol. 20, no. 3, 2012.                                               Physics, vol. 2, pp. 53–60, 1962.
13. Sturdevant, R. W. “From the Pied Piper Infrared Reconnaissance          32. Elliott, T. “Recollections of MCT Work in the UK at Malvern and
    Subsystem to the Missile Defense Alarm System: Space-Based                  Southampton.” Proceedings of SPIE, vol. 7298, 2009.
    Early Warning and Development, 1955–1970.” American
    Institute of Aeronautics and Astronautics (AIAA) Space 2010             33. Talley, R. “A History of Santa Barbara Research Center.” Santa
    Conference, Anaheim, CA, 2010.                                              Barbara Research Center (SBRC)/Raytheon Vision Systems, July
                                                                                1995.
14. Lovell, D. J. “Some Early Lead Salt Detector Developments.” Air
    Force Office of Scientific Research (AFOSR)-68-0264, University         34. Hunt, G. R., J. W. Salisbury, and W. E. Alexander. “Thermal
    of Michigan, 1968.                                                          Enhancement Techniques: Application to Remote Sensing of
                                                                                Thermal Targets.” Res. Appl. Conf. Proceedings, Office of Aero-
15. Johnson, T. H. “Lead Salt Detectors and Arrays PbS and PbSe.”               space Research, Washington, DC, pp. 113–120, March 1967.
    Proceedings of the International Society for Optical Engineering
    (SPIE), vol. 0443, 9 December 1983.                                     35. Harris, D. E, and C. L. Woodbridge. National Electronics Confer-
                                                                                ence. Vol. 18, 1962.
16. Lovell, D. J. “The Development of Lead Salt Detectors.” Ameri-
    can Journal of Physics, vol. 37, pg. 467, 1969.                         36. TI. www.ti.com/corp/docs/company/history/timeline, accessed
                                                                                21 April 2016.
17. Williams, R. “The Last Panther in Pomerania.” http://www.miss-
    ing-lynx.com/articles/dio/rwpanth/rwpanth_solutions.htm,                37. Johnson, J. Image Intensifier Symposium. Fort Belvoir, VA,
    accessed 14 July 2017.                                                      October 1958.

18. Johnston, S. F. A History of Light and Colour Measurement: Sci-         38. Schade, O. H. “A New System of Measuring and Specifying
    ence in the Shadows. IOP Publishing Ltd, 2001.                              Image Definition.” Symposium on Optical Image Evaluation,
                                                                                NBS Circular, 1954.
19. Sendall, R. “Documents Written for SENSIAC by Request.”
    Hughes Aircraft Company (HAC), Raytheon, 2014.                          39. Rosell, F. A. “Limiting Resolution of Low-Light-Level Imaging
                                                                                Sensors.” J. Opt. Soc. Am., vol. 59, no. 5, pp. 539–547.




References﻿ // R-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                              DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                         DISTRIBUTION STATEMENT A.
                                                                                               Approved for public release; distribution is unlimited.




40. Sendall, R. L., and F. A. Rosell. “E/O Sensor Performance Analysis     58. Sjaardema, T. A. C. S. Smith, and G. C. Birch. “The History and
    and Synthesis (TV/IR Comparison Study).” Air Force Systems                 Evolution of the Johnson Criteria.” Sandia Report SAND2015-
    Command, 4950th Test Wing PMMA, Wright-Patterson Air Force                 6368, 2015.
    Base (AFB), OH, November 1972.                                         59. Teague, J. R., and D. E. Schmieder. “History, Trends, & Future of
41. Ratches, J. A., W. R. Lawson, L. P. Obert, R. J. Bergemann, T. W.          IR Technology.” DSIAC Journal, vol. 2, no. 4, Fall 2015.
    Cassidy, and J. M. Swenson. “NVL Static Performance Model for          60. Carson, K. R., and C. E. Myers. “Global Technology Assessment
    Thermal Viewing Systems.” U.S. Army Electronics Command                    of High-Performance Imaging Infra-Red Focal Plane Arrays.”
    (ECOM)-7043, April 1975.                                                   Unpublished draft, Institute for Defense Analysis, October 2004.
42. Lloyd, J. M. Thermal Imaging Systems. Plenum Press, 1975.              61. Maenner, P. F. “Emerging Standards Suite for Wide-Area ISR.”
43. TI. www.ti.com/corp/docs/company/history/timeline, accessed                Proceedings of SPIE, vol. 8386, May 2012.
    30 August 2015.                                                        62. Defense Advanced Research Projects Agency (DARPA). “Auton-
44. Coltman, J. W. and A. E. Anderson, “Noise Limitations of Re-               omous Real-Time Ground Ubiquitous Surveillance – Infrared
    solving Power in Electronic Imaging.” Proc. IRE 48, pp. 858–865,           (ARGUS-IR) System.” DARPA-BAA-10-02, 2010.
    1960.                                                                  63. Maxtech International. “Infrared Imaging News.” July 2010.
45. Hanson, C. “Documentation Written for SENSIAC by Request.”             64. Baker, I., S. Duncan, and J. Copley. “A Low Noise, Laser-Gated
    U.S. Army Night Vision Laboratory (NVL), TI, DRS, 2014.                    Imaging System for Long Range Target Identification.” Proceed-
46. Martin Marietta. FLIR Common Module Design Manual.                         ings of SPIE, vol. 5406, pp. 133–144, 2004.
    OR-14118-REV-1, Orlando, FL, March 1978, DTIC Rept. # AD               65. Ratches, J. A. “Review of Current Aided/Automatic Target
    A118043.                                                                   Acquisition Technology for Military Target Acquisition Tasks.”
47. Elliott, C. T. “UK patent application no. 51498.” filed 1974, publi-       Optical Engineering, vol. 50, no. 7, July 2011.
    cation no. GB 1488258, published 1977.                                 66. Schultz, K. I., M. W. Kelly, J. J. Baker, M. H. Blackwell, M. G. Brown,
48. Amelio, G. F. “Charge Coupled Devices.” Scientific American,               C. B. Colonero, C. L. David, and D. B. Tyrrell. “Digital-Pixel Focal
    February 1974.                                                             Plane Array Technology.” Lincoln Laboratory Journal, vol. 20, no.
                                                                               2, 2014.
49. Nichols, C., D. Grogan, and R. Schmidt. “The Role of Foreign
    Comparative Testing Programs In Army Modernization.” Acqui-
    sition Review Quarterly, Fall 2001.
50. Norton, P. “HgCdTe Infrared Detectors,” Opto-Electronics Review,
    vol. 10, No. 3, pp. 159–174, 2002.
51. Wimmers, J. “Document Written for SENSIAC by Request.”
    AVCO, Cincinnati Electronics (CE), L-3, 2012.
52. Reine, M. “Paul W. Kruse (1927–2012), In Memoriam.” Proceed-
    ings of SPIE, vol. 8704, 2013.
53. Wood, R. A. “Monolithic Silicon Microbolometer Arrays.” In
    Uncooled IR Imaging Arrays and Systems, vol. 47, pp. 45–122,
    edited by P. W. Kruse and D. D. Skatrud, New York: Academic
    Press, 1997.
54. D’Agostino, J., and C. Webb. “3-D Analysis Framework and Mea-
    surement Methodology for Imaging System Noise.” Proceedings
    of SPIE, vol. 1488, 1991.
55. Driggers, R. G., E. L. Jacobs, R. H. Vollmerhausen, B. O’Kane,
    M. Self, S, Moyer, J. G. Hixon, G. Page, K. Krapels, D. Dixon, R.
    Kistner, and J. Mazz. “Current IR Target Acquisition Approach
    for Military Sensor Design and Wargaming.” Proceedings of SPIE,
    vol. 6207, 2006.
56. Schmieder, D., and M. Weathersby. “Detection Performance
    in Clutter with Variable Resolution.” IEEE Trans. on Aerospace &
    Electronic Systems, vol. AES-19, no. 4, July 1983.
57. Cathcart, M. J., T. J. Doll, and D. E. Schmieder. “Target Detection
    in Urban Clutter.” IEEE Trans. on Systems, Man, and Cybernetics,
    Vol. 19, No. 5, September 1989.




References﻿ // R-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                      DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                 DISTRIBUTION STATEMENT A.
                                                                                       Approved for public release; distribution is unlimited.




APPENDIX A.                                                           terview. I inserted reference numbers within brackets where
                                                                      appropriate in the interview text.

Interview with Paul W. Kruse                                          The Honeywell HgCdTe effort began in 1960 at the Honey-
on the Early History of Mercury                                       well Research Center, a corporate research facility that was
Cadmium Telluride (HgCdTe)                                            then located in Hopkins, Minnesota. In 1965, this HgCdTe
                                                                      technology began to be transferred to the Honeywell Ra-
Conducted on October 22, 1980 [1]
                                                                      diation Center, an operating division of Honeywell located
Marion B. Reine                                                       in Lexington, Massachusetts. Both of these organizations
Consultant on Infrared Detectors                                      underwent name changes and other changes in the years
Cambridge, Massachusetts 02138                                        just before, and subsequent to, the 1980 interview, but in
                                                                      this interview text they are simply and consistently called the
July 2, 2014                                                          Research Center and the Radiation Center.


I interviewed Dr. Paul W. Kruse (1927−2012) of the Honeywell          The Beginning of HgCdTe at Honeywell
Corporate Research Center, Bloomington Minnesota on his
recollections of the early history of the development of mer-         REINE: How did the HgCdTe work start at Honeywell, and when?
cury cadmium telluride (HgCdTe). The two-hour interview               You were there at the beginning?
was conducted in my office at the Honeywell EO Division in
                                                                      KRUSE: In about 1960 we began, at the Honeywell Research
Lexington, Massachusetts on October 22, 1980. The two cas-
                                                                      Center in Hopkins, Minnesota, an internally-funded research
sette tapes were in my desk drawer for the next 33 years, until
                                                                      effort to look for an 8-12 micrometer intrinsic IR detector
last spring when I wrote and presented a memorial paper [2]
                                                                      working at liquid nitrogen temperature, to look for a material
on Paul Kruse’s career for the 2013 International Society for
                                                                      that would be suitable for that. The state-of-the-art was such
Optical Engineering (SPIE) meeting in Baltimore. At that time,
                                                                      that 8-12-micrometer detectors were desired for airborne
I had the audio tapes transcribed into text, and recently I ed-
                                                                      earth mapper systems. But there was no material that worked
ited the text to reduce it by about a third, eliminating some
                                                                      at liquid nitrogen temperature. There were doped germani-
material that, although interesting, was not relevant to the
                                                                      um detectors, for example mercury-doped germanium was
topic. What follows is the edited text of that interview.23
                                                                      the most useful one, that worked in the 8-12-micrometer
There were two main areas that I wanted to cover in this              region, but that operated at below 30 K.
interview. One had to do with a story of how the HgCdTe
                                                                      There was a zinc-doped germanium detector called a ZIP,
research came about, what choices were made and when,
                                                                      zinc impurity photoconductor, that was developed at the Na-
what technical challenges were overcome and how. The
                                                                      val Research Laboratory. That was a 40 micrometer detector,
other had to do with the organization, culture, environment,
                                                                      operated at four degrees Kelvin. There was copper-doped
and personnel at the Research Center that made the HgCdTe
                                                                      germanium, which went out to 25 micrometers. Then mer-
research programs so successful in the early 1960s.
                                                                      cury-doped germanium was developed, and mercury-doped
My questions to Paul are shown in italics. Following the              germanium was most useful because it worked in the 8-12
transcript is a list of papers that Paul referred to during the in-   micrometer region, didn’t go out much further than that in



23
     Note that the transcribed text has not been edited by DSIAC.


Appendix A. Interview with Paul W. Kruse // A-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                         DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                    DISTRIBUTION STATEMENT A.
                                                                                          Approved for public release; distribution is unlimited.




wavelength, and therefore had the highest operating tem-               photoconductive or the photovoltaic mode at liquid nitrogen
perature, which was like 30 degrees Kelvin.                            temperature, you could achieve a real high D* in the 8-12
                                                                       micrometer region.
The mercury impurity in germanium was first experimented with
at Syracuse University in Henry Levinstein’s group.                    There was a general appreciation of the fact that intrinsic
                                                                       detectors required less cooling than extrinsic. Although that
I wouldn’t be surprised; a lot of that stuff was done there.           wasn’t really quantified until about 1968, by my Honeywell
                                                                       colleague Don Long. There were two articles that he wrote
Seb Borrello [3] may have himself measured the activation en-          [4, 5], and he was the one that quantified it. But there was a
ergy of mercury-doped germanium and found it to be suitable.           general appreciation of the qualitative aspect of it then, that
But because all of Henry’s work was funded by the Air Force,           extrinsic detectors required more cooling.
they were also concerned with practical applications, and 8-14
micrometers was certainly one of them.                                 Early Infrared Detector Research Efforts and Personnel at
                                                                       Honeywell Research Center
Then, if you look at it from the other point of view, from an
intrinsic detector, operating at liquid nitrogen temperature,          And, of course we had worked on indium antimonide at the
what was available at the time was lead selenide, and some             Research Center. Actually, that started with work I did on the
work on lead telluride…lead telluride never was as good as             PEM (PhotoElectroMagnetic) cell when I first went there in
lead selenide, but that was also a 3-5 micrometer detector.            1956. I had met a fellow by the name of the I. M. Ross [6], I
And then the thing that had come along in the 1950s was                think it was, who had visited IT&T where I had worked previ-
indium antimonide. Indium antimonide at that time was the              ously and brought around a PEM cell, an indium antimonide
best 3-5 micrometer material. The best intrinsic material was          PEM cell, and it was quite fascinating. And so, when I got to
indium antimonide because that was a true single-crystal               Honeywell, basically my first research project was to… I went
semiconductor, whereas the lead salts were all polycrystal-            to work for Don McGlauchlin… was to develop an indium an-
line, difficult to understand the carrier transport and recom-         timonide PEM detector. Don and I just decided casually that
bination mechanisms in them. So, you had the 3-5 microm-               would be a nice thing to work on, because he was building
eter intrinsic liquid nitrogen temperature detector and, you           up an infrared detector group.
had the 8-12 micrometer extrinsic 30 degree Kelvin detector.
We obviously wanted the combination of the two, the intrin-            Who else was in the infrared detector research group at that time?
sic 8-12 micrometer detector.
                                                                       Well, Rich McQuistan. Rich McQuistan and Don McGlauchlin
Was it clear, before you started to look for this detector material,   and I and Frank Simon had all come from IT&T. It was called
that you could get 8-12 micrometer BLIP (Background Limited            Farnsworth, and then it was called Capehart Farnsworth,
Infrared Photodetector) detection at temperatures around 77            and then Farnsworth Electronics, and then IT&T, and we’d
Kelvin?                                                                all been there. We all came to Honeywell at different times,
                                                                       but during the year of 1956 we all came, first Don and me,
Yes. The BLIP theory had been underway. There had been                 then McQuistan and then Simon. We’d all been in the same
people that had looked at the background limit, including              group back at Farnsworth, back at IT&T. So we knew about
myself. It was understood that, from that point of view alone,         lead telluride detectors, we had worked on them. When he
it should be possible to get 8-12 micrometer 77 degree                 got to Honeywell, Don McGlauchlin started working on lead
Kelvin operational. Although that didn’t tell anything about           telluride.
the material; that just told you that if, say, operating in the

Appendix A. Interview with Paul W. Kruse // A-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                    DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                               DISTRIBUTION STATEMENT A.
                                                                                     Approved for public release; distribution is unlimited.




Early Effort in Indium Antimonide Infrared Detectors at            Early Research on Tellurium at the Research Center
the Research Center
                                                                   So, Don McGlauchlin and Charlie Butter were working on the
And then I started on indium antimonide. Indium antimo-            photoconductive indium antimonide, and also were looking
nide and the III-V’s were not very old at the time. There was      at photoconductivity in tellurium because we were growing
this paper by a German fellow, Herman Welcher. He had              tellurium at the laboratory too.
shown in 1952 that the III-V’s were semiconductors, and
he began to synthesize them. Mostly the ones he looked             At our laboratory at that time, there was a lot of interest
at, if I recall correctly, were indium antimonide and indium       in tellurium, and we were the foremost growers of telluri-
arsenide. In fact, he patented the III-V’s. He’s got the famous    um. That wasn’t the department that I was in, that was the
Welcher patent that nobody pays attention to, but everybody        department that had John Blakemore and Allen Nussbaum
that makes a gallium arsenide device violates the Welcher          and some other people, and a fellow by the name of Tom
patent. Westinghouse tried to collect money from every-            Davies [9] who was our crystal grower for the laboratory. He
body; they were the licensee in the United States. Nobody          managed to grow tellurium crystals in large-diameter ingots
would pay them anything for it.                                    by, I think, Czochralski, and prior to that people had just been
                                                                   growing tiny crystals by a Bridgman process or something.
But we started working on the PEM cell first. That meant we        Honeywell at that time had become the foremost in the
had to grow indium antimonide. We had pure indium and              world, I believe, in growing crystals of tellurium [10].
pure antimony, and we did a Czochralski growth, and we did
zone refining on one of the materials.                             What was the interest in tellurium then? Was it infrared detec-
                                                                   tion or basic research?
Then that became a Honeywell product, the indium antimo-
nide PEM cell, and I did that [7]. Well, then Charlie Butter and   No, it was not infrared detection, but basic research. People
Don McGlauchlin, I think, began working on a photoconduc-          were interested in tellurium because its electrical properties
tive indium antimonide detector, which was about 1958 or           were not isotropic, and it was a new semiconductor material.
1959. They went to zone leveling crystal growth if I recall,       After all, at that time you really only had germanium, and
and that was successful. The Honeywell Radiation Center in         people had hardly started to work on silicon, a little bit. Then
Lexington, Massachusetts had a contract with HRB Singer            the III-V’s, and that was it. Well, here’s tellurium… another
(Haller, Raymond and Brown - Singer) to deliver a single ele-      material.
ment, indium antimonide photoconductive detector for the
                                                                   Origins of the Infrared Detector Research Group at the
mapper that went in the Army Mohawk aircraft [8].
                                                                   Research Center
I’m jumping ahead a little bit when I talk about the indium
                                                                   How did Don McGlauchlin come to set up an infrared detector
antimonide photoconductive detector manufacturing that
                                                                   group at the Research Center?
went into the mapper. But the reason I say that is that it laid
the ground work for the Honeywell Radiation Center later on,
                                                                   First, Don McGlauchlin had been a manager of a vacuum
in getting contracts with HRB Singer to substitute photo-
                                                                   tube lab at IT&T. He had a large group of people reporting
conductive mercury cadmium telluride for photoconductive
                                                                   to him doing development and manufacturing. The tubes
indium antimonide.
                                                                   were image converters and high-current photomultipliers
                                                                   and things like that. He was hired by the Honeywell Research



Appendix A. Interview with Paul W. Kruse // A-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                      DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                 DISTRIBUTION STATEMENT A.
                                                                                       Approved for public release; distribution is unlimited.




Center in April of 1956, April or May, into a group at that time     was sort of the foremost company to do that, but they were
that was called Primary Sensors. The idea was to develop             never a successful business enterprise.
sensors, radiation being one type of sensor, but pressure…
what have you. The man that was head of that group hired             Internally Funded Research Project for an Intrinsic 8-12
Don and hired me, and quite soon he left the lab.                    Micrometer Infrared Detector Operating at 77 K Began in
                                                                     1960
Don McGlauchlin became the manager of the department,
and it was still Primary Sensors, and we were looking at             About 1960, then, I started a research project, which I
things other than radiation detection. But my background             referred to at the beginning of this interview, to look for an
was in radiation detection, and the other sensors kind of fell       intrinsic 8-12 micrometer material. We also appreciated at
by the wayside. As McQuistan came into it, within a year or          that time that you’d like to have a direct gap semiconductor.
so it was primarily infrared detection technology.
                                                                     As opposed to germanium, which is indirect gap. Why was that?
So, in the absence of some strong divisional thrust, this infrared
                                                                     We went through this analysis of lifetime in our book [11],
group developed out of a general interest, a corporate interest in
                                                                     which was being written at the same time, Elements of
sensors?
                                                                     Infrared Technology by Rich McQuistan, Don McGlauchlin and
Yes.                                                                 myself. I wrote the last half of the book, the last five chapters.
                                                                     There I was looking into the theoretical concepts for radiation
Mainly because of the people they hired more than…                   detection and trying to understand this competition be-
                                                                     tween various recombination mechanisms, and talking with
Yes. It was a “bottoms up” effort rather than a “tops down.”         John Blakemore, maybe the world’s leading expert in this
                                                                     lifetime on semiconductors.
Finn Larsen was the Director of Research. Prior to 1954, when
people like Don Long and Karl Nomura, John Blakemore, and            Was Blakemore’s book already written at the time?
Allen Nussbaum were hired, the Research Center was sort
of an engineering group, and there weren’t any scientists as         He was writing it or just had… it was published in 1962 [12].
such, and there were just a few engineers. Then Finn Larsen
came and began to look for people with PhDs who were                 Through him being there, with all the lifetime measurements
scientists, particularly solid-state people, and so he hired that    he was making and the analysis he was making and so on, we
group and then it expanded. Since they had no history at             were getting an appreciation of the fact that there are differ-
all, they were trying to do some very good scientific research       ent lifetime mechanisms, like Auger. We were one of the first
and at the same time began to think about some potential             ones to talk about Auger recombination.
products for the company.
                                                                     We find that, in the book, the competition between Auger
Incidentally, at that time Honeywell owned a division, the           and radiative lifetime. Of course, we didn’t want a Shock-
Semiconductor Products Division down in Riviera Beach,               ley-Read type of mechanism, we would like to have really
and they were manufacturing germanium transistors. The               a fundamental mechanism. You will see a chapter in the
germanium work had originally been done at the Research              book where there is a hypothetical 8-14 micrometer intrinsic
Center by Nussbaum, Blakemore, Nomura, and Long. They                material and there is a figure in there that shows the lifetime
were standing in support of the Riviera Beach division, and          as a function of temperature, for both n and p type, for both
Riviera Beach was making germanium power transistors and             radiative and Auger lifetime (Chapter 9, Figures 9.18 and 9.19,


Appendix A. Interview with Paul W. Kruse // A-4
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.




pages 380-381). Going from room temperature to 77 K or            Candidates for an Intrinsic Semiconductor with a 0.1 eV
something like that, maybe a little below 77 K. I made some       Bandgap
of those calculations and Blakemore made some, I don’t
remember exactly.                                                 The candidate materials at that time were mercury sele-
                                                                  nide…which was our first choice…, mercury telluride, an
Once you know the lifetime mechanisms then you can pre-           alloy of indium antimonide and indium arsenide, grey tin, a
dict what the noise would be, and then you can see the noise      ternary called copper iron telluride, I think CuFeTe2, and so
essentially begin to compete with background noise, and then      on. There was magnesium tin, magnesium lead Mg2Sn-
develop a criterion for BLIP.                                     Mg2Pb. And of course, mercury cadmium telluride.

There was a general feeling that, in order to get to the BLIP     And other candidates were thallium antimonide and indium
limit, you should have the dominant recombination mech-           bismuth, and also an alloy of thallium antimonide and indi-
anism be radiative, that was a general feeling. That had          um bismuth.
come out of this paper by Petritz [13] back in 1954, or maybe
it was a 1959 issue of the Proceedings of the IRE. There’s a      How did we get at these? Well, take them one at a time.
Photoconductivity Conference volume in 1954 which had the         There were some literature reports on mercury selenide that
Rittner paper [14] in it, and I think Petritz had a paper in it   indicated it was a tenth of an electron volt semiconductor,
too, and there was the 1959 issue [15] of the Proceedings of      there was just one paper in the literature or something. There
the IRE. Between those two, people were beginning to get          was another paper in the literature that indicated that mer-
an appreciation of how detectors really worked and how to         cury telluride had an energy gap of 0.02 eV. In other words,
optimize them. So then, we started the project then in about      20 millielectron volts, one paper on that. Very little in the
1960, I think.                                                    literature.


The direct gap would have the stronger radiative recombination.   And of course, the band structures of both of these materials
                                                                  were still unknown?
Yes. The radiative recombination in an indirect gap material
is very weak.                                                     Completely unknown band structures.


So that ties into why you were looking for a direct gap.          We weren’t the only people, incidentally, that were looking
                                                                  for this. There was an Army contract with Battelle, and there
We knew that in transistors, you’d like to have an indirect gap   was a Navy contract with Eastman Kodak, and they started
because you wanted to have a long lifetime to get a large         about the time we got our Air Force contract, which I’ll get
gain. That was sort of generally appreciated, germanium is        to in a little bit. The magnesium tin - magnesium lead alloy
an indirect gap, silicon is an indirect gap. But we believed      work was done at Battelle, because there had been some
that in photodetectors you wanted to have it radiative life-      indication that that was a small gap material. Small gap, by
time limited which required a direct gap. Indium antimonide       definition at that time, was like a tenth of an electron volt.
was a direct gap, and so on. So, the question was, how could      There was some indication that that material was a semicon-
you get an 8-12 micrometer direct gap material. So, then it       ductor.
switches from a theoretical point of view to a materials point
of view.                                                          That ternary I mentioned, like copper iron telluride I think
                                                                  it was, that came out of one of Henry Levinstein’s reports.



Appendix A. Interview with Paul W. Kruse // A-5
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.


Henry Levinstein was writing annual reports on his Air Force      do exactly what we had intended to do under our in-house
contract. In one of them about that time, he had this list of     efforts. Exactly the same requirements: 8-12 micrometer
candidate, small gap materials, semiconductors, candidate         intrinsic infrared detector operating at the highest possible
semiconductors, small gap materials, that might be useful for     temperature, hopefully liquid nitrogen temperature.
infrared detection, and somewhere he got this idea of copper
iron telluride. When I asked Henry about it later, he wasn’t      When the RFP came out, we had been working three to six
sure where it came from. I think it came from the Russians.       months on this project. It was a competitive procurement. I
Maybe from a Russian paper translated by the AIP (Ameri-          was told later there were 30 companies bidding. We obvious-
can Institute of Physics). Henry had in the table that it had a   ly wrote the winning proposal. It had a lot of this theoretical
tenth of an electron volt.                                        analysis. It had a list of candidate materials. It had a lot of the
                                                                  theoretical analysis as why you might expect an 8-12 mi-
Now, the indium-bismuth-thallium-antimony alloy was a             crometer detector to work. I was the proposal manager and
rather obvious thing when you go down the III-V’s. We knew        other people worked on it.
in general that you’d like to be close to the center of the
periodic table because the III-V’s are covalently bonded, but     That contract began in February of 1961. Air Force Contract
the II-VI’s and I-VII’s were generally ionic bonded. There was    336167901. Thad Pickenpaugh was the contract monitor.
a feeling that you wanted to have a covalent material. So, it
                                                                  How did the Air Force get the idea for the RFP, do you think? Was
was rather obvious.
                                                                  it Thad’s idea, or was it someone else?
We looked at thallium-bismuth too.
                                                                  They were interested in mappers. I think they supported the
So that was a candidate. Then there was the indium-arse-          mercury-doped germanium work, which Texas Instruments
nide, indium-antimonide alloy. There was a report in the          was doing. Maybe some other places, too. Henry Levinstein
literature that when you made the alloy of those two materi-      had done the original development on mercury-doped ger-
als, the energy gap, instead of lying between them, went to       manium. The Air Force had been supporting Henry all along.
a minimum at some intermediate point. It was reported that        So, the Air Force was interested in detectors. They went out
the long wavelength limit would be like 8 or 9 micrometers.       to industry for this contract.


So, when we looked this list over, what did we start working      We won the contract. I can’t remember exactly when we
on? Here, I’m not exactly sure which part was done under the      actually started growing materials, whether it was right at
contract and which was done not under the contract, prior to      the beginning of the contract or whether we already started
the contract.                                                     the in-house materials growth efforts just before we won the
                                                                  contract.
Is this 1960 or earlier?
                                                                  HgSe and HgTe were the First Two Candidates to be
This was 1960.                                                    Looked at Experimentally

Honeywell Research Center Wins an Air Force Contract to           Somewhere around the first of 1961 we began to work on
Develop an Intrinsic Semiconductor Detector with a                mercury-selenide. I think it was before we got the con-
0.1 Ev Bandgap Operating at 77 K                                  tract. Don Blue was working with me on the contract, and
                                                                  I think Charlie Butter or Jim Garfunkel. We grew crystals of
Let me jump ahead a little bit. Late in 1960, maybe October       mercury-selenide, and selenide and began to measure their
or something like that, the Air Force came out with an RFP to     electrical properties and look for an absorption edge. We put

Appendix A. Interview with Paul W. Kruse // A-6
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.




them in a spectrometer and looked for an absorption edge           nominally photoeffects out of it, which at that time we were
and looked for photoeffects. What we found was that the            convinced were thermal effects. Very quickly, we decided
samples were n-type. We measured the Hall coefficient as           that mercury telluride was a semi-metal also.
a function of temperature for different samples. They were
highly opaque, out to 14 micrometers, maybe even farther, I        Somewhere along the line, we looked at, for a short time,
can’t remember how far out we looked. We got photoeffects.         indium bismuth and thallium antimony, and also the alloy
We looked at both photoconductivity and the PEM cell.              of indium bismuth and thallium antimony. We were doing
                                                                   crystal growth at the time. I think Tom Davies was doing it.
About that time, I got these photoeffects and they were sus-       The problem with those materials was that they didn’t form
picious from a variety of points of view. You could get a PEM      any kind of compounds. We didn’t spend a lot of time, but
signal and you could get a photoconductive signal, except          when we would react indium with bismuth, we’d get an ingot
that I began to worry about thermal effects because they had       that had indium in it and had bismuth in it, but no reaction
a fairly low-frequency roll off. Of course, we had expected        products. Maybe, if you work at it for a long time, you could
about a microsecond or so from our experience with indium          solve that problem. I don’t know. The same with the thallium
antimonide and from this idea of radiative lifetime and what       antimony. It just didn’t react. So, we abandoned that.
it should be. Instead, we were getting like a millisecond,
which was very unusual.                                            Attention Shifts to HgCdTe


I then considered what thermal effects you could get, that         After looking at mercury selenide and mercury telluride, we
would give rise to a voltage. I found that if you just looked      decided we wanted to work on mercury-cadmium-telluride.
at it fairly simply, in the PEM configuration, that was also the   The reason we decided that was that there was a paper [18]
same configuration for a Nernst effect, a thermally excited        in the literature, the famous one by Lawson, Nielsen, Putley
Nernst effect. And in the photoconductive configuration,           and Young published in J. Phys. Chem Solids in 1959, that indi-
that was also the same configuration for a bolometric effect.      cated that mercury-cadmium-telluride was a semiconductor,
It was great to get the photosignals, great to get Hall effect     at least over part of the composition range. They had a plot
data, but we were a little bit suspicious.                         in their paper that showed the energy gap as a function of
                                                                   the alloy composition parameter x, where x is the fraction of
Don Blue and I analyzed it and wrote a paper [16], which           cadmium telluride in the alloy. I don’t remember what tem-
was published in J Phys Chem Solids, on the electrical proper-     perature it was for. In fact, I’m not even sure they specified
ties. Blue, Garfunkel and I published a second paper [17] in       the temperature. From that, it looked like you wanted to
Journal of the Optical Society of America. There, we began to      have a 10% alloy, that is, 10% cadmium-telluride, 90% mercu-
consider HgSe to be a degenerate semiconductor. The pho-           ry-telluride. That would get you a tenth of an electron volt.
toeffect data we explained in terms of thermal effects rather
than true photon excitation.                                       Obviously, it was a fairly complicated material to work with
                                                                   because of the problem of explosion. You knew right away,
Our second choice was mercury telluride. Mercury telluride         that when you’re working with mercury, first of all, it’s hard to
was similar to, and just about as easy to grow as, mercury         work with. You knew right away that you couldn’t heat it up
selenide. That was thought to be a 0.02 eV semiconductor.          in an open tube. Second, that even if you put it in some sort
We grew some mercury telluride. I’m sure we did. That was          of ampule it explodes.
worse than the mercury selenide in terms of the number of
free electrons at any given temperature, but you could get


Appendix A. Interview with Paul W. Kruse // A-7
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.



After we’d looked at mercury-selenide and mercury-telluride,      Force contract, were working on mercury-cadmium telluride
our third choice was mercury-cadmium-telluride. I can’t           by bulk crystal growth. There was some effort at the MIT Lin-
remember the indium-bismuth-thallium-antimony approach.           coln Laboratory at the time by Alan Strauss and Ted Harmon,
I don’t remember just exactly where we had that on the list.      I believe. At least Ted was involved, and I think Alan was,
                                                                  too. I’m not sure that they were interested in it at the time
We wrote a letter to Thad Pickenpaugh. We were writing con-       for infrared detectors. Alan had been at Chicago Midway
tract reports. Maybe it was in the contract report or maybe it    Laboratories around 1956, 1957. He was growing indium-an-
was a letter. We listed eight or ten candidate materials. We’d    timonide there. He was looking at photoeffects in it, I think,
already looked at the first two. We wanted to start working       studying the semiconducting properties of it, not interested
on mercury-cadmium-telluride. We got a letter back from           in a detector per se though. Then he went to MIT Lincoln
the Air Force to the effect that they didn’t want us to work on   Laboratory and started working with Ted Harmon. They were
mercury-cadmium-telluride, because that was already under         generally interested in mercury-cadmium-telluride, and tellu-
investigation by the British.                                     ride and were trying to grow crystals of it.

So, I talked to whomever it was that was doing our contract       I think there was some other work going on, too. I think the
marketing at the time. He wrote a formal legal-type of letter     French work had started about the time we did, too. Madam
back to Thad, or the Air Force, or whomever it was, saying        Verie and coworkers.
that we would not be responsible for the technical success
of the contract unless we could pick our materials of choice.     There were also some early Polish papers in the early ‘60s talking
And then the Air Force wrote back, and they said that’s fine.     about mercury-cadmium-telluride.
Go ahead. So, our third material was mercury-cadmium-tel-
luride.                                                           About 1960 or 1961, the American Institute of Physics (AIP)
                                                                  began to translate the Russian journals. And by gosh, there
HgCdTe Growth Effort Begins in Early 1962                         were a lot of Russian papers. By a lot I mean maybe half a
                                                                  dozen of them on mercury-cadmium-telluride. But, they
So, we began to grow mercury-cadmium-telluride around             never went to a small gap composition. Their compositions
the beginning of 1962.                                            that they reported in their scientific journals were always
                                                                  about 70% and up. They were looking at photoresponses in
Now, there was some general interest in mercury-cadmi-            the 1 to 2 micrometer region. I presume it was for security
um-telluride at other places at the time. My recollection         considerations that they didn’t report their other work. I can’t
was that a fellow at Eastman Kodak, whose name I think was        imagine they didn’t work on it for the same reason we did.
Don Morey [19] had worked on the lead sulfide detectors at
Eastman Kodak. Don Morey had tried to evaporate mercu-            We began to try to grow mercury cadmium telluride crystals.
ry-cadmium-telluride, because that’s the way he was making        We started out right away by having to put them in a sealed
lead sulfide, by evaporation. He had a Navy contract that he      ampule, a quartz ampule. I think we started out right away
worked on during the early 1960s. He was entirely unsuc-          with a 12.7 mm inner diameter. I called it at the time a mod-
cessful in terms of any kind of good results. He was trying to    ified Bridgman method. What we were trying to do was to
evaporate mercury-cadmium-telluride, iftelluride if I recall      drop the crystals slowly, at a very slow lowering rate, through
correctly.                                                        a very steep temperate gradient, because we knew about the
                                                                  problem of constitutional supercooling. I think that Harmon
The Battelle group, the Army effort, was working on magne-        and Straus were talking about this at the time, or somebody
sium-tin, magnesium-lead alloy, I think. We, under the Air

Appendix A. Interview with Paul W. Kruse // A-8
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                 DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                            DISTRIBUTION STATEMENT A.
                                                                                  Approved for public release; distribution is unlimited.




else, in general terms, not specifically for mercury-cadmi-      perature distributions a lot. We bought a Marshal Products
um-telluride. It was important to lower the crystal very slow-   furnace that I think we had designed with a large number of
ly through a very steep temperature gradient. Otherwise,         taps on it, like 12, so with resistance elements or with Variacs
you had a bi-stable phenomenon in which you could get            we could profile the temperature within the furnace. We
two different x-values freezing out. That would give rise to     were very concerned about getting the steep temperature
a dendritic structure. That was called constitutional super-     gradient. We had models for heat transfer through the quartz
cooling. We realized you had to get a very steep temperature     tube and up the liquid and solid. We got into that a lot.
gradient and a very slow growth rate. So, we were dropping
the crystals through a freezing plane.                           Very quickly, as soon as we began to make the material, even
                                                                 though the material wasn’t very good quality, we began to
These had already been compounded?                               look at photoeffects. We began to see them. I fact, we saw
                                                                 some that extended past the 8 to 12 micrometer region.
Yes, my recollection is, we started right from the very begin-
ning with the rocking furnace idea for compounding. We           We were measuring absorption edges, and they were very,
would compound it in an ampule. Then we would take that          very strange. They had all sorts of non-smooth shapes. That
ampule out of that furnace after it came back down to room       was due to the fact that the spectrometer looked at fairly
temperature. We would have an ingot in there. But it was         broad region of the sample in which there was a varying
polycrystalline. Then we would try to drop it through a freez-   composition.
ing plane in a vertical furnace, a Marshal Products furnace.
We even went so far as to actually have at the very bottom       But response times were short?
of the furnace a pool of water. Maybe it was oil. Anyway, it
                                                                 Yes. We wrote a paper in Infrared Physics in early 1962 [20]
was some liquid that was at room temperature. The ampoule
                                                                 in which we talked about mercury-selenide, mercury-tellu-
would actually lower into that.
                                                                 ride, and mercury-cadmium-telluride. We talked about this
There was also the idea of freezing from a large volume. That    competition between the thermal and photo mechanisms.
idea was in the literature. Ted Harmon was trying to follow      We were able to show that in mercury-selenide and mercury
that procedure. I can’t remember what the paper was at the       telluride, the only thing you got were thermal effects, but
time. We knew of course that we wanted to get a uniform          here in this work with mercury-cadmium-telluride, we got a
x-value. We had some knowledge of the idea of the phase          true photon effect. We published that in 1962. That was just
diagram and the fact that there was a solidus and a liquidus     a little sample from one region of a crystal that happened to
that were separate from each other, and therefore, that as       go beyond 12 micrometers, I think. Maybe it went to 14 or
you tried to freeze, you would segregate. We knew that gen-      15 micrometers. That we did at helium temperature. We of
eral concept. We knew that therefore you just had a non-uni-     course were doing resistivity and Hall also besides transmis-
form composition along the longitudinally, to say nothing of     sion. We were doing that down to helium temperature.
laterally.
                                                                 We were looking at photoconductivity. We had sort of aban-
We looked into this whole business of freezing from a large      doned the idea of looking at the PEM effect.
volume, where the volume was so large that you could al-
                                                                 Then, because the electron mobility was so high, we began
ways replenish the excess cadmium in the first-to-freeze part.
                                                                 to worry about the µB products (the product of the carrier
I think the idea was to make kind of a long, tall ampule, if I
                                                                 mobility micrometer and the magnetic field strength B) and
recall. We worried about the mixing. We worried about tem-


Appendix A. Interview with Paul W. Kruse // A-9
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                DISTRIBUTION STATEMENT A.
                                                                                      Approved for public release; distribution is unlimited.




the way you looked at Hall coefficient data. You get magne-         little bit of cleaning, but then you had to get out. Eventually,
toresistance and you get a magneto Hall effect. You had a           the only solution to it was to repaint all the walls. We covered
field dependence of these parameters, which are nominally           up the mercury by repainting.
resistivity and Hall coefficient, which are nominally field inde-
pendent. You had a field dependence in them. That depen-            After the explosion in the box, we went to this steel well-cas-
dence depended upon what the mobilities were and their ra-          ing. Warren found the original container for the furnace. In-
tio, and what the composition was. You had all these strange        cidentally, the ampules, I don’t think originally were within a
effects that were showing up when you began to take your            steel pipe within the furnace. That meant that you’d destroy
Hall data. The Hall coefficient at low fields would be field        the furnace when the thing went. These are the rocking fur-
independent and then start dropping. We were doing a lot of         naces I’m talking about. They were homemade, so we could
modeling to try to fit and estimate. We didn’t know what the        rewind another furnace pretty quickly. But the whole thing
mobility values were or anything like that. You’re doing it at      was then put inside this big well-casing with the end plates.
various temperatures, and you’re trying to fit these compli-        We vented it all the way up to the roof. So when one of them
cated models that had field dependences in them.                    exploded, it would not destroy anything in the laboratory.
                                                                    The gas vapors would go out on the roof and presumably
Then, of course, we had these strange things for just the Hall      disperse around there.
effect in itself. In p-type material, you had the double cross-
over type of stuff. In n-type material, instead of just going       True Photoeffects Seen Almost Immediately in HgCdTe
up and flattening off, instead the Hall coefficient would go
                                                                    We got photoeffects almost immediately, from the first
up to a peak, come down a little bit and go back up again.
                                                                    crystal, I think. Very exciting, because we had a black body
Real strange effects. So, it was a very weird and complicated
                                                                    set up there and we had a wave analyzer. You used the wave
material we were working with.
                                                                    analyzer tuned to the chopper frequency. I can still remem-
Explosions All the Time                                             ber seeing that first needle begin to pin when we opened
                                                                    the shutter. For the first good far-infrared detector, 8-12
And then we had the explosions. Explosions all the time.            micrometer detector, the needle went all the way over to the
We started out with our first furnace contained in a plywood        right. When we started turning the range switch, it was still
box. Warren Saur was working as a technician on the thing           all the way to the right, until we went a number of orders of
at that time. We had one monstrous explosion that blew the          magnitude. I think the first detector probably came just a
plywood box apart at the screws. It was screwed together.           few months after we started looking into mercury-cadmi-
It pulled the sheets apart. The darn mercury went all over          um-telluride.
the laboratory. This was in the basement of the old Research
Center. Of course, the laboratory was contaminated with             Bernice Johnson had not gone to college, had no technical
mercury. It took us about two weeks to a month to clean that        training, but she’d worked as a lab technician. She was a per-
out. It was just like entering Three Mile Island. You could go      son who was really dedicated to whatever she worked upon.
in there for a few minutes. When you did that, you’d raise a        One of the things we noticed right away, when you cut into
mercury dust. It was embedded in the paint and in the floor         these ingots, was the fact that there was a color cast to them.
and all over. We had a mercury monitor just like radiation          She was able to associate the “good material” with a pinkish
monitor. You’d go in there and then you’d start stirring up         color. She could see it well and I could see it sometimes.
that dust, and the mercury monitor started to indicate a mer-       Nobody else could see it. We tried to do reflection measure-
cury concentration beginning to rise in there. You could do a       ments to actually try to see that region in a spectrometer.


Appendix A. Interview with Paul W. Kruse // A-10
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.




We were never able to actually detect it, but there was very      results at the IRIS meetings. As soon as we got any kind of
clearly a pinkish cast to it. So, Bernice very quickly got to     detection that looked at all promising, we got a Confidential
know where the good material might be in an ingot.                stamp on our work. We could not publish anything in the
                                                                  open literature on the photoeffects. I think we could still
Incidentally, we were looking for 10% material, because           publish on the electrical properties. We began to give talks
of the Lawson, Nielsen, Putley and Young article [18]. We         at IRIS meetings and write for Proceedings of IRIS. A lot of
weren’t looking for 20%. We didn’t know that. We didn’t           our earlier papers, maybe three or four of them, are not in
know mobilities. We had these weird effects that had to do        the open literature. They’re just in the IRIS proceedings. This
with µB products. That was really a difficult thing to work on.   would be the ‘62, ‘63, ‘64 timeframe.
We originally thought we needed 10% material, but of course
we were working with other compositions, plus the mercury         Happy Accident in 1964
cadmium telluride itself had a great variation.
                                                                  Well, we have that one magic ingot, of course, 6-18-64, where
We were trying to understand what the x-value actually was        we name them by the date on which they were compound-
in a given piece. We were looking at X-ray measurements,          ed, June 18, 1964 in this case. We were growing 6-18-64 over
and trying to measure the lattice constant, and that was not      the weekend. We had compounded it in the rocking furnace
very sensitive. There was this paper [21] on density in the       and put it in a Marshall Products furnace, which is a vertical
literature by John Blair and Roger Newnham. Maybe their           furnace. We were trying to drop it through a steep tempera-
paper was the first x-ray data. We tried to use electron beam     ture gradient.
microprobe analysis. We eventually came up with density as
being the most reliable method of determining alloy compo-        Over the weekend, one of the Variacs burned out, and the up-
sition. We had to get calibrations on all this. The whole thing   per part of the ingot was supposed to be molten. Instead it
was a very iterative procedure.                                   underwent a high temperature anneal. By Monday morning,
                                                                  maybe half the ingot had gone through the freezing plane.
Once we started on the mercury cadmium telluride we pretty        The upper half, which had been previously compounded, be-
much concentrated on that, and as we began to get photoef-        cause the Variac fuse had blown, the upper part of the ingot
fects that clearly extended through the 8 to 12 micrometer        had not remained in the molten state. When we found this
region, we really saw we were on to something then.               accident had happened, we took the ingot out and simply set
                                                                  it aside, and did not look at it anymore.
Interestingly enough, the British had dropped their work
completely, and I talked to Putley, I think, about that later.    Later on in the year, it was five or six months later, Bernice
He said, well, their original results were so negative and the    Johnson said that she would like to take a look at that ingot.
doped-germanium looked so attractive that the English             We had cut into it, I think, or something like that, and she
efforts switched over to, I think, mercury-doped germanium.       saw some of this pinkish cast. I think maybe she had cut into
They dropped their effort on mercury cadmium telluride,           it on her own, seeing some of that pinkish cast. So, she said
right after that paper apparently. I think that was their only    she would like to look at that half of it, and we made some
paper on it until later when they restarted their mercury         detectors out of it. Suddenly, we had a D* in the ten to the
cadmium telluride effort.                                         ninth, and it had the right x value. Happened to have the
                                                                  right x-value and had a D* in the ten to the ninth range. Well,
We were growing many, many ingots. We were measuring              that was very exciting then. We knew we were onto some-
a lot of detector properties and we were reporting these          thing pretty good.


Appendix A. Interview with Paul W. Kruse // A-11
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                           DISTRIBUTION STATEMENT A.
                                                                                 Approved for public release; distribution is unlimited.




We were in communication with the Honeywell Radiation           words, they said there was no future to mercury cadmium
Center in Lexington, Massachusetts at the time during this      telluride and the real wave of the future lay in the mercu-
whole thing. They had been manufacturing indium antimo-         ry-doped germanium.
nide detectors. Somewhere along the line, I can’t remember
when, probably in late ‘64, we gave them a HgCdTe detector,     The services were represented, and the established extrinsic
a liquid nitrogen temperature detector, a single element        detector companies said that’s where the services should
detector which they could compare with the indium antimo-       put all their money, in mercury-doped germanium, not this
nide detectors.                                                 mercury cadmium telluride. Mercury-doped germanium
                                                                detectors at that time had a detectivity of maybe a factor
Under the HRB Singer contract?                                  of ten higher or something like that. They were starting to
                                                                make arrays of them. Of course, they were long thin columns
Right, and HRB Singer got quite excited about it and gave       sticking up because of the low absorption coefficient. But
the Honeywell Radiation Center a contract to develop an         they believed that and they were trying to beat our work.
advanced version of the Mohawk Mapper. Mercury cadmi-
um telluride was to be the detector in the advanced version.    Well, anyway, it didn’t do them any good. We continued
Honeywell Radiation Center got a contract to develop a          to work on it, continued to get contract support. DARPA
single element, mercury cadmium telluride, liquid nitrogen      became interested, and we got a DARPA contract, I think in
temperature, photoconductive detector for the advanced          about ‘65. We then had two contracts. We had an Air Force
version of the HRB Singer mapper.                               contract and a DARPA contract. The Air Force contract kept
                                                                on for many years and various versions.
Pivotal Detector Meeting at NRL in Dec. 1964
                                                                Transition of HgCdTe Technology to the Honeywell
In December of 1964, there was a fairly significant meeting     Radiation Center Begins in 1965
called by Henry Shenker at Naval Research Laboratory for all
the detector companies. Now, the established companies          We were always interested in trying to transfer technolo-
that were in the detector business Santa Barbara Research       gy out of the Corporate Research Center to the Honeywell
Center of Hughes and Texas Instruments. Other work was          Radiation Center. In late 1964, early 1965, Ray Russell from
being done at RCA and Westinghouse. Honeywell was sort          the Radiation Center came out to the Research Center and
of an outsider in a certain sense. We didn’t have much of an    spent a week with us and learned how to prepare sensitive
effort going really. We had the one Air Force contract at the   elements from pieces of mercury cadmium telluride, single
Honeywell Corporate Research Center and the one contract        elements, how to lap and polish the material.
with HRB Singer at the Honeywell Radiation Center.
                                                                These early detector elements had soldered leads. We were
The other established companies were basically working on       mounting them on, I think, germanium substrates. There was
the extrinsic germanium, mostly mercury-doped germanium.        a question of how you make the Dewar too. The Dewar was a
There was this meeting. It was to look at 8 to 12 micrometer    single element Dewar, liquid nitrogen temperature, standard
detectors. It was a classified meeting at the Naval Research    style, with the Kovar weld rings, but we had to find a new
Laboratory. We presented our data on the mercury cadmium        window. We had spent quite a bit of time looking at window
telluride. I can remember that the efforts of the established   materials… germanium, synthetic sapphire, some of the
extrinsic detector companies, mostly TI and Santa Barbara,      Irtran materials that were just coming out at that time …and
were trying to put our work in disrepute basically. In other    window sealing techniques. We were epoxying them down,


Appendix A. Interview with Paul W. Kruse // A-12
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.




but that was not thought to be a very good method. You            Some of the other stuff was beginning to fall into line. We
really wanted to have a glass-to-glass seal, a standard proce-    were beginning to get parts of the material that were suf-
dure like that. We were looking at frets for putting between      ficiently uniformuniform, so we could begin to make sense
the window material and the barrel of the housing. So, there      out of some of the Hall effect data and other electrical data.
was work going on in the detector Dewar fabrication area too      We began to get numbers for mobilities that we had some
under the contract.                                               confidence in, particularly for n-type material. P-type mate-
                                                                  rial still, of course, had a lot of problems with interpretation
Ray Russell came out, in I think probably ‘65, early ‘65, and     of electrical data. It wasn’t until Walter Scott came to work
spent a week with us and took back to the Radiation Center        at the Research Center and began to look at it that p-type
these methods of making the detector elements and making          material began to be better understood. In ‘69 he came up
the Dewars. We started supplying material to the Radiation        with the idea of lightly doped p-type material, where it actu-
Center. Jack Lennard was head of the Detection Sciences           ally had an n-type skin. That then began to explain some of
Group at the Radiation Center at the time. I think we gave        these really strange effects we’d been looking at in the p-type
the Radiation Center most of the good part, the back….it was      material.
50 to 100 mm…of Ingot 6-18-64 at the time. Jack Lennard
coined the term ‘tenderloin’ for that. Supposedly it was          We began to get numbers for majority carrier lifetime from
locked up in a safe.                                              frequency response measurements for the photoconductive
                                                                  signal. In ‘65, ‘66, ‘67, we began to get a much better under-
High-Temperature Anneal Becomes Standard Part of                  standing of the material.
HgCdTe Crystal Growth Process
                                                                  In 1964, I got a second contract, a completely different con-
After we realized that this accident, which made good             tract from the Army, on what was called a Thin Film Image
detectors, had resulted in high temperature anneal, and we        Converter. Dick Schulze came to work for Honeywell about
learned right away that the dendrites were gone from that         1963, and he and I worked together on this contract. So, I
annealed region, we immediately then began to do a com-           was working on two contracts in ‘64 and ‘65. The Army con-
pounding step followed by an annealing step in the Marshall       tract required a quarterly report, and the Air Force a monthly
Products furnace. Compound in the rocking furnace, take           letter and a quarterly report, or vice versa, so I spent an awful
the ampule out, place the ampule in the Marshall Products         lot of time writing reports. It was very aggravating, all the
furnace and, instead of dropping it through a freezing plane,     report writing.
simply heat it up to 650 degrees and let it sit there. That was
a lot better.                                                     I was dividing my time between these two contracts. In ‘65, I
                                                                  think, Joe Schmit, I don’t remember the exact sequence, but
We had this lowering mechanism which was an old drill press       basically, Joe took over the direction of the effort in about ‘65.
stand. We had the water underneath it. It was very difficult
to do that. This compound/anneal procedure turned out             It was somewhere around that time that I remember talking
to be a much simpler thing. Somewhere along the line, we          to Don Long and listing all the possible things we could
realized that 20% was a better estimate than 10% for the 8        publish, in principle, that we had enough information to
to 12 micrometer material. We knew that, and we were then         publish on. Don, I think, was the department manager by
annealing the material instead of trying to lower it through a    then. What happened was Don McGlauchlin got promoted.
freezing plane, through the high temperature anneal.              He became an Assistant Director of the laboratory, Assistant
                                                                  Director of Research.


Appendix A. Interview with Paul W. Kruse // A-13
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                         DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                    DISTRIBUTION STATEMENT A.
                                                                                          Approved for public release; distribution is unlimited.




I was asked to take over that department. I said I would               Don Long started a series of seminars. He was doing his own
rather not, since I, by that time, was a staff scientist and I felt,   analysis. He’d start it from very, very basic ideas and build up
at the time, I preferred to do that. They had this dual-ladder         a body of knowledge in his own mind which he was publish-
structure, whereby supposedly you could get promoted                   ing in these seminars. Others of us were giving parts of the
up that side, about equally well as the other side. Suppos-            seminar too, but he was building up the whole idea of how
edly, the perks and everything like that on both sides were            infrared detectors work, and others were contributing to it
equivalent. I emphasize the word supposedly. I told them I’d           too. He was developing his own feel for this whole thing
rather not become the department manager, and Don Long                 [4, 5].
became the department manager. Called acting, but he was
acting for a long time.                                                Of course, Don had been a solid state physicist, so the solid
                                                                       state part of it came naturally to him, but the photo effects
I wrote this memo to Don Long where I listed all the possible          part was something new to him. The whole business of the
things we could publish, and we discussed it. It was decided           background limit and things like this, and the competition
that a lot of that material, even though maybe unclassified,           between recombination mechanisms, and intrinsic versus ex-
was proprietary. The only thing I could publish was the paper          trinsic, and so on. He started publishing in this area in about
[22] that I did publish in Applied Optics which was a special          ‘68 or ‘69 [4, 5, 27-29].
issue, if I recall, devoted to infrared technology. Later on that
situation eased up a lot. The secrecy order was removed                Walter Scott came aboard and he started working in this area
from the Air Force contract. After Joe got well into it, they          too. He originally tried to look for photo emission from a
allowed him to publish a lot of the stuff [23, 24, 25]. Then           piece of mercury cadmium telluride by optically pumping it.
Warren Saur published a paper [26] in ‘67 or so, in which he           If it’s radiative limited, you should see that radiation. He was
showed a photoresponse at helium temperature going out to              UV pumping and looking with a spectrometer. He was never
40 micrometers for a low x material like 17% or 18%.                   able to see anything.


Don Long Systematically Analyzes Fundamental Mecha-                    It sounds like the idea of having to be radiatively limited to be
nisms in Infrared Detectors                                            BLIP persisted for some time?


When did Don Long begin to get involved with mercury cadmi-            Yes. It was never thoroughly understood, but that certainly
um telluride?                                                          was an idea that was around for a long time.


I think it was after he became the department manager,                 HgCdTe Gains Momentum at Both the Research Center
which was 1965. He always did things other than pure man-              and the Radiation Center
agement. He was always spending maybe 25% of his time
                                                                       After about ‘65, the whole thing gathered an awful lot of mo-
doing technical work. He was not doing laboratory work,
                                                                       mentum. The Radiation Center became very much more in-
but he was doing analyses. After he got to be manager of
                                                                       volved with the Research Center. The efforts at the both the
a group whose responsibility was basically electro-optical
                                                                       Research Center and the Radiation Center greatly expanded.
effects, I think probably called Electro Optics department at
that time, most of the things going on were related to infra-
                                                                       Bob Lancaster grew his first crystal here at the Radiation Center
red detectors.
                                                                       in 1967.




Appendix A. Interview with Paul W. Kruse // A-14
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.




Yes. We transferred the crystal growth technology in ‘67, and     of good magnetics work that was paying off to the Honey-
transferred the detector fabrication technology in ‘65. A lot     well Avionics Division in Florida, such as magnetic plated wire
of people got involved with it at the Radiation Center. The       memory. It was looked upon quite favorably.
Radiation Center began to gather up a lot of momentum.
Our effort at the Research Center became a little bit larger,     HgCdTe Rapidly Gained Acceptance in the Army Common
but very quickly you surpassed us in terms of the number of       Module FLIR Applications
people working on it. We began, at the Research Center, to
                                                                  When did you join the Army Scientific Advisory Panel?
get other contracts. Joe Schmit was basically the guy that
was the principal investigator, and he began to look at other
                                                                  1965.
wavelength regions, such as shorter wavelengths.

                                                                  All along, of course, the mercury cadmium telluride tech-
There was a lot of interest in three to five micrometers. The
                                                                  nology was proceeding and becoming more and more
fundamental studies part got a lot more expanded. We
                                                                  entrenched. And, once you got the idea of the Common
got the FTS spectrometer. Walter Scott ran that. He began
                                                                  Module FLIR, which was developed… TI began to develop
to look at the optical absorption in the material [30]. Ernie
                                                                  that in the early 70s under contract.
Stelzer got involved with it. Obert Tufte got involved in 1966
or ‘67. Obert was a staff scientist, and we got a contract
                                                                  Incidentally, Manny Gale and I suggested that concept to the
from ARPA, I think, to try to develop an expitaxial method
                                                                  Army. We suggested it in about 1970.
of growth. Obert was working with Ernie Stelzer, and they
worked on this so-called close space transport method [31]        We had a meeting with Pat Daly and Don Loft. Manny Gale
in a sealed tube where you had the source piece and the           is a civilian and a part of the army staff. He and I set up a
cadmium telluride substrate very close to each other. You         meeting at which we called in Don Loft and Pat Daly to the
heat them up in a furnace and you get some source material        Pentagon and suggested the concept of a modular way for
transporting over to the substrate. They began to make lay-       FLIRs so that you could use them in different applications
ers there, which it turned out were very uniform laterally, but   as a way of going to volume, and met with a very negative
very nonuniform away from the surface, but otherwise they         response from Daly and Loft at the time. But, it must have
were working on that in ‘67 and ‘68, in that timeframe.           taken hold in their minds because about a year or two later
                                                                  they let the contract to TI. TI developed the Common Modu-
It takes a long time before you can transfer a technology,
                                                                  lar FLIR technology beginning at about ’72.
and there weren’t that many examples of things that were
transferred out of the Research Center. When we transferred       Once the Army began to see the first FLIRs, they just fell
the mercury cadmium telluride detector technology to the          wildly in love with them. The Army, I mean the users, the im-
Radiation Center in ‘65, that was looked upon very favorably,     portant people who are out there using the equipment, and
and I got a H. W. Sweat award for that. That was awarded in       they’re the people that can, say, go back and say to DARCOM,
‘66, which was the first year. There were three Sweat awards      the developer, “Hey, that stuff is just marvelous.” Once you
given out of our laboratory in 1966 for work done in ‘65.         began to see that, then you knew that this whole thing was
                                                                  going to take off. Not only that, but you knew mercury-cad-
You can see that there must have been a pretty positive atti-
                                                                  mium-telluride was then very deeply entrenched. Not only
tude at that time toward the work, because it was something
                                                                  that, but you knew that second generation technology was a
that was beginning to pay off basically, for our laboratory.
                                                                  long way off, a long way off from a user point of view. Might
There were other things that were being done there too, a lot


Appendix A. Interview with Paul W. Kruse // A-15
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                             DISTRIBUTION STATEMENT A.
                                                                   Approved for public release; distribution is unlimited.




be fairly close to being here from a technology point of view
but, if you understand the way that the Army system works,
in which you go through all these ASARCs and DSARCs to get
something, a product, and it takes close to 10 years to get the
product out in production.

The so-called IOC, Initial Operational Capability, typically
takes 10 years, and the thing stays in production for at least
10 years, 10 or 15 years. The way that changes are made
is not to throw away something and replace it but rather
product-improve it. It happens in all major weapon systems,
and you begin to adopt the point of view that says that when
you’ve got billions of dollars invested in this FLIR technology,
Common Module FLIR technology, there’s no way that you’re
going to make stepwise changes. You can only make product
improvement type of changes.

This means that it’s very hard to introduce second-genera-
tion technology, which is staring arrays … I’m talking about
staring array technology… into those existing applications,
which are the Tank Thermal Sight (TTS), the Advanced Attack
Helicopter’s (AAH) Pilot Night Vision System (PNVS) and
Target Acquisition Designation System (TADS), and the TOW
night sight, the Dragon night sight, and things like that. Sec-
ond generation technology really belongs in missile seekers
and sensor fused munitions where you don’t have an existing
product that you have to displace. Rather now, you’ve ex-
panded the applications sphere and now you’ve got a new
application and you’re looking at something maybe that will
not be put into production until 1985 timeframe and there-
fore you can … maybe later than that. Therefore, you can
make your decisions now as to the best available technology.
You don’t have to displace anything.

So that’s I think where second generation’s going to fit.




Appendix A. Interview with Paul W. Kruse // A-16
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                             DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                        DISTRIBUTION STATEMENT A.
                                                                                              Approved for public release; distribution is unlimited.




APPENDIX A REFERENCES                                                     19. Morey, D. R., and S. Sheldon. “Optically Immersed Photocon-
                                                                              ductive Cells.” U.S. Patent 3,239,675, Eastman Kodak Company,
1.   Reine, M. B. “Interview With Paul W. Kruse on the Early History          Rochester, New York, 8 March 1966.
     of HgCdTe, Conducted on October 22, 1980.” Cambridge, MA, 2
                                                                          20. Kruse, P. W., M. D. Blue, J. H. Garfunkel and W. D. Saur. “Long
     July 2014.
                                                                              Wavelength Photoeffects in Mercury Selenide, Mercury Tellu-
2.   Reine, M. “Paul W. Kruse (1927 – 2012), In Memorium.” Proceed-           ride and Mercury Telluride-Cadmium Telluride.” Infrared Physics,
     ings of The International Society for Optical Engineering (SPIE),        vol. 2, pp. 53−60, 1962.
     vol. 8704, 2013.
                                                                          21. Blair, J., and R. Newnham. “Preparation and Physical Properties
3.   Borrello, S. R., and H. Levinstein. “Preparation and Properties          of Crystals in the HgTe-CdTe Solid Solution Series.” In Metallurgy
     of Mercury‐Doped Germanium.” J. Appl. Phys., vol. 33, pp.                of Elemental and Compound Semiconductors, vol. 12, pp. 393,
     2947−2950, 1962.                                                         Wiley Interscience, 1963.
4.   Long, D. “On Generation Recombination Noise in Infrared De-          22. Kruse, P. W. “Photon Effects in Hg1−x Cdx Te.” Applied Optics, vol. 4,
     tector Materials.” Infrared Physics, vol. 7, pp. 169−170, 1967.          pp. 687−692, 1965.
5.   Long, D. “Generation Recombination Noise Limited Detectivi-          23. Long, D., and J. L. Schmit. “Mercury-Cadmium Telluride and
     ties of Impurity and Intrinsic Photoconductive 8                         Closely Related Alloys.” In Semiconductors and Semimetals, vol.
     14 μ Infrared Detectors.” Infrared Physics, vol. 7, pp. 121−128,         5, edited by R. K. Willardson and A. C. Beer, New York: Academic
     1967.                                                                    Press, 1970.
6.   Hilsum, C., and I. M. Ross. “An Infra-red Photocell based on the     24. Kruse, P. W., D. Long, and O. N. Tufte. “Photoeffects and Material
     Photoelectromagnetic Effect in Indium Antimonide.” Nature,               Parameters in Hg1-xCdxTe Alloys.” Proc. Third International Con-
     vol. 179, no. 146, 19 January 1957.                                      ference on Photoconductivity, pp. 223-229, edited by E. M. Pell,
7.   Kruse, P. W. “Indium Antimonide Photoelectromagnetic Infrared            New York: Pergamon Press, 1971.
     Detector.” J. Appl. Phys., vol. 30, pp. 770−778, 1959.               25. Schmit, J. L., and E. L. Stelzer. “Temperature and Alloy Composi-
8.   Reine, M. B. “History of HgCdTe Infrared Detectors at BAE Sys-           tional Dependences of the Energy Gap of Hg1−x Cd x Te.” J. Appl.
     tems.” Proceedings of SPIE, vol. 7298, 2009.                             Phys., vol. 40, pp. 4865−4869, 1969.

9.   Davies, T. J. “Growth of Tellurium Single Crystals by the            26. Saur, W. “Long Wavelength Mercury-Cadmium Telluride Photo-
     Czochralski Method.” J. Appl. Phys., vol. 28, pp. 1217, 1957.            conductive Infrared Detectors.” Infrared Physics, vol. 8, 1968.

10. Blakemore, J. S., D. Long, K. C. Nomura, and A. Nussbaum. “Tellu-     27. Long, D. “Photovoltaic and Photoconductive Infrared Detec-
    rium.” In Progress in Semiconductors, vol. 6, pp. 39−84, edited by        tors.” In Topics in Applied Physics: Optical and Infrared Detectors,
    A. F. Gibson, London: Heywood & Company Ltd., 1962.                       edited by R. J. Keyes, Berlin: Springer-Verlag, 1980.

11. Kruse, P. W., L. D. McGlauchlin, and R. B. McQuistan. Elements        28. Long, D. “Calculation of Ionized-Impurity Scattering Mobility of
    of Infrared Technology: Generation, Transmission and Detection.           Electrons in Hg1−xCdxTe.” Phys. Rev. vol. 176, pp. 923−927, 1968.
    New York: Wiley, 1962.                                                29. Long, D. Energy Bands in Semiconductors. New York: Wiley, 1968.
12. Blakemore, J. S. Semiconductor Statistics. Pergamon Press, 1962.      30. Scott, M. W. “Energy Gap in Hg1−x Cd x Te by Optical Absorption.”
13. Petritz, R. L. “The Relationship Between Lifetime, Limit of Sensi-        J. Appl. Phys., vol. 40, pp. 4077−4081, 1969.
    tivity, and Information Rate in Photoconductors.” In Photocon-        31. Tufte, O. N., and E. L. Stelzer. “Growth and Properties of
    ductivity Conference, pp. 49, edited by R. G. Breckenridge, B. R.         Hg1−x Cdx Te Epitaxial Layers.” J. Appl. Phys., vol. 40, p. 4559, 1969.
    Russell and E. E. Hahn, New York: Wiley, 1956.
14. Rittner, E. S. “Electron Processes in Photoconductors.” In Photo-
    conductivity Conference, p. 215, edited by R. G. Breckenridge, B.
    R. Russell and E. E. Hahn, New York: Wiley, 1956.
15. Petritz, R. L. “Fundamentals of Infrared Detectors.” Proceedings of
    the IRE, vol. 47, no. 9, pp. 1458−1467, September 1959.
16. Blue, M. D., and P. W. Kruse. “Preparation and Electrical Prop-
    erties of Mercury Selenide.” Journal of Physics and Chemistry of
    Solids, vol. 23, no. 6, pp. 577–586, June 1962.
17. Blue, M. D., J. H. Garfunkel, and P. W. Kruse. “Long-Wavelength
    Photoeffect in Mercury Selenide.” J. Optical Soc. America, vol. 51,
    no. 12, pp. 1408−1410, 1961.
18. Lawson, W. D., S. Nielsen, E. H. Putley, and Y. S. Young. “Prepara-
    tion and Properties of HgTe and Mixed Crystals of HgTe-CdTe.” J.
    Phys. Chem. Solids, vol. 9, pp. 325−329, 1959.



Appendix A. Interview with Paul W. Kruse // A-17
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                DISTRIBUTION STATEMENT A.
                                                                                      Approved for public release; distribution is unlimited.




APPENDIX B.                                                          janitors in a nearby building saw the activity and thought we
                                                                     were showing off the old airplane. He came to me and asked
                                                                     if he could also have a ride in the old antique.
Eyewitness Account of FLIR
Development24                                                        A few days later we were in Washington, DC at National Air-
                                                                     port for more demonstrations. There we met Mr. Biberman
This appendix provides Kirby Taylor’s account of both the
                                                                     once more. Our Washington staff had contacted many others
FLIR technology development history and the working
                                                                     in the customer community and had so many to sign up to
culture of the times. Taylor was a major contributor to
                                                                     fly that scheduling was necessary. Well, Luc saw all this and
FLIR development at TI and had many experiences as a
                                                                     put his name on multiple flights, day and night. Most of the
field support engineer during the Vietnam War.
                                                                     territory we covered was city with buildings, streets, river/
                                                                     land contrast and other easy infrared scenes. He was very
B.1 FIRST FLIR
                                                                     pleased, asking questions, suggesting different flight routes
As this development was underway in 1964/1965, our boss,             and other such requests.
Jim Crownover loved to bring visitors to the lab to show off
the new technology. One of the notable visitors was Lucien           That series of demonstrations lasted two days and one night.
Biberman from the Institute of Defense Analysis. He wanted           As I remember we made 21 flights. National Airport was not
to talk to engineers and technicians to get the real “skinny”        the same after that. Upon our departure we were asked if
as he said. Lots of questions for us in the lab and he ap-           this was our last takeoff for the day. Then the controller said,
peared satisfied. Then he wanted to see at more distance, so         “Don’t come back soon.”
we rolled the breadboard sensor on a lab “gurney” out into
the nearby hallway. Luc turned to me and said, “Now tell             Continuing on to Fort Monmouth, New Jersey we planned to
me when you cannot see my hands anymore.” With that he               land at Monmouth County Airport. The pilot could not con-
walked down the hall waving his arms, until I called him to          tact the tower, so we landed anyway. What a surprise there!
stop. Then he walked back saying, “Well you can see a human          The charts showed a 5500 foot runway, but we discovered it
hand at 150 feet.” I don’t remember the distance exactly, but        was about half that length. Apparently, some construction
it doesn’t matter. That visit started a friendship that lasted for   project was underway and the airport was essentially closed.
many years.                                                          Quick reaction by our pilot, Joe Truhill, saved our day. He
                                                                     ground looped the DC-3 and quickly re-applied power to
Later in the summer of 1965, we conducted flight tests and           keep us from going over a cliff. Taxiing back to the control
demonstrations in Dayton for the Air Force customer, Merle           tower we discovered not only was it not manned, but the
Carr, at the Avionics Lab, now AFRL, and for others who were         windows were broken out!
interested. The original Wright Field was still in use, now
closed, and we could taxi almost to the customer’s office. A         We were invited to Eglin AFB in Florida to evaluate the system
number of Air Force personnel took turns in groups of five           as a candidate to be installed on an AC-47, Puff the Magic
or six to see the airborne demo. We used a pre-World War             Dragon, for evaluation in Vietnam. There was a comparison
II vintage DC-3 as our flight test and demo vehicle. After a         with another FLIR sensor and the TI system was selected.
number of takeoff and landings in this old bird, one of the          Things moved fast then. TI and the Avionics Lab customer



24
     Note that this personal account was not edited by DSIAC.



Appendix B. Eyewitness Account of FLIR Development // B-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                             DISTRIBUTION STATEMENT A.
                                                                                   Approved for public release; distribution is unlimited.




both were against deploying a breadboard, but the flight         for the day and would not return until the next day. It was
demonstrations in Washington, DC and other locations had         fine with him if I wanted to wait there and sleep on the hard
gotten a lot of positive attention.                              bench.

The in-country evaluation named Red Sea revealed a lot of        Well, just as planned, there was a roar of engines outside at
performance requirements that should be addressed. Sensi-        exactly 8:00PM. The NCO jumped up and ran to the door
tivity and resolution improvements were foremost. Environ-       just in time to see a Spectre Gunship taxi into place with all
mental issues were also important. A breadboard system in        the guns pointed at his office. Then two civilians got off and
a leaky airplane during the Southeast Asia monsoon season        helped me with my bags. You should have seen the look on
was a real problem. Installation constraints with the sensor     his face!
pointed forward and the guns pointing to the side certainly
conflicted.                                                      We got airborne and the pilot, Lt. Col. Kinninger, who was the
                                                                 squadron Executive Officer came back and introduced him-
All these issues provided good lessons for future systems in     self. He said, “Mr. Taylor, your equipment does not work, and
the AC-130 Gunships. The AC-130 Spectre became a major           we will take a little trip over some of Laos to show you just
contributor to the war effort and is still an important weapon   how it doesn’t work.” That certainly emphasized the issues
platform today.                                                  for me. I saw very poor, almost unusable, performance. We
                                                                 finally landed at Ubon and I found a place to sleep. Early next
B.2 AC-130 SPECTRE FIRE CONTROL SYSTEMS,                         morning, Lt. Col. Kinninger called, saying, “Good morning Mr.
AN/AAD-4, AN/AAD-6, AN/AAD-7                                     Taylor. You have been on this base for 6 hours now. What is
                                                                 your progress?”
A hurry-up program to build and deploy the first AC-130
Gunship systems generated a few problems. Some design
                                                                 At the flight line I discovered three Gunships with three
errors along with imperfect documentation made the equip-
                                                                 broken FLIRs. We needed to do a lot of trouble shooting and
ment support difficult. The first three aircraft were deployed
                                                                 desperately needed spare parts. I was batting 0.000, 0 for
to Ubon Royal Thai Air Force Base in Thailand. A new weapon
                                                                 3. A rumor said another Spectre was due from the US in a
system, new sensors, and limited operator experience made
                                                                 few hours. Good, that would now be 1 for 4, batting .0250.
for a perfect storm.
                                                                 It arrived and guess what? The cryogenic cooler had failed.
                                                                 Back at 0.000, 0 for 4.
I was selected to go to Ubon and correct the problems.
Before leaving I met with our Senior Vice President, Ray
                                                                 Long hours, some good luck, and we got two birds airwor-
McCord. He told me his expectations and I told him I would
                                                                 thy. Next, we discovered that the operators had not seen
do my best, but I had never had the cover off a system of this
                                                                 any trucks during missions up to that time. Quite a problem
design. His reply was, “That qualifies you.”
                                                                 since the mission was predominately traffic interdiction to
                                                                 stop supplies from the north. I decided to fly a few missions
Upon arrival in Bangkok I contacted the TI tech rep at Ubon.
                                                                 to help the operators, and to try to understand the airborne
He said to be at the military side of the Bangkok airport
                                                                 problems. Improvements began to happen. Messages back
and they would pick me up at 8:00PM. I did as directed and
                                                                 and forth to TI Dallas helped identify problems and solutions.
checked in with the NCO at the military desk. He asked my
                                                                 We got a team together to support the program at Ubon and
business and I told him I was to meet a C-130 at 8:00PM. He
                                                                 progress was fast.
told me that the courier plane had already arrived and left



Appendix B. Eyewitness Account of FLIR Development // B-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                  DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                             DISTRIBUTION STATEMENT A.
                                                                                   Approved for public release; distribution is unlimited.




Lt. Col. Jim Krause was assigned to the program as operator/     so customer buy-in was necessary.
instructor. He made so much difference in training others
and operating the equipment. His experience with the             Our senior vice president, Ray McCord addressed the prob-
earlier FLIRs in other programs was so valuable. When I first    lem head on. He said, “I don’t care about all the theory that
arrived, no trucks had been detected. After the support team     says 400 is better than 200. If you can’t make 400 work,
got into place, and the operators became proficient with the     then it is not better.” This “new theory” took a bit of time to
equipment, we began to account for up to 400 trucks per          persuade the analysts and system engineers. Ray called all
month, confirmed kills.                                          the team together one Saturday morning in his big confer-
                                                                 ence room. He stated his theory simply, and told us that we
I returned to Dallas and joined the team assigned to redesign    had to decide as a group what the solution should be, and be
and flight demonstrate an improved system. A lot of the          unanimous. “Oh, by the way”, he said, “no one can leave this
problems had to do with a very early application of inte-        room until a decision is made. No coffee break, no restroom
grated circuits for the parallel amplifiers. Grounding prob-     break, no food.” The decision was rapid. We went to work. In
lems, wiring problems, temperature sensitive electronics all     three weeks we flew for the first test.
together presented quite a set of problems.
                                                                 Optical design changes eventually provided more than
Along with other engineers I advocated that we abandon the       enough sensitivity improvements to overcome the chan-
integrated circuits and replace them with more conventional      nel-count losses, and the program became very successful.
electronics: transistors, resistors, and capacitors. There was
just one problem – not enough room for 400 channels of
amplifiers. We had sold the system based on 400 channels,




Appendix B. Eyewitness Account of FLIR Development // B-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                 DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                            DISTRIBUTION STATEMENT A.
                                                                                                  Approved for public release; distribution is unlimited.




APPENDIX C.                                                                      were not suitable for real-time targeting because they did
                                                                                 not provide fast-framing, real-time imagery and were not di-
                                                                                 rectable. For infrared imaging systems to work for targeting,
First FLIR Optics and Scanner
                                                                                 they had to overcome these limitations. This situation posed
Configuration                                                                    challenges for the optical design because of the constraints
                                                                                 posed by the multiplexing electronics, detector limitations,
This appendix describes the optical design of the first air-
                                                                                 and displays of that era. Figures C-1 through C-4 illustrate
borne FLIR used in combat for ground object targeting in
                                                                                 the optical configurations used to be compatible with these
about 1965 during the Vietnam War. As explained in Chapter
                                                                                 constraints. Their role in the development process of the first
5, prior infrared imaging systems were down-looking line
                                                                                 FLIR was described in Chapter 5.
scanners, or “mappers,” used for intelligence collection. They




Figure C-1. FLIR I Objective Lens Design – Schmidt-Cassegrain (Source: Kirby Taylor).




Appendix C. First FLIR Optics and Scanner Configuration // C-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                   DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                              DISTRIBUTION STATEMENT A.
                                                                                    Approved for public release; distribution is unlimited.




Figure C-2. FLIR I Three-Element Staggered Detector Array (Source: Kirby Taylor).




Appendix C. First FLIR Optics and Scanner Configuration // C-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                           DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                      DISTRIBUTION STATEMENT A.
                                                                            Approved for public release; distribution is unlimited.




Figure C-3. FLIR I Kennedy Scanner Implementation (Source: Kirby Taylor).




Appendix C. First FLIR Optics and Scanner Configuration // C-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                     DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                                DISTRIBUTION STATEMENT A.
                                                                                                      Approved for public release; distribution is unlimited.




Figure C-4. Kennedy 2-Axis Scanner Patent Drawing (Source: U.S. Patent 3,554,628; applied for in 1966).




Appendix C. First FLIR Optics and Scanner Configuration // C-4
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                               DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                          DISTRIBUTION STATEMENT A.
                                                                                                Approved for public release; distribution is unlimited.




APPENDIX D.
GEN 1 Common Module Description25
This appendix contains a detailed description of the GEN 1
common modules as provided by Charles Hanson. Hanson
witnessed their development as a member of the Army NVL
common module development and qualification team.

The detector was a linear array of photoconductive HgCdTe
elements on 4-mil centers. The pixels were initially as 2-mil ×
2-mil, but it was found that performance and image quality                  Figure D-1. Layout of Common Module Detector Pixel. (Source: U.S. Army)
could be improved by changing the sensitive area to 1.6 mils
wide (in the scan direction) and 2.4 mils high. The reduced                  a feed-thru at the warm end of the stem. The outside top
width improved the MTF but reduced the signal-collecting                     of the Dewar was a germanium window, metalized on its
area and, therefore, the responsivity. The increased height                  perimeter and soldered onto a matching metalized ring. The
made up for the lost area and also made a more pleasing                      window was AR coated on both surfaces for best transmis-
image because pixel overlap resulting from scan interlace                    sion in the 7.5micrometer to 12.75micrometer spectral band.
reduced the streaking that resulted from poorly corrected                    The AR coating contained thorium, which included a radio-
response nonuniformity. The electrically-active width of the                 active isotope, and which, at the time, was a material neces-
pixel was significantly wider than 1.4 mils, but the excess                  sary for the fabrication of durable LWIR coatings. As a result,
width was masked to avoid IR absorption, as illustrated                      Common Dewar Modules Dewars were marked for disposal
in Figure D-1. The purpose of the masked region was to                       as radioactive material.
increase the minority carrier lifetime, which increased the
photoconductive gain. Electron-hole pairs created by pho-                    There was quite a bit of discussion concerning the location of
ton absorption in the optically-active region would spread by                the bias resistors. Locating them on the preamplifier boards
diffusion, and they would also be swept to the electrodes by                 made for an easier implementation, but then the preamp
the applied bias field – holes to the cathode and electrons to               boards were matched to a Detector/Dewar Module, and
the anode. Recombination at the electrodes reduced the ef-                   neither could be replaced without replacing all. The final
fective lifetime. Since holes were less mobile than electrons,               decision was to make them a part of the Detector/Dewar
the expanded region was less in the direction of the cathode.                Assembly. The resistors were trimmed to optimize the signal-
The detector material – both the optically exposed area and                  to-noise ratio for each element.
the masked area – was coated with ZnS, which served as a
passivation layer and as an anti-reflection (AR) coating.                    The Detector/Dewar Modules came in three versions: 180×1,
                                                                             120×1, and 60×1. The 180-element modules were used
The Dewar was glass with a glass cold stem for receiving the                 mostly for airborne application, the 120-element modules
cold finger of a cryogenic cooler. Gold leads, one for each                  for ground-based vehicular applications, and the 60-element
pixel plus a few grounds, ran down the cold stem, each to                    modules arrays for man-portable applications such as anti-ar-



25
     Note that Hanson’s description of GEN1 Common Modules was not edited by DSIAC.


Appendix D. GEN 1 Common Module Description // D-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                            DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                       DISTRIBUTION STATEMENT A.
                                                                                             Approved for public release; distribution is unlimited.




mor missiles and night observation devices. The 60-element                compressor piston and the regenerator were originally split-
man-portable detector array is shown in Figure D-2. Figure                ring Rulon washers, but later versions improved reliability by
D-3 shows the larger Common Module Detector/Dewar As-                     using more robust materials. The cold finger mated with the
sembly with the cover removed. The same Dewar was used                    180-element Dewar by means of a thin corrugated copper
for both the 180- and the 120-element arrays.                             cap, the corrugations producing a flexibility that prevented
                                                                          the pressure of the cold finger from breaking the bottom of
                                                                          the Dewar cavity. The cooling capacity was nominally 1 Watt
                                                                          at 77K.

                                                                          The 60-element Detector/Dewar initially mated with a
                                                                          Joule-Thomson cryostat that was not part of the Common
                                                                          Module set. A smaller, ¼-Watt cooler was soon developed for
                                                                          use with the smaller Detector/Dewar.

                                                                          Figure D-4 shows the Common Module One-Watt Cooler.
                                                                          The motor is contained in the finned compartment labeled
                                                                          “Motor Housing”. The compressor piston is located below
 Figure D-2. 60-Element Common Module TOW Detector Array. (Source: U.S.   the label “P Axis”, and the cold finger (without the copper
 Army)
                                                                          interface cap) protrudes to the lower left. The Dewar attach-
                                                                          es to the flange at the warm end of the cold finger. Figure
                                                                          D-5 shows both Cooler/Dewar Assemblies - the 1-Watt cooler
                                                                          with a 180-element Detector/Dewar Assembly attached and
                                                                          the ¼-Watt Cooler with a 60-element Detector/Dewar Assem-
                                                                          bly attached.




Figure D-3. Common Module Detector/Dewar with cover removed. (Source:
U.S. Army)




The Common Module Cryocooler was a Stirling-cycle ma-
chine with an included compressor moving orthogonally to                  Figure D-4. Common Module One-Watt Cryocooler. (Source: U.S. Army)
the cold finger, which contained the regenerator. The regen-
erator was a hollow polyimide cylinder containing a stack of
                                                                          The scanner had a single flat mirror, optimized for IR on one
stainless steel wire mesh discs randomly rotated. The cooler
                                                                          side and for visible on the other. It was bidirectional, with the
housing was a low-porosity cast aluminum alloy, except for
                                                                          option of a slight tilt between the two directions to provide
the cold finger, which was stainless steel. Bearings for the

Appendix D. GEN 1 Common Module Description // D-2
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                      DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                 DISTRIBUTION STATEMENT A.
                                                                                       Approved for public release; distribution is unlimited.




                                                                      with a system-level a-focal telescope which, when combined
                                                                      with the IR imager, would produce the net focal length re-
                                                                      quired for the specific application.

                                                                      The Light Emitting Diode Module was a 180-element array for
                                                                      all applications. Its elements were very narrow, 1.25 mils, for
                                                                      improved MTF. The height of each element was 3.25 mils to
                                                                      improve the uniformity of the display. The spectral emission
                                                                      was red, in the 620-650 nm range. The balancing resistors for
                                                                      the LED array were contained within the LED Module.

                                                                      Between the LED Module and the Scanner Module was the
Figure D-5. Common Module Detector/Dewar/Cooler Assemblies for the
180-element version and the 60-element version. (Source: U.S. Army)   visible collimator, which collimated the light from the LED
                                                                      Module and reflected it off the visible side of the scanner
interlace. The normal operating speed was 30 Hz, producing            mirror. From the scanner mirror, light was directed into either
two fields during each cycle, but it could also operate at up         optics for direct view or into an electro-optical multiplexer.
to 60 Hz / 120 fields per second. The scan angle could be
adjusted to provide a 2:1 field of view for any of the detector/      The Preamp Module included 20 channels of bias resistors

Dewar options. The scan efficiency was nominally 70%. The             and first-stage amplification for the detector. By breaking

scanner had four optical interfaces. The detector looked at           the preamplifier function into 20-channel circuit cards, the

the IR side of the mirror and into the IR imager. Opposite the        boards were a manageable size given the technology of the

detector was the LED array, which emitted into the visible            day, and they could be assembled in multiples to match the

collimator and into the visible side of the mirror, where it          number of detectors in whichever array option was being

would reflect into either a system-specific eyepiece or the           used. The bias resistors were trimmed according to the

electro-optical multiplexer. Because of the electronic delay          specific Detector/Dewar Module being used to normalize the

between the detector array and the LED array, the image was           responsivity of the detector elements. This meant that the

slightly offset horizontally when viewed through the scan-            Preamp Module boards were not interchangeable once they

ner. When the scanner reversed directions, the offset was             were normalized.

also reversed, producing a horizontal misalignment between
                                                                      The PostAmp Module was also implemented in 20-channel
the two fields. The visual channel of the scanner included a
                                                                      circuit cards. Since the detector bias resistors were trimmed
phase shift lens that moved slightly between fields to keep
                                                                      to optimize the signal-to-noise ratio for each element, and
them optically aligned.
                                                                      since the LED array was itself normalized, the task of normal-

The IR imager was designed to receive collimated IR radiation         izing responsivities was left to the PostAmp Module. It was

and focus it onto the detector array. Its focal length was 2.67       implemented by means of a potentiometer for each channel.

inches, resulting in a 0.75 mrad instantaneous field of view          This adjustability permitted the free interchange of PostAmp

(IFOV). The vertical field of view was 5° for the 60-element          boards, although doing so required a normalization procedure.

array, 10° for the 120-element array, and 15° for the 180-el-
ement array. The scanner was adjusted differently for each
array in order to produce a horizontal field of vertical that
doubles the vertical. The IR imager was intended to interface


Appendix D. GEN 1 Common Module Description // D-3
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                                                DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                                           DISTRIBUTION STATEMENT A.
                                                                                                 Approved for public release; distribution is unlimited.




BIBLIOGRAPHY                                                                 Infrared Training Institute. “Macedonio Melloni.” https://infra-
                                                                                 redtraininginstitute.com/infrared-thermography-history/mace-
                                                                                 donio-melloni/, accessed 4 September 2012.
Barr, E. S. “The Infrared Pioneers – I. Sir William Herschel.” Infrared
   Physics, vol. 1, 1961.                                                    Mahidol University. “Mahidol Physics Education Centre.” Nakhon
                                                                               Pathom, Thailand, http://mpec.sc.mahidol.ac.th/, accessed
Barr, E. S. “The Infrared Pioneers – II. Macedonio Melloni.” Infrared          4 September 2012.
   Physics, vol. 2, 1962.
                                                                             Millman, P. M. “The Herschel Dynasty - Part One: William Her-
Barr, E. S. “The Infrared Pioneers – III. Samuel Pierpont Langley.” Infra-       schel.” Journal of the Royal Astronomical Society of Canada,
   red Physics, vol. 3, 1963.                                                    vol. 74, pp. 134, 1980, http://adsabs.harvard.edu/full/seri/
California Institute of Technology. “Thermoelectrics: Caltech Materi-            JRASC/0074/0000134.000.html, accessed September 2012.
    als Science.” http://www.thermoelectrics.caltech.edu/, accessed          Mullaney, J. “Herschel’s Telescopes.” The Herschel Objects and How to
    4 September 2012.                                                          Observe Them, Springer Science & Business Media, pp. 10, 2007,
Cool Cosmos. http://coolcosmos.ipac.caltech.edu, accessed 27                   http://books.google.com/books?id=HFg2sOjrFtsC&pg=PA10,
   August 2013.                                                                accessed 5 June 2011.
Earth Observatory. “Samuel Pierpont Langley (1834-1906).” https://           Redd, N. T. “William Herschel Biography.” Space.com, https://www.
   earthobservatory.nasa.gov/Features/Langley/langley_2.php,                    space.com/17432-william-herschel.html, 4 September 2012.
   3 May 2000.                                                               Rousse, D. R. “A Brief Review of the History of Radiative Transfer.”
Hershel, W. The Scientific Papers of Sir William Herschel. London,              Proceedings from the Third International Conference on Thermal
   England: The Royal Society and the Royal Astronomical Society                Engineering: Theory and Applications, 21−23 May 2007.
   of England, 1912.                                                         Steinicke, W. “‘The Scientific Papers of Sir William Herschel’ at 100.”
Holden, E. S. Sir William Herschel His Life and Works. New York:                 Astronomy & Geophysics, vol. 53, no. 2, 1 April 2012.
   Charles Scribner’s Sons, 1880.                                            Students for the Exploration and Development of Space (SEDS)
Holmes, R. The Age of Wonder: The Romantic Generation and the                   USA. “The Messier Catalog.” http://messier.seds.org/, 25 February
   Discovery of the Beauty and Terror of Science. New York: Harper-             2008.
   Collins, 2008.                                                            Universität Innsbruck. “Melloni’s Thermo Couple, 1831.” http://
Hong, G. “Thomas Johann Seebeck.” Speech and Hearing Science                    physik.uibk.ac.at/museum/en/details/electr/melloni.html,
  Historical Review, New Taipei City, Taiwan: Fu Jen Catholic Uni-              accessed 4 September 2012.
  versity, 2003.
Hoskin, M. “William Herschel.” New Dictionary of Scientific Biography,
   vol. 3, New York: Charles Scribner’s Sons, 2008.




Bibliography // E-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                         DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                    DISTRIBUTION STATEMENT A.
                                                                          Approved for public release; distribution is unlimited.




ACRONYMS AND                                                GE
                                                            Ge:Hg
                                                                     General Electric
                                                                     Mercury-Doped Germanium
ABBREVIATIONS                                               GEN2     Second Generation
AFAL       Air Force Avionics Laboratory                    GTPE     Georgia Tech Professional Education
AFB        Air Force Base                                   GTRI     Georgia Tech Research Institute
AMC        Army Materiel Command                            HAC      Hughes Aircraft Corporation
APC        Armored Personnel Carrier                        HgCdTe   Mercury Cadmium Telluride
APE        Advanced Production Engineering                  HHTV     Handheld Thermal Viewer
ATIRCM     Advanced Threat Infrared Countermeasure          HSI      Hyperspectral Imaging
CCB        Configuration Control Board                      IAC      Information Analysis Center
CCD        Charge Coupled Device                            IDA      Institute for Defense Analysis
CdTe       Cadmium Telluride                                IDCA     Integrated Detector Dewar Assembly
CdZnTe     Cadmium Zinc Telluride                           IEEE     Institute of Electrical and Electronics Engineers
CERDEC     Communications-Electronics Research,             IMH      Integrated Multiplexed Hybrid
           Development and Engineering Center               InSb     Indium Antimonide
CID        Charge Injection Device                          IR       Infrared
CINFAC     Counterinsurgency Information Analysis Center    IRCM     Infrared Countermeasure
CMOS       Complementary Metal-Oxide-Semiconductor          IRE      Institute of Radio Engineers
COTR       Contracting Officer’s Technical Representative   IRIA     IR Information and Analysis
CRT        Cathode Ray Tube                                 IRIS     Infrared Information Symposium
CTE        Coefficient of Thermal Expansion                 IRST     Infrared Search and Track
DARPA      Defense Advanced Research Projects Agency        JLC      Joint Logistics Commanders
DAS        Distributed Aperture Sensor                      JOSA     Journal of the Optical Society of America
DoD        Department of Defense                            JPL      Jet Propulsion Laboratory
DROIC      Digital Read-Out Integrated Circuit              JTCG     Joint Technical Coordinating Group
DTIC       Defense Technical Information Center             LED      Light-Emitting Diode
EM         Electromagnetic                                  LLLTV    Low Light Level Television
EO         Electro-Optical                                  LN2      Liquid Nitrogen
ERDL       Engineer Research and Development                LPE      Liquid Phase Epitaxy
           Laboratories
                                                            LWIR     Long-Wave Infrared
FFRDC      Federally Funded Research & Development
           Center                                           MBE      Molecular Beam Epitaxy

FLIR       Forward-Looking Infrared                         MCT      Mercury Cadmium Telluride

FOV        Field of View                                    MIS      Metal-Insulator-Semiconductor

FPA        Focal Plane Array                                MOCVD    Metal Organic Chemical Vapor Deposition

FPN        Fixed-Pattern Noise                              MOSFET   Metal-Oxide-Semiconductor Field Effect
                                                                     Transistor
GaAs       Gallium Arsenide



Acronyms and Abbreviations // F-1
THE HISTORY OF FORWARD-LOOKING INFRARED (FLIR)                                         DSIAC Publication DSIAC-2021-1342
Dr. James “Ralph” Teague and David Schmieder                                                    DISTRIBUTION STATEMENT A.
                                                                          Approved for public release; distribution is unlimited.




MRT        Minimum Resolvable Temperature                  RACIC     Remote Areas Conflict Information Center
MSS        Military Sensing Symposia                       RCA       Radio Corporation of America
MTADS      Modern Target Acquisition and Designation       RDECOM    Research, Development, and Engineering
           Sight                                                     Command
MTF        Modulation Transfer Function                    RF        Radio Frequency
MWIR       Medium-Wave Infrared                            ROIC      Read-Out Integrated Circuit
MWR        Missile Warning Receiver                        RRE       Royal Radar Establishment
Nd:YAG     Neodymium-Doped Yttrium Aluminum Garnet         SADA      Standard Advanced Dewar Assembly
NET        Noise Equivalent Temperature                    SBRC      Santa Barbara Research Center
NETD       Net Equivalent Temperature Difference           SENSIAC   Sensing Information Analysis Center
NIMS       Near IR Mapping Spectrometer                    SOAR      State-of-the-Art Report
NIR        Near Infrared                                   SPIE      Society of Photo-Optical Instrumentation
                                                                     Engineers
NRL        Naval Research Laboratory
                                                           SPRITE    Signal Processing in the Element
NUC        Nonuniformity Compensation
                                                           SWaP-C    Size, Weight, Power, and Cost
NVESD      Night Vision & Electronic Sensors Directorate
                                                           SWIR      Short-Wave Infrared
NVL        Night Vision Laboratory
                                                           TDI       Time Delay and Integration
ONR        Office of Naval Research
                                                           TE        Thermoelectric
P3I        Preplanned Product Improvement
                                                           THAAD     Terminal High-Altitude Area Defense
PACE       Producible Alternative to CdTe Epitaxy
                                                           TI        Texas Instruments
PbS        Lead Sulfide
                                                           Tl2S      Thallous Sulfide
PbSe       Lead Selenide
                                                           TOW       Tube-Launched, Optically Tracked, Wire-Guided
PC         Photoconductive
                                                           TRAM      Target Recognition and Attack Multisensor
PCB        Printed Circuit Board
                                                           TRIM      Trails and Roads Interdiction Mission
PM         Program Manager
                                                           UV        Ultraviolet
PtSi       Platinum Silicide
                                                           VIMS      Visible/IR Mapping Spectrometer
PV         Photovoltaic
                                                           VLWIR     Very Long-Wave Infrared
QE         Quantum Efficiency
                                                           WWI       World War I
QWIP       Quantum Well IR Photodetectors
                                                           WWII      World War II




Acronyms and Abbreviations // F-2
THE HISTORY OF
FORWARD-LOOKING
INFRARED (FLIR)
By Dr. James “Ralph” Teague
and David Schmieder

DSIAC PUBLICATION DSIAC-2021-1342

DISTRIBUTION STATEMENT A
Approved for public release;
distribution is unlimited.
