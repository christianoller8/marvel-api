import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { ListService } from "./list.service";

describe("ListService", () => {
  let service: ListService;
  let httpTestingController: HttpTestingController;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockResponse: any = {
    code: 200,
    status: "Ok",
    data: {
      total: 2,
      results: [
        {
          id: 1,
          name: "Serie 1",
          description: "Serie 1 description",
        },
        {
          id: 2,
          name: "Serie 2",
          description: "Serie 2 description",
        },
      ],
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListService],
    });
    service = TestBed.inject(ListService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it("should return a list of series", () => {
    const offset = 0;
    const limit = 20;

    service.getAllCharacters(offset, limit).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(
      `http://gateway.marvel.com/v1/public/series?ts=1&apikey=0a96d4363b0c58d41704bcd4aa21e4c1&hash=bc2909e59101bfc0ba79e0f37a8cdf01&offset=${offset}&limit=${limit}`
    );
    expect(req.request.method).toEqual("GET");
    req.flush(mockResponse);
  });
});
