package polymorphism02;

interface FileImport {
  void outputImporterName();
}

public class Runner {
  public void run(FileImport o) {
    o.outputImporterName();
  }
}
