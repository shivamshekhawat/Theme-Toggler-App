"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

interface ThemeConfig {
  _id?: string
  accentColor: string
  primaryColor: string
  savedAt?: string
}

const ACCENT_COLORS = [
  { name: "Blue", value: "#3b82f6" },
  { name: "Green", value: "#10b981" },
  { name: "Purple", value: "#8b5cf6" },
  { name: "Red", value: "#ef4444" },
  { name: "Amber", value: "#f59e0b" },
  { name: "Pink", value: "#ec4899" },
  { name: "Cyan", value: "#06b6d4" },
  { name: "Slate", value: "#64748b" },
]

export function ThemeCustomizer() {
  const [config, setConfig] = useState<ThemeConfig>({
    accentColor: "#3b82f6",
    primaryColor: "#000000",
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  // Load theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("themeConfig")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setConfig(parsed)
        applyTheme(parsed)
      } catch (error) {
        console.error("Failed to parse saved theme:", error)
      }
    }
  }, [])

  const applyTheme = (themeConfig: ThemeConfig) => {
    const root = document.documentElement
    root.style.setProperty("--primary", themeConfig.accentColor)
    root.style.setProperty("--accent", themeConfig.primaryColor)
  }

  const handleColorChange = (color: string, type: "accent" | "primary") => {
    const newConfig = {
      ...config,
      [type === "accent" ? "accentColor" : "primaryColor"]: color,
    }
    setConfig(newConfig)
    applyTheme(newConfig)
  }

  const handleSave = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/themes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem("themeConfig", JSON.stringify(data))
        toast({
          title: "Theme saved successfully",
          description: "Your custom theme has been saved.",
        })
      }
    } catch (error) {
      console.error("Error saving theme:", error)
      // Fallback: save to localStorage anyway
      localStorage.setItem("themeConfig", JSON.stringify(config))
      toast({
        title: "Theme saved locally",
        description: "Your theme was saved to your browser.",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    const defaultConfig = {
      accentColor: "#3b82f6",
      primaryColor: "#000000",
    }
    setConfig(defaultConfig)
    applyTheme(defaultConfig)
    localStorage.removeItem("themeConfig")
    toast({
      title: "Theme reset",
      description: "Your theme has been reset to default.",
    })
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Theme Customizer</h1>
        <p className="text-muted-foreground">Customize your accent and primary colors for a personalized experience</p>
      </div>

      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Accent Color</CardTitle>
              <CardDescription>Choose your primary accent color</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-4 gap-3">
                {ACCENT_COLORS.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorChange(color.value, "accent")}
                    className="group relative"
                  >
                    <div
                      className={`w-full aspect-square rounded-lg transition-transform ${
                        config.accentColor === color.value
                          ? "ring-2 ring-offset-2 ring-offset-background ring-foreground scale-105"
                          : "hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.value }}
                    />
                    <p className="text-xs text-center mt-2 text-muted-foreground">{color.name}</p>
                  </button>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-lg bg-secondary">
                <p className="text-sm font-mono">{config.accentColor}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Primary Color</CardTitle>
              <CardDescription>Choose your primary color</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-4 gap-3">
                {ACCENT_COLORS.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorChange(color.value, "primary")}
                    className="group relative"
                  >
                    <div
                      className={`w-full aspect-square rounded-lg transition-transform ${
                        config.primaryColor === color.value
                          ? "ring-2 ring-offset-2 ring-offset-background ring-foreground scale-105"
                          : "hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.value }}
                    />
                    <p className="text-xs text-center mt-2 text-muted-foreground">{color.name}</p>
                  </button>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-lg bg-secondary">
                <p className="text-sm font-mono">{config.primaryColor}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
              <CardDescription>See how your theme looks in action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg text-white space-y-3" style={{ backgroundColor: config.accentColor }}>
                  <h3 className="font-bold text-lg">Accent Color Preview</h3>
                  <p className="text-sm opacity-90">This is how your accent color appears on elements</p>
                </div>

                <div className="p-6 rounded-lg text-white space-y-3" style={{ backgroundColor: config.primaryColor }}>
                  <h3 className="font-bold text-lg">Primary Color Preview</h3>
                  <p className="text-sm opacity-90">This is how your primary color appears on elements</p>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-bold mb-4">Component Examples</h3>
                <div className="space-y-3">
                  <Button className="w-full">Accent Button</Button>
                  <Button variant="secondary" className="w-full">
                    Secondary Button
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex gap-3 justify-end">
        <Button variant="outline" onClick={handleReset} disabled={loading}>
          Reset to Default
        </Button>
        <Button onClick={handleSave} disabled={loading} className="gap-2">
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          Save Theme
        </Button>
      </div>
    </div>
  )
}
