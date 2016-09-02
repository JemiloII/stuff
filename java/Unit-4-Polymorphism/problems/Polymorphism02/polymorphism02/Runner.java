package polymorphism02;

public class Runner {
  public void run(Object o) {
    if (o instanceof JSONImporter) {
      ((JSONImporter) o).importJSON();
    } else if (o instanceof XMLImporter) {
      ((XMLImporter) o).importXML();
    } else if (o instanceof CSVImporter) {
      ((CSVImporter) o).importCSV();
    }
  }
}
