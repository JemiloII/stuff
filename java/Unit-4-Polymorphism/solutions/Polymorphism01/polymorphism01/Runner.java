package polymorphism01;

abstract class FileImport {
  abstract void outputImporterName();
}

public class Runner {
  public void run(FileImport o) {
    o.outputImporterName();
  }
}
