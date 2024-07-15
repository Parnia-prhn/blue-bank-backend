import { Model } from "mongoose";

interface PaginationOptions {
  page: number;
  pageSize: number;
}

interface PaginatedResponse<T> {
  data: T[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
  };
}

export async function paginate<T>(
  model: Model<T>,
  options: PaginationOptions,
): Promise<PaginatedResponse<T>> {
  const { page, pageSize } = options;

  // Fetch total number of documents
  const totalItems = await model.countDocuments({ isDeleted: false });

  // Fetch paginated documents
  const data = await model
    .find({ isDeleted: false })
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .exec();

  return {
    data,
    meta: {
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      currentPage: page,
      pageSize,
    },
  };
}
