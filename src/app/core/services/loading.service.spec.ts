import { TestBed } from "@angular/core/testing";
import { LoaderService } from "./loading.service";

describe("LoaderService", () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return false when no loading has been set", () => {
    expect(service.getLoading()).toBe(false);
  });

  it("should return true when loading has been set to true", () => {
    service.setLoading(true);
    expect(service.getLoading()).toBe(true);
  });

  it("should return false when loading has been set to false", () => {
    service.setLoading(false);
    expect(service.getLoading()).toBe(false);
  });
});
