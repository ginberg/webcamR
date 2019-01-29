library(shiny)
library(webcamR)

ui <- fluidPage(
  titlePanel("Webcam htmlwidget"),
  webcamROutput('widgetOutput')
)

server <- function(input, output, session) {
  output$widgetOutput <- renderWebcamR(
    webcamR()
  )
}

shinyApp(ui, server)
