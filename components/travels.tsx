"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export function Travels() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const countries = [
    { name: "India", flag: "🇮🇳", continent: "Asia", memory: "Home sweet home - where it all began!" },
    { name: "USA", flag: "🇺🇸", continent: "North America", memory: "Land of dreams and endless opportunities" },
    { name: "Singapore", flag: "🇸🇬", continent: "Asia", memory: "Garden city with incredible street food" },
    { name: "Sri Lanka", flag: "🇱🇰", continent: "Asia", memory: "Beautiful beaches and ancient temples" },
    { name: "Hong Kong", flag: "🇭🇰", continent: "Asia", memory: "Skyline views and dim sum delights" },
    { name: "Australia", flag: "🇦🇺", continent: "Oceania", memory: "Koalas, kangaroos, and the Great Barrier Reef" },
    { name: "New Zealand", flag: "🇳🇿", continent: "Oceania", memory: "Middle Earth landscapes and adventure sports" },
    { name: "Costa Rica", flag: "🇨🇷", continent: "Central America", memory: "Pura vida and incredible biodiversity" },
    { name: "Panama", flag: "🇵🇦", continent: "Central America", memory: "Engineering marvel of the Panama Canal" },
    { name: "Canada", flag: "🇨🇦", continent: "North America", memory: "Maple syrup, politeness, and stunning nature" },
    { name: "UK", flag: "🇬🇧", continent: "Europe", memory: "Tea time and historic castles" },
    { name: "Germany", flag: "🇩🇪", continent: "Europe", memory: "Oktoberfest and fairy tale castles" },
    { name: "Czech Republic", flag: "🇨🇿", continent: "Europe", memory: "Prague's magical architecture" },
    { name: "Austria", flag: "🇦🇹", continent: "Europe", memory: "Sound of Music and Alpine beauty" },
    { name: "Netherlands", flag: "🇳🇱", continent: "Europe", memory: "Tulips, windmills, and cycling everywhere" },
    { name: "Hungary", flag: "🇭🇺", continent: "Europe", memory: "Budapest's thermal baths and ruin bars" },
    { name: "Sweden", flag: "🇸🇪", continent: "Europe", memory: "Northern lights and IKEA meatballs" },
    { name: "Denmark", flag: "🇩🇰", continent: "Europe", memory: "Hygge culture and colorful Nyhavn" },
    { name: "Norway", flag: "🇳🇴", continent: "Europe", memory: "Fjords and midnight sun" },
    { name: "Bahamas", flag: "🇧🇸", continent: "North America", memory: "Crystal clear waters and swimming pigs" },
    { name: "Mexico", flag: "🇲🇽", continent: "North America", memory: "Tacos, tequila, and ancient pyramids" },
    { name: "Belgium", flag: "🇧🇪", continent: "Europe", memory: "Waffles, chocolate, and medieval charm" },
    { name: "UAE", flag: "🇦🇪", continent: "Asia", memory: "Desert luxury and futuristic architecture" },
    { name: "Tanzania", flag: "🇹🇿", continent: "Africa", memory: "Safari adventures and Mount Kilimanjaro" },
    { name: "Kenya", flag: "🇰🇪", continent: "Africa", memory: "Great Migration and Maasai culture" },
    { name: "Poland", flag: "🇵🇱", continent: "Europe", memory: "Pierogi and historic Krakow" },
    { name: "Finland", flag: "🇫🇮", continent: "Europe", memory: "Saunas and Santa's homeland" },
    { name: "Estonia", flag: "🇪🇪", continent: "Europe", memory: "Digital nomad paradise and medieval Tallinn" },
    { name: "Latvia", flag: "🇱🇻", continent: "Europe", memory: "Art Nouveau architecture in Riga" },
    { name: "Lithuania", flag: "🇱🇹", continent: "Europe", memory: "Baltic charm and amber treasures" },
    { name: "Ireland", flag: "🇮🇪", continent: "Europe", memory: "Emerald landscapes and friendly locals" },
    { name: "Spain", flag: "🇪🇸", continent: "Europe", memory: "Flamenco, paella, and siesta culture" },
    { name: "France", flag: "🇫🇷", continent: "Europe", memory: "Art, wine, and the City of Light" },
    { name: "Greece", flag: "🇬🇷", continent: "Europe", memory: "Ancient history and island hopping" },
    { name: "Italy", flag: "🇮🇹", continent: "Europe", memory: "Pasta, pizza, and Renaissance art" },
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
                  35 Countries
                </p>
                <p className="text-sm text-muted-foreground">6 Continents</p>
              </div>
              <span className="text-6xl">✈️</span>
            </div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Each pin on my map tells a story. Hover over the countries to discover the memories I've collected along
              the way!
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

                  {/* Hover tooltip */}
                  {hoveredCountry === country.name && (
                    <motion.div
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <div className="bg-background/95 backdrop-blur-sm border rounded-lg p-3 shadow-lg max-w-xs">
                        <div className="text-xs font-medium text-foreground mb-1">{country.continent}</div>
                        <div className="text-xs text-muted-foreground">{country.memory}</div>
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
