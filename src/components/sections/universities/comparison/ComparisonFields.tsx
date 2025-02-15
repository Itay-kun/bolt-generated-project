import { ComparisonField } from "./fields/types";
import { useBasicFields } from "./fields/BasicFields";
import { useLocationFields } from "./fields/LocationFields";
import { useAcademicFields } from "./fields/AcademicFields";
import { useAdministrativeFields } from "./fields/AdministrativeFields";
import { useFacilityFields } from "./fields/FacilityFields";
import { useLinkFields } from "./fields/LinkFields";

interface ComparisonFieldsProps {
  language: string;
}

export type { ComparisonField };

export const useComparisonFields = ({ language }: ComparisonFieldsProps) => {
  const basicFields = useBasicFields({ language });
  const locationFields = useLocationFields({ language });
  const academicFields = useAcademicFields({ language });
  const administrativeFields = useAdministrativeFields({ language });
  const facilityFields = useFacilityFields({ language });
  const linkFields = useLinkFields({ language });

  const comparisonFields: ComparisonField[] = [
    ...basicFields,
    ...locationFields,
    ...academicFields,
    ...administrativeFields,
    ...facilityFields,
    ...linkFields
  ];

  return comparisonFields;
};
