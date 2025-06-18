"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export function Travels() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const countries = [
    {
      name: "India",
      flag: "🇮🇳",
      continent: "Asia",
      type: "fact",
      content: "Home sweet home - where it all began! The land of spices, colors, and incredible diversity.",
    },
    {
      name: "USA",
      flag: "🇺🇸",
      continent: "North America",
      type: "fact",
      content:
        "Born and raised! I grew up in California but have been to Michigan, New York, Pennsylvania, Virginia, and Massachusetts and one day hope to go to all 50 states!",
    },
    {
      name: "Singapore",
      flag: "🇸🇬",
      continent: "Asia",
      type: "fact",
      content: "Garden city with incredible street food - hawker centers are a foodie's paradise!",
    },
    {
      name: "Sri Lanka",
      flag: "🇱🇰",
      continent: "Asia",
      type: "fact",
      content: "Beautiful beaches and ancient temples - the pearl of the Indian Ocean!",
    },
    {
      name: "Hong Kong",
      flag: "🇭🇰",
      continent: "Asia",
      type: "fact",
      content: "Skyline views and dim sum delights - where East truly meets West!",
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      continent: "Oceania",
      type: "fact",
      content: "Koalas, kangaroos, and the Great Barrier Reef - everything really does try to kill you here!",
    },
    {
      name: "New Zealand",
      flag: "🇳🇿",
      continent: "Oceania",
      type: "fact",
      content: "Middle Earth landscapes and adventure sports - bungee jumping was invented here!",
    },
    {
      name: "Costa Rica",
      flag: "🇨🇷",
      continent: "Central America",
      type: "fact",
      content: "Pura vida and incredible biodiversity - home to 5% of the world's species!",
    },
    {
      name: "Panama",
      flag: "🇵🇦",
      continent: "Central America",
      type: "fact",
      content: "Engineering marvel of the Panama Canal - connecting two oceans since 1914!",
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      continent: "North America",
      type: "fact",
      content: "Maple syrup, politeness, and stunning nature - sorry, not sorry for loving it here!",
    },
    {
      name: "UK",
      flag: "🇬🇧",
      continent: "Europe",
      type: "fact",
      content: "Tea time and historic castles - where queuing is an art form!",
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      continent: "Europe",
      type: "fact",
      content: "Oktoberfest and fairy tale castles - efficiency and gemütlichkeit in perfect harmony!",
    },
    {
      name: "Czech Republic",
      flag: "🇨🇿",
      continent: "Europe",
      type: "fact",
      content: "Prague's magical architecture - the city of a hundred spires and amazing beer!",
    },
    {
      name: "Austria",
      flag: "🇦🇹",
      continent: "Europe",
      type: "fact",
      content: "Sound of Music and Alpine beauty - Mozart's birthplace and schnitzel paradise!",
    },
    {
      name: "Netherlands",
      flag: "🇳🇱",
      continent: "Europe",
      type: "fact",
      content: "Tulips, windmills, and cycling everywhere - more bikes than people!",
    },
    {
      name: "Hungary",
      flag: "🇭🇺",
      continent: "Europe",
      type: "fact",
      content: "Budapest's thermal baths and ruin bars - the Paris of the East!",
    },
    {
      name: "Sweden",
      flag: "🇸🇪",
      continent: "Europe",
      type: "fact",
      content: "Northern lights and IKEA meatballs - lagom lifestyle at its finest!",
    },
    {
      name: "Denmark",
      flag: "🇩🇰",
      continent: "Europe",
      type: "fact",
      content: "Hygge culture and colorful Nyhavn - consistently ranked happiest country!",
    },
    {
      name: "Norway",
      flag: "🇳🇴",
      continent: "Europe",
      type: "fact",
      content: "Fjords and midnight sun - where trolls supposedly roam the mountains!",
    },
    {
      name: "Bahamas",
      flag: "🇧🇸",
      continent: "North America",
      type: "fact",
      content: "Crystal clear waters and swimming pigs - yes, pigs that actually swim!",
    },
    {
      name: "Mexico",
      flag: "🇲🇽",
      continent: "North America",
      type: "fact",
      content: "Tacos, tequila, and ancient pyramids - birthplace of chocolate and chili peppers!",
    },
    {
      name: "Belgium",
      flag: "🇧🇪",
      continent: "Europe",
      type: "fact",
      content: "Waffles, chocolate, and medieval charm - home to over 1,000 different beers!",
    },
    {
      name: "UAE",
      flag: "🇦🇪",
      continent: "Asia",
      type: "fact",
      content: "Desert luxury and futuristic architecture - where the impossible becomes possible!",
    },
    {
      name: "Tanzania",
      flag: "🇹🇿",
      continent: "Africa",
      type: "fact",
      content: "Safari adventures and Mount Kilimanjaro - home to the Great Migration!",
    },
    {
      name: "Kenya",
      flag: "🇰🇪",
      continent: "Africa",
      type: "fact",
      content: "Great Migration and Maasai culture - birthplace of humanity!",
    },
    {
      name: "Poland",
      flag: "🇵🇱",
      continent: "Europe",
      type: "fact",
      content: "Pierogi and historic Krakow - Marie Curie's homeland!",
    },
    {
      name: "Finland",
      flag: "🇫🇮",
      continent: "Europe",
      type: "fact",
      content: "Saunas and Santa's homeland - more saunas than cars!",
    },
    {
      name: "Estonia",
      flag: "🇪🇪",
      continent: "Europe",
      type: "fact",
      content: "Digital nomad paradise and medieval Tallinn - birthplace of Skype!",
    },
    {
      name: "Latvia",
      flag: "🇱🇻",
      continent: "Europe",
      type: "fact",
      content: "Art Nouveau architecture in Riga - one-third of the city center is Art Nouveau!",
    },
    {
      name: "Lithuania",
      flag: "🇱🇹",
      continent: "Europe",
      type: "fact",
      content: "Baltic charm and amber treasures - 90% of the world's amber comes from here!",
    },
    {
      name: "Ireland",
      flag: "🇮🇪",
      continent: "Europe",
      type: "fact",
      content: "Emerald landscapes and friendly locals - more Irish people live outside Ireland than in it!",
    },
    {
      name: "Spain",
      flag: "🇪🇸",
      continent: "Europe",
      type: "fact",
      content: "Flamenco, paella, and siesta culture - home to the world's oldest restaurant!",
    },
    {
      name: "France",
      flag: "🇫🇷",
      continent: "Europe",
      type: "fact",
      content: "Art, wine, and the City of Light - produces over 400 types of cheese!",
    },
    {
      name: "Greece",
      flag: "🇬🇷",
      continent: "Europe",
      type: "fact",
      content: "Ancient history and island hopping - birthplace of democracy and the Olympics!",
    },
    {
      name: "Italy",
      flag: "🇮🇹",
      continent: "Europe",
      type: "fact",
      content: "Pasta, pizza, and Renaissance art - home to more UNESCO World Heritage sites than any other country!",
    },
    {
      name: "Morocco",
      flag: "🇲🇦",
      continent: "Africa",
      type: "fact",
      content:
        "Vibrant souks and Sahara sunsets - where Africa meets the Mediterranean in a burst of colors and spices!",
    },
  ]

  const continents = {
    Asia: { color: "from-red-400 to-orange-400", count: 0 },
    Europe: { color: "from-blue-400 to-purple-400", count: 0 },
    "North America": { color: "from-green-400 to-teal-400", count: 0 },
    "Central America": { color: "from-yellow-400 to-orange-400", count: 0 },
    Oceania: { color: "from-cyan-400 to-blue-400", count: 0 },
    Africa: { color: "from-amber-400 to-red-400", count: 0 },
  }

  // Count countries per continent
  countries.forEach((country) => {
    continents[country.continent as keyof typeof continents].count++
  })

  return (
    <section id="travels" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Travel Adventures</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-6xl">🌍</span>
              <div className="text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  36 Countries
                </p>
                <p className="text-sm text-muted-foreground">6 Continents</p>
              </div>
              <span className="text-6xl">✈️</span>
            </div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Each pin on my map tells a story. Hover over the countries to discover the memories and fun facts I've
              collected along the way!
            </p>
          </motion.div>

          {/* Continent Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {Object.entries(continents).map(([continent, data]) => (
              <div key={continent} className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border">
                <div className={`text-2xl font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
                  {data.count}
                </div>
                <div className="text-xs text-muted-foreground">{continent}</div>
              </div>
            ))}
          </motion.div>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredCountry(country.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <motion.div
                  className="relative p-4 rounded-2xl bg-background/80 backdrop-blur-sm border cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      continents[country.continent as keyof typeof continents].color
                    } opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Country content */}
                  <div className="relative z-10 text-center">
                    <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {country.flag}
                    </div>
                    <div className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors">
                      {country.name}
                    </div>
                  </div>

                  {/* Enhanced hover tooltip */}
                  {hoveredCountry === country.name && (
                    <motion.div
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20"
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-background/95 backdrop-blur-sm border rounded-xl p-4 shadow-xl max-w-xs">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">{country.flag}</span>
                          <div className="text-sm font-semibold text-foreground">{country.name}</div>
                          <div
                            className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${
                              continents[country.continent as keyof typeof continents].color
                            } text-white font-medium`}
                          >
                            {country.continent}
                          </div>
                        </div>

                        {country.type === "fact" && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <span>💡</span>
                              <span className="font-medium">Fun Fact</span>
                            </div>
                            <div className="text-xs text-muted-foreground leading-relaxed">{country.content}</div>
                          </div>
                        )}

                        {country.type === "photo" && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <span>📸</span>
                              <span className="font-medium">Memory</span>
                            </div>
                            <img
                              src={country.content || "/placeholder.svg"}
                              alt={`Memory from ${country.name}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                          </div>
                        )}

                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-background/95" />
                      </div>
                    </motion.div>
                  )}

                  {/* Subtle glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${
                      continents[country.continent as keyof typeof continents].color
                    } blur-xl`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Fun fact */}
          <motion.div
            className="text-center mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-400/10 to-pink-400/10 border"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-2xl mb-2">🎯</div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Fun fact:</span> I've traveled approximately{" "}
              <span className="font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                200,000+ miles
              </span>{" "}
              across the globe - that's like going around the Earth 8 times!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
