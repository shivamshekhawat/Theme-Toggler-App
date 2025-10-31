import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

export default function ApiDocsPage() {
  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">API Documentation</h1>
        <p className="text-muted-foreground mt-2">Endpoints for managing themes and configurations</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>POST /api/themes</CardTitle>
          <CardDescription>Save a new theme configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Request Body</h4>
            <CodeBlock
              code={`{
  "accentColor": "#3b82f6",
  "primaryColor": "#000000"
}`}
            />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Response</h4>
            <CodeBlock
              code={`{
  "_id": "507f1f77bcf86cd799439011",
  "accentColor": "#3b82f6",
  "primaryColor": "#000000",
  "savedAt": "2025-10-31T12:00:00Z"
}`}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>GET /api/themes</CardTitle>
          <CardDescription>Retrieve all saved theme configurations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Response</h4>
            <CodeBlock
              code={`[
  {
    "_id": "507f1f77bcf86cd799439011",
    "accentColor": "#3b82f6",
    "primaryColor": "#000000",
    "savedAt": "2025-10-31T12:00:00Z"
  }
]`}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>GET /api/themes/:id</CardTitle>
          <CardDescription>Retrieve a specific theme configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Response</h4>
            <CodeBlock
              code={`{
  "_id": "507f1f77bcf86cd799439011",
  "accentColor": "#3b82f6",
  "primaryColor": "#000000",
  "savedAt": "2025-10-31T12:00:00Z"
}`}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
